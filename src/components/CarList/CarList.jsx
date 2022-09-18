import axios from 'axios';
import { useState, useEffect } from 'react';
import CarCard from '../CarCard/CarCard'


export default function CarList(){

  const [cars, setCars] = useState([]);
  const [showContentId, setshowContentId] = useState(null);

  //CREATE CAR
  const [title, setTitle] = useState('')
  const [brand, setBrand] = useState('')
  const [price, setPrice] = useState('')
  const [age, setAge] = useState()

  const createCar = async () => {
    await axios.post('http://api-test.bhut.com.br:3000/api/cars',
    {
      title: title,
      brand: brand,
      price: price,
      age: age
    }
    )
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
      <form onSubmit={createCar}>
        <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder='Title' required/>
        <input value={brand} onChange={(e)=> setBrand(e.target.value)} type="text" placeholder='Brand' required/>
        <input value={price} onChange={(e)=> setPrice(e.target.value)} type="text" placeholder='Price' required/>
        <input value={age} onChange={(e)=> setAge(e.target.value)} type="number" placeholder='Age' required/>
        <button>Create Car</button>
      </form> 
      <div>
        {cars.map(car => (
          <CarCard
            car={car}
            showContent = {showContentId === car._id}
            onClickShowContent={()=> setshowContentId(car._id)}
            onClickDeleteContent={() => delCar(car._id)}
          />
          
          ))}
      </div>   
    </>
  )
}



