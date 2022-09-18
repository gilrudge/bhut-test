import { useState } from "react";



export default function CarCard({car, showContent, onClickShowContent, onClickDeleteContent}){

  return(
    <>
    
           <h3>{car.title}</h3>
           {showContent ? 
          (<ul key={car._id}>
             <li>id: {car._id}</li>
             <li>Brand: {car.brand}</li>
             <li>Price: {car.price}</li>
             <li>Age: {car.age}</li>
          </ul>)
           : (<button onClick={onClickShowContent}>Show Info</button>)}         
          <button onClick={onClickDeleteContent}>Delete</button>
    </>
  )
};



// {carContent.map(item => {
//   return(      
//      <>
        
//         <ul carId={item._id} key={item._id}>
//           <li><h3 carName={item.title}>{item.title}</h3></li>
//           {showContent ? 
//           (<ul>
//              <li>id: {item._id}</li>
//              <li carBRand={item.brand}>Brand: {item.brand}</li>
//              <li carPrice={item.price}>Price: {item.price}</li>
//              <li carAge={item.age}>Age: {item.age}</li>
//           </ul>)
//            : (<button onClick={()=> setshowContent(true)}>Ver mais</button>)}         
//         </ul>         
//      </>       
//   )
//   })}