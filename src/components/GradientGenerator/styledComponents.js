// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  height: 100vh;
  width: 100%;
`

export const AppContainer = styled.div`
  text-align: center;
  font-family: 'Roboto';
  width: 90%;
  max-width: 550px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 28px;
`

export const Description = styled.p`
  color: #ffffff;
  font-size: 18px;
`

export const DirectionButtonsContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  list-style-type: none;
`

export const ColorsPickContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 6px;
`

export const CustomInput = styled.input`
  background-color: transparent;
  border: none;
  width: 60px;
  height: 34px;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
`
