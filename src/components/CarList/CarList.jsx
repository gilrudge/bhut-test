import axios from 'axios';
import { useState, useEffect } from 'react';
import CarCard from '../CarCard/CarCard'
import { CardsStyle, CarListTitle, FormStyle,
         InputStyle } from './CarListStyles';
import { Button} from '../CarCard/CarCardStyles'

export default function CarList(){

  const [cars, setCars] = useState([]);
  const [showContentId, setshowContentId] = useState(null);

  //CREATE CAR
  const [title, setTitle] = useState('')
  const [brand, setBrand] = useState('')
  const [price, setPrice] = useState('')
  const [age, setAge] = useState('')

  const createCar =  async (e) => {
    e.preventDefault();

    const car = {
      title: title,
      brand: brand,
      price: price,
      age: age
    }

    await axios.post('http://api-test.bhut.com.br:3000/api/cars', car )
    
    getCars()
    setTitle('')
    setBrand('')
    setPrice('')
    setAge('')
  }

  async function getCars(){
    const carList = await axios.get('http://api-test.bhut.com.br:3000/api/cars');
    setCars(carList.data)
  };

  function delCar(id){
      axios.delete(`http://api-test.bhut.com.br:3000/api/cars/${id}`)
           .then(()=> getCars())    
  }; 

  useEffect(()=> {
    getCars()    
  }, [])

  return(
    <> 
      <div>
        <CarListTitle className='form-title' >Car Register</CarListTitle>  
        <FormStyle onSubmit={createCar}>
          <InputStyle value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder='Title' required/>
          <InputStyle value={brand} onChange={(e)=> setBrand(e.target.value)} type="text" placeholder='Brand' required/>
          <InputStyle value={price} onChange={(e)=> setPrice(e.target.value)} type="text" placeholder='Price' required/>
          <InputStyle value={age} onChange={(e)=> setAge(e.target.value)} type="number" placeholder='Age' required/>
          <Button className='form-button'>CREATE CAR</Button>
        </FormStyle> 
      </div>

      <CarListTitle className='car-list-title'>Car List</CarListTitle>
      <CardsStyle>
        {cars.map(car => (
          <CarCard
            key={car._id}
            car={car}
            showContent = {showContentId === car._id}
            onClickShowContent={()=> setshowContentId(car._id)}
            onClickCloseContent={()=> setshowContentId(null)}
            onClickDeleteContent={() => delCar(car._id)}
          />
          
          ))}
      </CardsStyle>   
    </>
  )
}



