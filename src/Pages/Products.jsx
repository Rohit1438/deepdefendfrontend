import React, { useEffect, useState } from "react";
import styled from "styled-components";
import styles from "../Css/Products.module.css";
import axios from "axios";
import PostCard from "../Components/Card";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOEMProducts, getProducts } from "../Redux/products/action";
import { CircularProgress, CircularProgressLabel, Flex, Radio, Stack, Toast, useToast } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import image1 from "../Images/1.png"
import image2 from "../Images/2.png"
import Card from "../Components/Card";
const Products = () => {


  
  return (
    <div style={{backgroundColor:"#100F10"}}>
      <div className={`${styles.FullProductsPage}`}>
        <div className={`${styles.ProductsPageSideBar}`}>
          <Filter className="filters">
           <p> <i class="fa-solid fa-house"></i> HOME</p>
  <div className="dashboard">
  <p id="dash">DASHBOARD</p>
       <p>COVERAGE</p>
       <p>CURRENT VIEW TOOLS</p>
  </div>
  <div className="premises">
<p><i class="fa-solid fa-right-to-bracket"></i> ON-PREMISES</p>
<p><i class="fa-solid fa-cloud"></i> SSPM</p>
<p> <i class="fa-solid fa-cloud"></i> CSPM</p>
<p> <i class="fa-solid fa-wand-magic-sparkles"></i> FRAMEWORKS</p>
<p> <i class="fa-solid fa-pen-to-square"></i>  REPORTS</p>
<p> <i class="fa-solid fa-gear"></i> SYSTEM</p>
  </div>
  
          </Filter>
        </div>
        <Div className={`${styles.ProductsPage}`}>
          
        <Navbar />  
    
        <DIV >
            
            <div className="leftdiv">
            <p style={{color:"white",textAlign:"left",paddingLeft:"20px"}}><i class="fa-solid fa-magnifying-glass-plus"></i> <i class="fa-solid fa-magnifying-glass-minus"></i></p>
                <img id="img1" src={image1} alt="" />
                <img id="img2" src={image2} alt="" />
                </div>
            <div className="rightbar">

<div className="breadcrumb">
<p>CONTROLS</p>
<p>|</p>
<p> COVERAGE</p>
<p>|</p>
<p>TOOLS |</p>
<p>|</p>
<p>TRENDS</p>
</div>
<div className="score">
<p style={{fontSize:"10px"}}>TOOLS SCORE</p>
<div style={{padding:"10px"}}>
<CircularProgress value={60} color='yellow.500' thickness={3}>

<CircularProgressLabel>60</CircularProgressLabel>
</CircularProgress>
<div className="radio" style={{display:"flex",paddingTop:"40px",justifyContent:"space-between",alignItems:"center"}}>

    <p style={{fontSize:"10px"}}>TOOLS LIST</p>
    <Stack style={{fontSize:"8px"}} spacing={4} direction='row'>
<Radio  size='sm' name='1' colorScheme='white' >
     Slow
  </Radio>
    <Radio size='sm' name='1' colorScheme='white'>
    Regular
  </Radio>
  <Radio size='sm' name='1' colorScheme='white' defaultChecked>
    Fast
  </Radio>
  <Radio size='sm' name='1' colorScheme='white' >
    Manual 
  </Radio>
  </Stack>


</div>
<div className="cards">
    <Card url={"https://iconape.com/wp-content/png_logo_vector/qualys-logo.png"} p={"local"} title={"Qualsis Vulnability Management"} value={"N/A"}/>
    <Card url={"https://e7.pngegg.com/pngimages/899/221/png-clipart-splunk-vertical-logo-tech-companies-thumbnail.png"} p={"local"} title={"Splunk Enterprize Security"} value={65}/>
    <Card url={"https://images.ctfassets.net/szx3os6exj55/4pI1bDXmQf7WEOoUC2hjt0/40c04772411570628dd43069c7a8ae3d/ServiceNow_400x400.png?w=400&h=400&q=72&fm=webp"} p={"local"} value={30} title={"Service Now ITSM"}/>
    
</div>
</div>

</div>

            </div>
        </DIV>
        
        </Div>
      </div>
    </div>
  );


};

export default Products;
const DIV = styled.div`
color: #c6c6c6;
.score{
    padding:20px 20px 20px;
    text-align: left;
}
.score>p{
    padding: 10px;
}
.cards{
    padding: 25px;
}
display: grid;
grid-template-columns: 70% 30%;
.rightbar{
    background: rgb(125,5,9);
    background: rgb(81,11,14);
background: linear-gradient(263deg, rgba(81,11,14,1) 0%, rgba(16,15,16,1) 48%);
height:70vh;

padding-top: 20px;
border-left: 3px solid grey;
}
.leftdiv{
    margin-top:30px ;
    height: 70vh;
}
#img1{
    width: 88%;
    top: 0;
  
    margin: auto;
}
#img2{
    width: 95%;
    top: 0;
  
    margin: auto;
}
.breadcrumb{
    display: flex;
    justify-content: space-evenly;
    font-size: 11px;
}
`;
const Filter = styled.div`
 
  display: grid;
  background-color: #15181D;
text-align: left;
width: 100%;
  height: 100%;

color: #d7d7d7;
p{
    padding: 15px;
    font-size: 12px;
}
.premises>p{
    border-bottom: 1px solid #d7d7d456;
}
.dashboard{
    background-color: #100F12;
}
#dash{
    background-color: #124671;
}
  select {
    width: 100%;
    padding: 5px 20px 5px;
    font-weight: 800;
    margin: auto;
    background-color: #dbefff;
  }
display: flex;
flex-direction: column;
  label {
    font-size: 20px;
    font-weight: 800;
  }
  @media (max-width: 400px) {
    .search {
      width: 80%;
    }
    label {
      display: none;
    }
    select {
      margin-bottom: 10px;
      width: 80%;
    }
    align-items: center;
  }
`;

const Div = styled.div`
  margin: auto;
  /* border: 10px solid red; */
  background-color: #100F10;
  height: 100vh;
  /* background-color: black; */
  color: white;
  color: #171819;
  table {
  
    width: 95%;
    margin: auto;
    font-size: 20px;
    background-color: white;
    position: sticky;
    height: 500px;
  }
  th{
  padding: 10px;
}
  table{
    font-size: 25px;

    
  }
  thead{
    background-color: #626262;
    color:white;
  }
  tbody{
    background-color:#bad9f3 ;
  }
  
  #ProductpageTitle {
    width: 70%;
    justify-content: center;
    /* border-top: 1px solid #e4c59066; */
    font-family: "Tangerine", cursive;
    font-size: 4rem;
    font-weight: 100;
    padding-top: 50px;
    padding-bottom: 30px;
    margin: auto;
  }
  #ProductpageTitle > h1 {
    margin: auto;
    justify-content: center;
  }
  a {
    color: #e4c590;
    font-size: 30px;
    text-decoration: none;
  }
  #anchor {
    width: 20%;
    justify-content: space-evenly;
    display: flex;
    margin: auto;
    align-items: center;
    padding-bottom: 20px;
  }

  #postButton {
    width: 70%;
    color: #e4c590c2;
    height: 7rem;
    background-color: #e4c59027;
    font-size: 2.5rem;
    font-family: "Tangerine", cursive;
    outline: none;
    border: none;
    border-radius: 5px;
    border: 2px solid #e4c5908f;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #postButton:hover {
    height: 7rem;
    background-color: transparent;
    border: 2px solid #e4c5908f;
  }
  i {
    width: 2rem;
  }

  #PostIcons {
    width: 100%;
    display: flex;
    border-top: 1px solid #e4c590c2;
    padding-top: 10px;
    justify-content: space-around;
  }

  .filters {
    display: grid;
    border: 1px solid red;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1300px) {
    #ProductpageTitle {
      font-size: 4rem;
    }
    #anchor {
      width: 40%;
      justify-content: space-around;
    }
    a {
      color: #e4c590;

      text-decoration: none;
    }
    width: 100%;
  }

  @media (max-width: 400px) {
    #ProductpageTitle {
      font-size: 2.5rem;
    }
    #anchor {
      width: 40%;
      justify-content: space-around;
    }
    a {
      color: #e4c590;
      font-size: 20px;
      text-decoration: none;
    }
  }
`;
