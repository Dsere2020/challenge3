import React from 'react'
import styled from 'styled-components'
const CentralRight = styled.div`
    flex:1;
    padding:5px;
    box-sizing: border-box;
    background-color: #00474B;
    border-radius: 12.5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    @media(max-width:938px){
     min-width: 100%;
     max-width: 100%;
    }
`
const TopDivs = styled.div`
  width: 100%;
  height: 100%;
  flex:3;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const TopDiv = styled.div`
  flex:1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`
const TopDivL = styled.div`
  flex:4;
  padding-left: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  
`
const TopDivR = styled.div`
   flex:3;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#26C2AE;
  font-size: 48px;
  font-weight: 700;
`

const BottomDiv = styled.div`
  width: 100%;
  height: 100%;
  flex:1;
  display: flex;
  justify-content: center;
`
const BottomDivL = styled.div`
  flex:4;
  padding-left: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`
const BottomDivR = styled.div`
  flex:3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #26C2AE;
  font-size: 48px;
  font-weight: 700;

`


const JustP = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 700;
`
const JustPSecond= styled.div`
  color: white;
  font-size: 16px;
  font-weight: 700;
  
`
const ResetDiv = styled.div`
  flex:1;
  height: 100%;
  width: 80%;
`
const Reset = styled.button`
  height: 48px;
  width: 100%;
  background-color:#26C2AE;
  border: none;
  border-radius:2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: #00474B;
  cursor: pointer;
  &:hover{
    background-color:#9FE8DF;
  }

`
const BigRight = ({finalTip, finalNum,reset}) => {
  return (
    <CentralRight>
           <TopDivs>
            <TopDiv>
            
           <TopDivL>
            <JustP>Tip Amount</JustP>
            <JustPSecond>/ person</JustPSecond>
           </TopDivL>
           <TopDivR>${finalTip}</TopDivR>

              </TopDiv>
        <BottomDiv>

            <BottomDivL>
            <JustP>Total Amount</JustP>
            <JustPSecond>/ person</JustPSecond>
            </BottomDivL>
            <BottomDivR>${finalNum}</BottomDivR>

             </BottomDiv>

        </TopDivs>
          <ResetDiv>
            <Reset onClick={reset}>RESET</Reset>
          </ResetDiv>

        </CentralRight>
  )
}

export default BigRight