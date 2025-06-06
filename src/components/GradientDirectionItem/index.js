// Write your code here
import {DirectionButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, onClickDirection, isActive} = props
  const {value, displayText} = directionDetails

  const onClickBtn = () => {
    onClickDirection(value)
  }

  return (
    <ListItem>
      <DirectionButton type="button" onClick={onClickBtn} isActive={isActive}>
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
