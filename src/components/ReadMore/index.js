import {useState} from 'react'

import {
  MainContainer,
  Heading,
  Description,
  Image,
  Content,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [isButtonClicked, changeButtonStatus] = useState(false)

  const changeStatus = () => changeButtonStatus(prevState => !prevState)

  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Description>Hooks are a new addition to react</Description>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Content>
        {isButtonClicked
          ? reactHooksDescription
          : reactHooksDescription.slice(
              0,
              reactHooksDescription.length / 2 - 20,
            )}
      </Content>
      <Button type="button" onClick={changeStatus}>
        {isButtonClicked ? 'Read Less' : 'Read More'}
      </Button>
    </MainContainer>
  )
}

export default ReadMore
