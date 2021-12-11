import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser, signUpUser } from '../redux/userAction'
 import {Alert,Button} from'react-bootstrap'
import { isEmail } from "validator";
import './signUp.css'
import Navbare from './Navbare'

  


const SignUp = () => {
 



const {loading} = useSelector(state => state)
const [firstName, setFirstName] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const [address, setAddress] = useState('')
const [password, setPassword] = useState('')
const dispatch = useDispatch()
const handleSubmit=(e)=>{
  email.trim()===""||firstName.trim()===""||address.trim()===""||phone.trim()===""||password.trim()===""?
  alert('this is required'):
    e.preventDefault()
    dispatch(signUpUser({firstName,email,phone,address,password}))
alert('success signup')}


    return (
      <div>
              <Navbare/>

	<div class="card">
		<div class="card-image">	
			<h2 class="card-heading">
				Get started
				<small>Let us create your account</small>
			</h2>
		</div>
      <form class="card-form" onSubmit={handleSubmit}>
			<div class="input">
    <label class="input-label">Email address <span style={{color:"red"}}>(*)</span></label>
    <input class="input-field"  type="email"   required="required" value={email} onChange={e=>setEmail(e.target.value)} />
    </div>
    <div class="input">
    <label class="input-label">Password <span style={{color:"red"}}>(*)</span> </label>
    <input class="input-field"  type="password"  required="required"  value={password} onChange={e=>setPassword(e.target.value)}  />
  </div>
  <div class="input">
    <label class="input-label">Name <span style={{color:"red"}}>(*)</span></label>
    <input class="input-field"  type="text"  required="required" value={firstName} onChange={e=>setFirstName(e.target.value)}  />
   </div>
   <div class="input">
    <label class="input-label">Addresse <span style={{color:"red"}}>(*)</span></label>
    <input class="input-field"  type="text"  required="required" value={address} onChange={e=>setAddress(e.target.value)}  />
   </div>
   <div class="input">
    <label class="input-label">Number <span style={{color:"red"}}>(*)</span></label>
    <input class="input-field"  type="text"  required="required"  value={phone} onChange={e=>setPhone(e.target.value)}  />
   </div>
 <Link to='/login'>
  <Button variant="primary"  type="submit" onClick={handleSubmit} >
    
    Submit
   
  </Button>
  
  </Link>
  
</form> 
</div>
</div>
    )
}

export default SignUp
