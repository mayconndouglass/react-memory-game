import * as C from './App.styles'
import { Button } from './components/Button'
import { useEffect, useState } from 'react'
import { InfoItem } from './components/InfoItem'
import { GridItemType } from './types/GridItemType'
import { items } from './data/items'
import { GridItem } from './components/GridItem'
import { formatTimeElapsed } from './helpers/formatTimeElapsed'

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false)
  const [timeElapsed, setTimeElapsed] = useState<number>(0)
  const [moveCount, setMoveCount] = useState<number>(0)
  const [shownCount, setShownCount] = useState<number>()
  const [gridItems, setGridItems] = useState<GridItemType[]>([])
  
  useEffect(() => resetAndCreateGrid, [])
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) setTimeElapsed(timeElapsed + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [playing, timeElapsed])

  useEffect(() => {
    if (shownCount === 2) {
      let opened = gridItems.filter(({ shown }) => shown === true)

      if (opened.length === 2) {
        if (opened[0].item === opened[1].item) {
          let tmpGrid = [...gridItems]

          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true
              tmpGrid[i].shown = false
            }
          }
          setGridItems(tmpGrid)
          setShownCount(0)
        } else {
          setTimeout(() => {
            let tmpGrid = [...gridItems]

            for (let i in tmpGrid) {
              tmpGrid[i].shown = false
            }
            setGridItems(tmpGrid)
            setShownCount(0)
          }, 1000)
        }

        setMoveCount(moveCount => moveCount + 1)
      }
    }
  }, [shownCount, gridItems])

  // Verifica se o jogo acabou
  useEffect(() => {
    if (moveCount > 0 && gridItems.every(item => item.permanentShown === true)) {
      setPlaying(false) 
    }
  }, [moveCount, gridItems])

  const resetAndCreateGrid = () => {
    // passo 1 - resetar o jogo
    setTimeElapsed(0)
    setMoveCount(0)
    setShownCount(0)

    // passo 2 - criar o grid
    // 2.1 - criar o grid vazio
    let tempGrid: GridItemType[] = []
    for(let i = 0; i < (items.length * 2); i++) {
      tempGrid.push({ item: null, shown: false, permanentShown: false })
    }
    // passo 2.2 - preencher o grid
    for (let w = 0; w < 2; w++) {
      for (let z = 0; z < items.length; z++) {
        let pos = -1
        while(pos < 0 || tempGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2))
        } 
        
        tempGrid[pos].item = z
      }
    }
    // passo 2.3 jogar no state
    setGridItems(tempGrid)
    // passo 3 -  Começar o jogo
    setPlaying(true)
  }
  
  const handleItemClick = (index: number) => {
    const conditions = playing && index !== null && shownCount !== undefined && shownCount < 2
  
    if (conditions) {
     let tmpGrid = [...gridItems]
     let { permanentShown, shown } = tmpGrid[index]
      
     if (permanentShown === false && shown === false) {
       tmpGrid[index].shown = true
       setShownCount(shownCount + 1)
     }
     
     setGridItems(tmpGrid)
    }
  }
  
  return (
    <C.Container>
      <C.Info> 
        <C.Title>
          Jogo da Memória
        </C.Title>
      
        <C.InfoArea>
          <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label="Movimentos" value={moveCount.toString()} />
        </C.InfoArea>

        <Button label='Reiniciar' onClick={resetAndCreateGrid}/>
      </C.Info>
    
      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index) => (
            <GridItem 
              key = {index}
              item={item}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  )
}

export default App
