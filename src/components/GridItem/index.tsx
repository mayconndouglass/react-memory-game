import * as C from './styles'
import { GridItemType } from '../../types/GridItemType'
import league from '../../assets/league.png'
import { items } from '../../data/items'

type Props = {
  item: GridItemType,
  onClick: () => void
}

export const GridItem = ({ item, onClick }: Props) => {
  return (
    <C.Container onClick={onClick}>
      {!item.permanentShown && !item.shown &&
        <C.Img src={league} alt="Logo League Of Legends" />
      }
      
      {(item.permanentShown || item.shown) && item.item !== null &&
        <C.Img src={items[item.item].img} alt="" />
      }
    </C.Container>
  )
}
