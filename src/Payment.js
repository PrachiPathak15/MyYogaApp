import React, {useState} from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { CreditCard2FrontFill, Stripe } from 'react-bootstrap-icons';

const Payment = () => {
    const location = useLocation()
    let name = location.state.name
    let email = location.state.email
    let phone = location.state.phone
    let age = location.state.age
    let batch = location.state.batch

    const [cardNumber, setCardNumber] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [cvv, setCvv] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [invoice, setInvoice] = useState('')
    const [cardError, setCardError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = () => {
        if(cardNumber === '' || expiryDate === '' || cvv === ''){
            setError('Please fill all the fields')
        }
        else if(cardNumber.length !== 16){
            setCardError('Invalid card number')
        }
        else{          
            setLoading(true)
            fetch('https://my-yoga-app.onrender.com/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    age: age,
                    batch: batch
                })
            }).then((res) => {
                return res.json()
            }).then((data) => {
                if(data.message === 'Payment completed successfully'){
                    setInvoice(data.invoice)
                    setSuccess(true)
                    setLoading(false)
                }
                else{
                    setError('Payment failed')
                }
            })
        }
    }
  return (
    <div className='h-screen  flex justify-center flex-col align-middle'>
        {loading?(
        <div className='flex m-auto justify-center flex-col items-center h-screen'>
            <h1 className='animate-pulse text-2xl font-bold'>Processing your payment...</h1>
        </div>
        ):(
        <div className='md:w-3/5 w-5/5 m-auto justify-center flex-col align-middle p-4 h-3/4'> 
        {success && <Navigate to='/success' state={{name: name, email: email, phone: phone, cardNumber: cardNumber, invoice:invoice}} />}
            <div className='bg-blue-500 text-white rounded-md p-4 shadow-xl shadow-gray-400 md:mb-0 mb-4'><br/>
                <div className='grid md:grid-cols-5 grid-cols-1 gap-2 mx-auto'>
                    <div className='md:col-span-3'>
                        <div className='text-xl font-semibold flex items-center'>
                            <Stripe/> &nbsp;<p>Payment</p>
                        </div><br/><br/>
                        <p className='text-lg font-medium font-serif'>Card Number</p>
                        <p className='text-sm text-gray-300'>Please enter your card details</p>
                        <div className='grid grid-cols-5 gap-1'>
                            <input type='number' className='col-span-4 text-black border-gray-400 border-2 rounded-md p-1 my-2' placeholder='1234-5678-8901-1213' onChange={(e)=>{setCardNumber(e.target.value)}} />
                            <CreditCard2FrontFill color="white" className='col-span-1 my-2' size={36}/>
                        </div>
                        {cardError && <p className='text-red-800 animate-pulse-limit'>{cardError}</p>}
                        <br/>
                        <div className='grid grid-cols-2 gap-2'>
                            <div>
                                <p className='text-lg font-medium font-serif'>Expiry Date</p>
                                <input type='date' className='w-full text-black border-gray-400 border-2 rounded-md p-1 my-2'onChange={(e)=>{setExpiryDate(e.target.value)}} />
                            </div>
                            <div>
                                <p className='text-lg font-medium font-serif'>CVV</p>
                                <input type='number' className='w-full text-black border-gray-400 border-2 rounded-md p-1 my-2' placeholder='123' onChange={(e)=>{setCvv(e.target.value)}} />
                            </div>
                        </div>
                        {error && <p className='text-red-800 animate-pulse-limit'>{error}</p>}
                        <br/>
                        <button className='bg-white text-black rounded-md p-2 w-full' onClick={(e)=>{handleSubmit()}}>Pay Now</button>
                    </div>
                    <div className='col-span-2 h-full flex flex-col justify-center align-middle'>
                        <div className='bg-white text-black rounded-md p-4 flex flex-col justify-center align-middle h-full'>
                            <h1 className='text-xl font-semibold'>Order Summary</h1><br/>
                            <p className='my-1'>Name: {name}</p>
                            <p className='my-1'>Email: {email}</p>
                            <p className='my-1'>Phone: {phone}</p>
                            <p className='my-1'>Product Detail: One Month Yoga Class Fee</p> <br/>
                            <div>
                                <p className='text-lg font-medium font-serif'>Subtotal: ₹500</p>
                            </div>    
                    </div>
                    </div>
                </div><br/>
            </div><br/>
        </div>
    )}
    </div>
  )
}

export default Payment