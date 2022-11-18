import React from 'react'
import styled from 'styled-components'
import { BigDiv } from './BigDiv'
import Logo from "./logo.png"
const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #C5E4E7;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    @media(max-width:938px){
      height: 100vh;
      box-sizing: border-box;
      width: 390px;

  }
`
const Topic = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 53.14px;
    width: 86.66px;
    box-sizing: border-box;
    margin-top: 220px;
    margin-bottom:40px;
    background-image: url(${Logo});
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
   @media(max-width:938px){
    margin-top:50px;
   } 
`
const reload =()=>{
  window.location.reload(false)

}

const Page = () => {
  return (
    <Container>
       <Topic onClick={reload} />
        <BigDiv/>


    </Container>
  )
}

export default Page