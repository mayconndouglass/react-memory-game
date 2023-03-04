import styled from 'styled-components'

export const Container = styled.div`
  width: 250px;
  height: 50px;
  background-color: #1550FF;
  border-radius: 10px;
  cursor: pointer;
  opacity: 1;
  transition: all ease .3s;

  &:hover {
    opacity: .8;
  }
`

export const Label = styled.div`
  height: inherit;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  flex: 1;
`
