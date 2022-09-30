import React from 'react';
import './Equipment.css'

const Equipment = (props) => {
    const {name,img,description,age,time,id}=props.equipment
    
    
    return (
     
        <div className='equipment'>
        <img src={img} alt="" />
        <div className='desc'>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>For Age : {age} </p>
        <p>Time required : {time}</p>
        
        </div>
        <button  onClick={()=>props.AddlistButton(props.equipment,id)} className='button-cart'>Add to list</button>
         </div>
  
       
    );
};

export default Equipment;

