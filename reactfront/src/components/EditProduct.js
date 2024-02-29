import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
/* URL de consumo para la API */
const endpoint = 'http://localhost:8000/api/product/'

const EditProduct = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [identification, setIdentification] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {name: name, lastName: lastName, businessName: businessName, identification: identification, phone: phone, country: country, city: city})
        navigate('/')
    }

    useEffect( () =>{
        const getProductById = async ()=> {
            debugger
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setLastName(response.data.lastName)
            setBusinessName(response.data.businessName)
            setIdentification(response.data.identification)
            setPhone(response.data.phone)
            setCountry(response.data.country)
            setCity(response.data.city)
        }
        getProductById()
        
        
    }, [] )

    return (
        <div>
        <h3> Edit Product</h3>
        <form onSubmit={update}>
          <div className='mb-3'>
              <label className='form-label'>name</label>
              <input
               value={name}
               onChange={(e)=> setName (e.target.value)}
               type='text'
               className='form-control'
              />
          </div>
          <div className='mb-3'>
              <label className='form-label'>lastName</label>
              <input
               value={lastName}
               onChange={(e)=> setLastName (e.target.value)}
               type='text'
               className='form-control'
              />
          </div>
          <div className='mb-3'>
              <label className='form-label'>businessName</label>
              <input
               value={businessName}
               onChange={(e)=> setBusinessName (e.target.value)}
               type='text'
               className='form-control'
              />
          </div>
          <div className='mb-3'>
              <label className='form-label'>identification</label>
              <input
               value={identification}
               onChange={(e)=> setIdentification (e.target.value)}
               type='number'
               className='form-control'
              />
          </div>
          <div className='mb-3'>
              <label className='form-label'>phone</label>
              <input
               value={phone}
               onChange={(e)=> setPhone (e.target.value)}
               type='number'
               className='form-control'
              />
          </div>
          <div className='mb-3'>
              <label className='form-label'>country</label>
              <input
               value={country}
               onChange={(e)=> setCountry (e.target.value)}
               type='text'
               className='form-control'
              />
          </div>
          <div className='mb-3'>
              <label className='form-label'>city</label>
              <input
               value={city}
               onChange={(e)=> setCity (e.target.value)}
               type='text'
               className='form-control'
              />
          </div>
          <button type='submit' className='btn btn-primary'>Store</button>
        </form>
        </div>
        
    )
}

export default EditProduct