import { useState } from "react";
import {InfoList, CarCardStyle, CardTitle,
        ButtonsDiv, Button, ListItem } from "./CarCardStyles";



export default function CarCard({car, showContent, onClickShowContent, onClickDeleteContent, onClickCloseContent}){

  return(
    <CarCardStyle>
    
           <CardTitle>{car.title}</CardTitle>
           {showContent ? 
          <InfoList key={car._id}>
             <ListItem><strong>ID:</strong> {car._id}</ListItem>
             <ListItem><strong>Brand:</strong> {car.brand}</ListItem>
             <ListItem><strong>Price:</strong> R$ {parseInt(car.price)},00</ListItem>
             <ListItem><strong>Age:</strong> {car.age}</ListItem>
             <ButtonsDiv>
                <Button onClick={onClickCloseContent}>CLOSE INFO</Button>         
                <Button onClick={onClickDeleteContent}>DELETE</Button>
             </ButtonsDiv>
          </InfoList>          
           : <Button className='show-button'onClick={onClickShowContent}>SHOW INFO</Button>}          

          
    </CarCardStyle>
  )
};



