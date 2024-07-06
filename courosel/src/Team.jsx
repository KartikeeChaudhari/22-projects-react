import React, { useState } from 'react'
import data from './Data'
import classes from './Team.module.css';
import { FaArrowCircleRight,FaArrowCircleLeft} from "react-icons/fa";



const Team = () => {
    const [index,setIndex]=useState(0);
    
    const {name,image,job}=data[index];
    
    const handleBack=()=>{
        setIndex(index-1)
    }
    const handleNext=()=>{
       setIndex(index+1)
        
    }
  return (
    <>
    <div className={classes.container}>
        <section className={classes.imagecontainer}>
        
        <img src={image} alt={name}></img>
        
        </section>
        <div className={classes.button}>
            
            <button disabled={index===0}><FaArrowCircleLeft onClick={handleBack} /></button>
            <button disabled={index===data.length-1}><FaArrowCircleRight onClick={handleNext}/></button>

        </div>
        
        <div className={classes.name}>
            <h1>{name}</h1>
        </div>
        <div className={classes.details}>
            <p>{job}</p>
        </div>

    </div>
      
    </>
  )
}

export default Team
