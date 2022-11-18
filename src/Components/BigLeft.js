import React from 'react'
import styled from 'styled-components'
import dollar from './icon-dollar.png'
import Person from './icon-person.png'
const CentralLeft = styled.div`
  flex:1;
  border-radius: 12.5px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  
`
const TopP = styled.div`
    width: 100%;
    display: flex;
    font-weight: 700;
    justify-content: flex-start;
    font-size: 16px;
    color: #5E7A7D;
`
const BillInput = styled.div`
  margin-top: 4px;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
`
const Inp = styled.input`
    :focus-visible{
        outline:1px solid #26C2AE
    };
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius:5px;
  padding-left: 14px;
  padding-right:14px;
  font-size: 24px;
  font-weight: 700;
  border:none;
  background-color: #F3F9FA;
  background-image: url(${dollar});
  background-repeat: no-repeat;
  background-position:9.84px;
  background-size: 15.46px;
  outline: none;
  text-align: right;
  cursor: pointer;
  ::-webkit-inner-spin-button{
    -webkit-appearance:none;
    margin:0;
  }
  ::-webkit-outer-spin-button{
    -webkit-appearance:none;
    margin:0;
  };
  &:hover{
    outline: 1px solid #26C2AE;

  }
  
`
const MiddleText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  width: 100%;
  height: 26px;
  box-sizing:border-box;
  padding: 2px;
`
const MiddleP = styled.p`
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  
  text-align: left;
  color:#5E7A7D;
  @media(max-width:938px){
    
    
  }
`

const TipBox = styled.div`
  display:flex;
  width: 100%;
  height: 120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

const ButtonTop = styled.div`
  flex:1;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width:938px){
    display: none;

  } 
`
const ButtonBottom = styled.div`
    flex:1;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width:938px){
    display: none;

  } 
`
const Buttons = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 117px;
    border-radius: 2px;
    border: none;
    cursor: pointer;
    background-color:#00474B;
    color: white;
    font-size: 24px;
   @media(max-width:938px){
    display: none;
   } 
`
const ButtonResponsive = styled.div`
  display: none;
  @media(max-width:938px){
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 117px;
    border-radius: 2px;
    border: none;
    cursor: pointer;
    background-color:#00474B;
    color: white;
    font-size: 24px;
  } 
`
const ButtonResponsiveLast=styled.input`
  display: none;
  @media(max-width:938px){
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 117px;
    border:none;
    border-radius: 2px;
    cursor: pointer;
    background-color: #F3F9FA;
    color: #547878;
    :focus-visible{
      outline: 1.5px solid #26C2AE;
    }
    font-size: 24px;
    font-weight: 700;
    outline: none;
    text-align: right;
    ::-webkit-inner-spin-button{
    -webkit-appearance:none;
    margin:0;
  }
  ::-webkit-outer-spin-button{
    -webkit-appearance:none;
    margin:0;
  };
    &:hover{
      outline: 1.5px solid #26C2AE;
    }

  } 
`
const ButtonsLast = styled.input`
  display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 117px;
    border:none;
    border-radius: 2px;
    cursor: pointer;
    background-color: #F3F9FA;
    color: #547878;
    :focus-visible{
      outline: 1.5px solid #26C2AE;
    }
    font-size: 24px;
    font-weight: 700;
    outline: none;
    text-align: right;
    ::-webkit-inner-spin-button{
    -webkit-appearance:none;
    margin:0;
  }
  ::-webkit-outer-spin-button{
    -webkit-appearance:none;
    margin:0;
  };
    &:hover{
      outline: 1.5px solid #26C2AE;
    }
    @media(max-width:938px){
    display: none;
   } 
`
const ButtonResponsiveTop = styled.div`

  display: none;
  @media(max-width:938px){
    
    display: flex;
    justify-content: center;
    gap: 17px;
    margin-top: 70px;

  } 
`
const ButtonResponsiveMiddle = styled.div`
  display: none;

  @media(max-width:938px){
    display: flex;
    justify-content: center;
    gap: 17px;
    margin-top: 16px;
  } 
`
const ButtonResponsiveBottom= styled.div`
  display: none;
  @media(max-width:938px){
    display: flex;
    justify-content: center;
    gap: 17px;
    margin-top: 16px;
  } 
 
`
const BottomInput = styled.div`
  margin-top: 4px;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
`
const BottomInp= styled.input`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius:5px;
  padding-left: 14px;
  padding-right:14px;
  font-size: 24px;
  font-weight: 700;
  border:none;
  background-color: #F3F9FA;
  background-image: url(${Person});
  background-repeat: no-repeat;
  background-position:9.84px;
  background-size: 15.46px;
  text-align: right;
  outline: none;
  ::-webkit-inner-spin-button{
    -webkit-appearance:none;
    margin:0;
  }
  ::-webkit-outer-spin-button{
    -webkit-appearance:none;
    margin:0;
  };
  cursor: pointer;
  &:hover{
    outline: 1px solid #26C2AE;

  }
  :focus-visible{
        outline:1px solid #26C2AE
    };
`

const CantBeZero=styled.div`
    width: 100%;
    margin-bottom: 15px;
    height: 10px;
    font-size: 16px;
    font-weight: 700;
    text-align: right;
    margin-top: 10px;
    color: red;
`
const BigLeft = ({active,handleClick,handleChange,inpValue,inpVal,inpChange,customInp,customInpChange}) => {
    console.log(inpValue);
  return (
    <CentralLeft>
    <TopP>Bill</TopP>
    <BillInput>
      <Inp value={inpValue} onChange={handleChange} placeholder='0' type={"number"}/>
    </BillInput>
    <MiddleText>
      <MiddleP>Select Tip %</MiddleP>
    </MiddleText>

    <TipBox>
    <ButtonTop>
       <Buttons 
       style={{backgroundColor: active===0.05?"#9FE8DF":"#00474B", color: active===0.05?"#00474B": "white"}} 
       onClick={()=>{handleClick(0.05)}} 
       >
       5%</Buttons>
       <Buttons 
       style={{backgroundColor: active===0.1?"#9FE8DF":"#00474B", color: active===0.1?"#00474B": "white"}} 
       onClick={()=>{handleClick(0.1)}} 
       >10%</Buttons>
       <Buttons
       style={{backgroundColor: active===0.15?"#9FE8DF":"#00474B", color: active===0.15?"#00474B": "white"}} 
       onClick={()=>{handleClick(0.15)}} 
       >15%</Buttons>
    </ButtonTop>

    <ButtonBottom>
       <Buttons
       style={{backgroundColor: active===0.25?"#9FE8DF":"#00474B", color: active===0.25?"#00474B": "white"}} 
       onClick={()=>{handleClick(0.25)}} 
       >25%</Buttons>
       <Buttons
       style={{backgroundColor: active===0.5?"#9FE8DF":"#00474B", color: active===0.5?"#00474B": "white"}} 
       onClick={()=>{handleClick(0.5)}} 
       >50%</Buttons>
       <ButtonsLast  value={customInp} onChange={customInpChange} type={"number"} placeholder='Custom     '
       >
       </ButtonsLast>

      </ButtonBottom> 
      <ButtonResponsiveTop>
      <ButtonResponsive
      style={{backgroundColor: active===0.05?"#9FE8DF":"#00474B", color: active===0.05?"#00474B": "white"}} 
      onClick={()=>{handleClick(0.05)}} 
      >
      5%</ButtonResponsive>
      <ButtonResponsive
      style={{backgroundColor: active===0.1?"#9FE8DF":"#00474B", color: active===0.1?"#00474B": "white"}} 
      onClick={()=>{handleClick(0.1)}}
      >10%</ButtonResponsive>
      </ButtonResponsiveTop>

      
      <ButtonResponsiveMiddle>
      <ButtonResponsive
      style={{backgroundColor: active===0.15?"#9FE8DF":"#00474B", color: active===0.15?"#00474B": "white"}} 
      onClick={()=>{handleClick(0.15)}} 
      >15%</ButtonResponsive>
      <ButtonResponsive
      style={{backgroundColor: active===0.25?"#9FE8DF":"#00474B", color: active===0.25?"#00474B": "white"}} 
      onClick={()=>{handleClick(0.25)}} 
      >25%</ButtonResponsive>
      </ButtonResponsiveMiddle>


      <ButtonResponsiveBottom>
      <ButtonResponsive
      style={{backgroundColor: active===0.5?"#9FE8DF":"#00474B", color: active===0.5?"#00474B": "white"}} 
      onClick={()=>{handleClick(0.5)}} 
      >50%</ButtonResponsive>
      <ButtonResponsiveLast value={customInp} onChange={customInpChange} type={"number"} placeholder={"Custom   "}></ButtonResponsiveLast>


      </ButtonResponsiveBottom>
      
      
      
    
   
    </TipBox>

    <MiddleText> 
    
    <MiddleP>Number of People</MiddleP>
     <CantBeZero style={{display:inpVal>0?"none":"inline"}}>Can't be zero</CantBeZero>
     
   
  </MiddleText>

   
  <BottomInput>
  
  <BottomInp  value={inpVal} onChange={inpChange} placeholder='0' type={"number"}/>
  
    
  </BottomInput>
  </CentralLeft>

  )
}

export default BigLeft