import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BigLeft from './BigLeft'
import BigRight from './BigRight'
const Container = styled.div`
    padding: 12px;
    box-sizing: border-box;
    height: 481px;
    width: 920px;
    background-color: white;
    margin-bottom: 120px;
    border-radius: 12.5px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    gap: 12px;
    @media(max-width:938px){
      flex-direction: column;
      align-items: center;
      margin:0;
      height: 789px;
      width: 390px;
      margin-top: 41px;
      padding: 32px;
    }
`


export const BigDiv = () => {
  const[finalTip,setFinalTip] = useState("0.00");
  const[finalNum,setFinalNum] = useState("0.00");
  const[active,setActive] = useState(0);
  const[inpValue,setInpValue] = useState();
  const[inpVal,setInpVal]=useState();
  const[customInp,setCustomInp]= useState();
  const inpChange=(e)=>{
    setInpVal(e.target.value)
  }
  const handleChange =(e)=>{
    setInpValue(e.target.value)
  }

  const handleClick =(number) =>{
      setFinalTip((inpValue*number)/inpVal)
      setFinalNum((parseInt((inpValue*number)*inpVal)+parseInt(inpValue))/ inpVal)
  }
  const customInpChange=(e)=>{
    setCustomInp(e.target.value)
    
  }
  useEffect(()=>{
    if(inpValue>0){
    setFinalTip((inpValue*customInp)/ 200)}
      if(inpVal>0){
        setFinalNum((parseInt(((inpValue*customInp)/ 100)*inpVal)+parseInt(inpValue))/ inpVal)
      }
  },[customInp])
  const reset=()=>{
    setFinalTip(0)
    setFinalNum(0)
    setInpVal(0)
    setInpValue(0)
    setActive(0)
    setCustomInp(0)
  }
  return (
    <Container>
        <BigLeft 
          inpValue={inpValue} 
          setInpValue={setInpValue} 
          handleChange={handleChange} 
          active={active} 
          setActive={setActive} 
          handleClick={handleClick} 
          inpChange={inpChange}
          inpVal={inpVal}
          customInpChange={customInpChange}
          customInp={customInp}
        />


        <BigRight 
          finalTip={finalTip}
          finalNum={finalNum}
          reset={reset}
        />

    </Container>
  )
}
