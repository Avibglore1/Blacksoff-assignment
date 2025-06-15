'use client'
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
function ContactUs() {
  const [form,setForm]=useState({
    name:'',
    email:'',
    company:'',
    message:''
  });
  const [errors,setErrors] = useState({});
  const validate=()=>{
    const newErrors={};
    if(!form.name.trim()) newErrors.name='Name is required.';
    if(!form.email.trim()) newErrors.email='Email is required';
    if(!form.company.trim()) newErrors.company='Company is required.';
    return newErrors
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const validationErrors=validate();
    if(Object.keys(validationErrors).length>0){
        setErrors(validationErrors);
    }else{
        setErrors({});
        alert('Message Sent')
    }
  }
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  }
  return(
    <div className='min-h-screen bg-[#0067B1] text-white p-10 flex flex-col md:flex-row
    gap-12 justify-center items-center'>
        <div className='w-full flex  flex-col justify-center md:justify-start items-center
         md:items-start text-center md:text-left md:w-1/2 space-y-4 '>
            <h2 className='text-4xl font-semibold'>Get in touch</h2>
            <p>For general enquiries</p>
            <div>
                <p className='font-semibold'>Address :</p>
                <p>110, 16th Road, Chembur, Mumbai - 400071</p>
            </div>
            <div>
                <p className='font-semibold'>Phone :</p>
                <p><Link href='#' className='hover:underline'>+91 22 25208822</Link></p>
            </div>
             <div>
                <p className='font-semibold'>Email :</p>
                <p><Link href='#' className='hover:underline'>info@supremegroup.co.in</Link></p>
            </div>
        </div>
        <form onSubmit={handleSubmit}>
            {['name','email','company'].map((field)=>(
                <div key={field}>
                    <label className='block capitalize'>
                        {field.replace('_',' ')}
                    </label>
                    <input type={field==='email'?'email':'text'} 
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b py-1 outline-none ${
                        errors[field] ? 'border-red-500' : 'border-gray-300'
                    }`}/>
                    {errors[field] && <p className='text-red-400 text-sm'>{errors[field]}</p>}
                </div>
            ))}
            <div>
                <label>Message</label>
                <textarea 
                name="message" 
                value={form.message}
                onChange={handleChange}
                rows='4'
                className='w-full bg-transparent border-b py-1 outline-none border-gray-300'>
                </textarea>
            </div>
            <button
            type='submit'
            className='px-6 py-2 border-2 rounded-full hover:bg-white hover:text-blue-600 transition'
            >
            Send
            </button>
        </form>
    </div>
  )
}

export default ContactUs