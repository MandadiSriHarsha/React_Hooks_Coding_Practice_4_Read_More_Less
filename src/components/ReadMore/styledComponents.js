import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  color: #1e293b;
  font-size: 25px;
  margin: 0px 0px 0px 0px;
  padding: 0px 10px 20px 10px;
  text-align: center;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  color: #1e293b;
  margin: 0px 0px 0px 0px;
  padding: 0px 10px 20px 10px;
  text-align: center;
`

export const Image = styled.img`
  width: 90%;
  max-width: 570px;
  border-radius: 5px;
`

export const Content = styled.p`
  font-family: 'Roboto';
  text-align: left;
  color: #334155;
  font-size: 16px;
  font-weight: 500;
  margin: 0px 0px 0px 0px;
  padding: 20px 10px 20px 10px;
  @media screen and (min-width: 992px) {
    font-size: 18px;
  }
`

export const Button = styled.button`
  font-family: 'Roboto';
  font-weight: 500;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  border: 0px solid;
  background-color: #1f81ff;
  margin: 0px 0px 0px 0px;
  padding: 12px 15px 12px 15px;
  border-radius: 10px;
`
