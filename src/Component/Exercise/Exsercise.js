import React, { useEffect, useState } from 'react';

import Cart from '../Cart/Cart';
import Equipment from '../Equipment/Equipment';

import Header from '../Header/Header';

import './Exercise.css'

const Exsercise = () => {
   
    const [exercise,setExercise]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('Exercise.json')
        .then(res=>res.json())
        .then(data=>setExercise(data))
    },[])
    const AddlistButton=(x,id)=>{
        const newCart=[...cart,x];
        setCart(newCart)
        
           
        const quantity=localStorage.getItem(id)
        localStorage.setItem(id,1)
    if(quantity)
    {
       const newQuantity=parseInt(quantity)+1;
       localStorage.setItem(id,newQuantity)
    }
    else{
       localStorage.setItem(id,1)
    }
        
    }
    
    return (
        <div className='shop-container'>
        <div>
            <Header></Header>
        <div className="product-container">
            {
             exercise.map(equipment=>
                <Equipment
               key={equipment.id}
                equipment={equipment}
                AddlistButton={AddlistButton}

                ></Equipment>)
                    
                    
            }
        </div>
        </div>
        <div className="cart-container">
           <Cart 
              cart={cart}
              ></Cart>
            
              
        </div>

    </div>
    );
};

export default Exsercise;

