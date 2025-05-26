"use client"
import { BottomWarning } from "../components/ui/BottamWarnind";
import { Button } from "../components/ui/button";
import { Heading } from "../components/ui/Heading";
import { InputBox } from "../components/ui/InputBox";
import { SubHeading } from "../components/ui/SubHeading";
import React from 'react';

export default function Signup() {

  return <div className='flex justify-center items-center h-screen'>
   <div className='bg-white px-8 pt-8 pb-12 rounded-xl justify-items-center'>
    <Heading label='Sign up' />
    <div className='pb-4 '>
    <SubHeading label='Enter your credential to create your account' />
    <InputBox placeholder='Rahul' label='Name' type={'text'} />
    <InputBox placeholder='rahul@gmail.com' label='Email' type='password' />
    <InputBox placeholder='123456' label='Password' type={'password'}/>
    <div className='pt-6'>
    <Button variant='primary' size='sm' text='Sign up' onClick={() => {
      
    }}>
    </Button>
      </div>
    </div>
    <BottomWarning
  label="Already have an account?"
  buttonText="Log in"
  to="/signin"
/>
  </div>
  </div>
}