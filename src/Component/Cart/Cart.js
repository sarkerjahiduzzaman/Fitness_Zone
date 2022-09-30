import React, {useState } from 'react';
import './Cart.css'

const Cart = (props) => {
   
  
    const {cart}=props
    let time=0;
    for(const item of cart){
        time=time+item.time
    }
    const [t,stT]=useState(0)
    const [breakTime,setBreakTime]=useState(0);
   const btnClick=(x)=>{
    stT(x)
    const newTime=breakTime+x;
         setBreakTime(newTime)
         
         const quantity=localStorage.getItem(x)
   
         
     if(quantity)
     {
     
        localStorage.setItem(x,newTime)
        console.log(newTime)
     }
     else{
        localStorage.setItem(x,newTime)
        console.log(newTime)
     }
   }
   
  

   
    return (
      
        <div className='cart-class'>
            <h1 >Profile</h1>
            <p>Md. Jahiduzzaman Sarker</p>
            <div className='information'>
              <div>
              <h3>75</h3>
               <p>kg weight</p>
              </div>
              <div>
              <h3>6.5</h3>
              <p>height</p>
              </div>
              <div>
                <h3>25</h3>
                <p>years</p>
              </div>

            </div>
            <div>
                <h1>A Break</h1>
                <div className='information'>
               <button onClick={()=>btnClick(10)}>10s</button>
                <button onClick={()=>btnClick(20)}>20s</button>
                <button onClick={()=>btnClick(30)}>30s</button>
                <button onClick={()=>btnClick(40)}>40s</button>

               </div>
            </div>
            <div>
            <h1>Exercise Detatils</h1>
            <p>Exersise time {time}:</p>
          <p>Break Time : {t}</p>
            </div>
            <div className='btn-class'>
              <button>Finished activity</button>
            </div>
        </div>
        
    );
};

export default Cart;

