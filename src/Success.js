import React from 'react'
import { useLocation } from 'react-router-dom'
const Success = () => {
    const location = useLocation()
    console.log(location.state)
    let name = location.state.name
    let email = location.state.email
    let cardNumber = location.state.cardNumber
    let invoice = location.state.invoice
    
    let date = new Date()
    let day = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
  return (
    <div><br/>
        <div className='md:w-3/5 w-11/12 m-auto border border-gray-400 p-4 rounded-sm'>
            <div className='grid grid-cols-2'>
                <div className='col-span-1'>
                    <h1 className='text-3xl font-semibold'>My Yoga App</h1> <br/>
                    <p>My App, inc</p>
                    <p>1234, Main Street</p>
                    <p>Indore, India 462030</p>
                </div>
                <div className='col-span-1 text-right'>
                    <h1 className='text-3xl font-semibold'>Invoice</h1> <br/>
                    <p>Invoice Number: {invoice}</p>
                    <p>Invoice Date: {day}</p>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                </div>
            </div>
            <br/>
            <table className='w-full rounded-md'>
                <thead className='bg-slate-200 rounded-md'>
                    <tr className='rounded-md'>
                        <td className='border border-gray-400 p-2 rounded-md'>Product</td>
                        <td className='border border-gray-400 p-2 rounded-md'>Subtotal</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-gray-400 p-2'>One Month Yoga Class Fee</td>
                        <td className='border border-gray-400 p-2'>Rs. 500</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <table className='w-full'>
                <tbody>
                    <tr className='bg-slate-200'>
                        <td className='border border-gray-400 p-2'>Payment Method</td>
                        <td className='border border-gray-400 p-2'> Card Number </td>
                    </tr>
                    <tr>
                        <td className='border border-gray-400 p-2'>Debit Card</td>
                        <td className='border border-gray-400 p-2'> {cardNumber} </td>
                    </tr>
                    </tbody>
            </table>
            <br/>
            <div className='grid grid-cols-2'>
                <div className='col-span-1'>
                    <p>Thank you for your purchase!</p>
                </div>
                <div className='col-span-1 text-right'>
                    <p>My Yoga App</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Success