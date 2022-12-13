import React, {useState} from 'react'
import { Navigate } from "react-router-dom";
import { ExclamationCircle } from 'react-bootstrap-icons';

const Home = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState('')
    const [batch, setBatch] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [ageError, setAgeError] = useState('')
    const [emailError, setEmailError] = useState('')

    const handleSubmit = () => {
      if(name === '' || email === '' || phone === '' || age === '' || batch === ''){
        setError('Please fill all the fields')
      }
      else if(age < 18 || age > 60){
        setAgeError('Age should be between 18 and 60')
      }
      else if(!email.includes('@')){
        setEmailError('Invalid email')
      }
      else{
        setSuccess(true)
      }
    }
    const data = {
        name: name,
        email: email,
        phone: phone,
        age: age,
        batch: batch
    }
    return (
      <div className='grid grid-cols-4 h-screen gap-1'>
        {success && <Navigate to='/payment' state={data} />}

        <div className='col-span-1 border-gray-500 flex-col justify-center align-middle h-full hidden md:block'>
          <div className='flex flex-col align-middle justify-center h-full bg-blue-400'>
            <h1 className='text-white font-semibold text-center text-lg my-4'>My Yoga App</h1>
            <p className='text-right text-white px-7'>“Yoga does not just change the way we see things, it transforms the person who sees.” <br/> B.K.S Iyengar</p>
            <img src='/images/yoga2.png' alt='logo' className='px-10' />
          </div>
        </div>
        <div className='col-span-4 flex flex-col justify-center md:col-span-3'>
          <div className='mx-auto w-4/5'>
            <h1 className='my-2 md:hidden'> My Yoga App, inc </h1>
            <h1 className='text-xl font-bold text-left'>Admission Form</h1>
            <br/><br/>
            <p className='font-semibold'>Book Your Yoga Classes Now</p>
            <p className='text-gray-400 my-2'>Lets get you set up so that you can get fit ASAP</p>
            <div className='grid grid-cols-2 gap-2'>
              <div>
                <label className='text-black text-sm font-bold'>Name</label>
                <input type='text' className='w-full text-gray-500 border-gray-400 border-2 rounded-md p-2 my-2' placeholder='Your Full Name' onChange={(e)=>{setName(e.target.value)}}/>
              </div>
              <div>
                <label className='text-black text-sm font-bold'>Email</label>
                <input type='email' className='w-full text-gray-500 border-gray-400 border-2 rounded-md p-2 my-2' placeholder='Your Email id' onChange={(e)=>{setEmail(e.target.value)}} />
                {emailError ? <p className='text-red-500 font-bold animate-pulse-limit flex items-center'><ExclamationCircle/> &nbsp; {emailError} </p>: null}
              </div>
              <div>
                <label className='text-black text-sm font-bold'>Phone</label>
                <input type='tel' className='w-full text-gray-500 border-gray-400 border-2 rounded-md p-2 my-2' placeholder="Your Phone Number" onChange={(e)=>{setPhone(e.target.value)}} />
              </div>
              <div>
                <label className='text-black text-sm font-bold'>Age</label>
                <input type='number' className='w-full text-gray-500 border-gray-400 border-2 rounded-md p-2 my-2' placeholder='Your Age' onChange={(e)=>{setAge(e.target.value)}} />
                {ageError ? <p className='text-red-500 flex items-center font-bold animate-pulse-limit'><ExclamationCircle/> &nbsp; {ageError} </p>: null}
              </div>
              <div>
                <select onChange={(e)=>{setBatch(e.target.value)}}>
                  <option value=''>Select Your Batch</option>
                  <option value='6-7'>6AM to 7AM</option>
                  <option value='7-8'>7AM to 8AM</option>
                  <option value='8-9'>8AM to 9AM</option>
                  <option value='5-6'>5AM to 6PM</option>
                </select>
                <p className='text-yellow-500 text-xs flex items-center'><ExclamationCircle/> &nbsp; Once a batch is selected you can only change it after a month</p>
                <br/>
                {error ?<p className='text-red-500 font-bold animate-pulse-limit flex items-center'><ExclamationCircle/> &nbsp; {error} </p>: null}
              </div><br/>
              <button className="bg-blue-400 p-2 text-white rounded-md" onClick={(e)=>{handleSubmit()}}>Proceed to Pay</button>
            </div>
          </div>
        </div>
      </div>
)}

export default Home