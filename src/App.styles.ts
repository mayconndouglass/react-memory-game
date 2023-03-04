import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: auto;
  padding: 50px 0;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

export const Info = styled.section`
  display: flex;
  flex-direction: column;

  @media (max-width: 750px) {
    margin-bottom: 50px;
    align-items: center;
  }
`

export const Title = styled.div`
  display: block;
  font-size: 2rem;
`

export const InfoArea = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  margin: 10px 0;

  @media (max-width: 750px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`

export const GridArea = styled.section`
  display: flex;


  @media (max-width: 750px) {
    justify-content: center;
    margin: 0 20px;
  }
`
 
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`
