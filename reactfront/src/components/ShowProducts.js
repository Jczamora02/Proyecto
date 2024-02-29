import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowProducts = () => {
    const [ products, setProducts ] = useState( [] )
    useEffect ( ()=> {
        getAllProducst()
    }, [])


    const getAllProducst = async () => {
     const response = await axios.get(`${endpoint}/products`)
     setProducts(response.data)
    }
    const deleteProduct = async (id) => {
     await   axios.delete(`${endpoint}/product/${id}`)
     getAllProducst()

    }
  return (
    <div>

      
      <table>
        <thead className='bg-primary test-white'>
            <tr>
                <th>name</th>
                <th>lastName</th>
                <th>businessName</th>
                <th>identification</th>
                <th>phone</th>
                <th>country</th>
                <th>city</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            { products.map((product) => (
                <tr key={product.id}>
                    <td> {product.name} </td>
                    <td> {product.lastName} </td>   
                    <td> {product.businessName} </td>
                    <td> {product.identification} </td>
                    <td> {product.phone} </td>
                    <td> {product.country} </td>
                    <td> {product.city} </td>
                    <td>
                        <Link to={`/edit/${product.id}`} className='btn btn-warning'>Edit</Link>
                        <button onClick={ ()=>deleteProduct(product.id) } className='btn btn-danger'>Delete</button>
                    </td>
                                     
                </tr>
            ))}
        </tbody>
      </table>
      <div className='d-grid gap-2'>
      <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white' >Create</Link>
      
      </div>
    </div>
  )
  }

export default ShowProducts
