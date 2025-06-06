// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  margin: 8px;
`

export const DirectionButton = styled.button`
  background-color: #ededed;
  color: #1e293b;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`
