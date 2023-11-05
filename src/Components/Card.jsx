import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const Card = ({url,p,title,value}) => {
  return (
    <Div>
    <div className='imgcls'>
        <img src={url} alt="" />
        <div style={{display:"flex",
        width:"100%",justifyContent:"space-between",padding:"0px 10px 0px 20px"}}>
           <div >
           <p id='title'>{title}</p>
            <p>{p}</p>
           </div>
           <div style={{padding:"10px"}}>
              <CircularProgress value={value} color='yellow.500' thickness={3}>

<CircularProgressLabel>{value}</CircularProgressLabel>
</CircularProgress>
           </div>
        </div>
      
    </div>
    <div className='iconclass'>
        <div style={{width:"20%",display:"flex",justifyContent:"space-between"}}>
 <i class="fa-solid fa-cloud"></i> 

    <i class="fa-solid fa-wand-magic-sparkles"></i>
        </div>
   
    <p style={{backgroundColor:"red",fontSize:"15px",color:"white",borderRadius:"100px", alignItems:"center",height:"20px",width:"20px"}}>13</p>
    </div>
    </Div>
  )
}

export default Card
const Div=styled.div`
    color: #d6d6d6;
    font-size: 10px;
    height: 120px;
    margin-top: 20px;
#title{
    font-weight: 800;
    font-size: 12px;
    
}
.imgcls{
    background-color: #121115;
    display: flex;
  

}
img{
    height: 50px;
    background-color: white;
    padding: 10px;
}
.iconclass{
    background-color: #010003;
    padding:7px;
    font-size: 15px;
    display: flex;
    justify-content:space-between
}
.fa{
    margin: 20px;
}
`
