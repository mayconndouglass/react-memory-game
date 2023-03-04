import styled from 'styled-components'

export const Container = styled.div`
  width: 200px;
  height: 200px;

  @media (max-width: 750px) {
    width: 80px;
    height: 80px;;
  }
`

export const Img = styled.img`
  border-radius: 12px;
  background-position: cover;
  width: 200px;
  height: 200px;

  @media (max-width: 750px) {
    width: 80px;
    height: 80px;;
  }
`
