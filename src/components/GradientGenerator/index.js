// const gradientDirectionsList = [
//   {directionId: 'TOP', value: 'top', displayText: 'Top'},
//   {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
//   {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
//   {directionId: 'LEFT', value: 'left', displayText: 'Left'},
// ]
// // Write your code here

import {Component} from 'react'
import {
  AppContainer,
  Heading,
  Description,
  DirectionButtonsContainer,
  ColorsPickContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
  GradientContainer,
  ColorInputLabel,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    fromColor: '#8ae323',
    toColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onClickDirection = value => {
    this.setState({activeDirection: value})
  }

  onChangeFromColor = event => {
    this.setState({fromColor: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColor: event.target.value})
  }

  onClickGenerate = () => {
    const {fromColor, toColor, activeDirection} = this.state
    this.setState({
      gradientValue: `to ${activeDirection}, ${fromColor}, ${toColor}`,
    })
  }

  render() {
    const {activeDirection, fromColor, toColor, gradientValue} = this.state

    return (
      <GradientContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <AppContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Description>Choose Direction</Description>
          <DirectionButtonsContainer>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                directionDetails={each}
                isActive={activeDirection === each.value}
                onClickDirection={this.onClickDirection}
              />
            ))}
          </DirectionButtonsContainer>

          <Description>Pick the Colors</Description>
          <ColorsPickContainer>
            <div>
              <ColorValue>{fromColor}</ColorValue>
              <CustomInput
                type="color"
                value={fromColor}
                onChange={this.onChangeFromColor}
              />
            </div>
            <div>
              <ColorValue>{toColor}</ColorValue>
              <CustomInput
                type="color"
                value={toColor}
                onChange={this.onChangeToColor}
              />
            </div>
          </ColorsPickContainer>

          <GenerateButton onClick={this.onClickGenerate}>
            Generate
          </GenerateButton>
        </AppContainer>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
