import React from 'react'
import classes from './login/login.module.css'
import MyButton from '@/components/Button';
import TextInput from '@/components/Input';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center " >Hello Umair</h1>
      <button style={{ backgroundColor:'black', color:'white', padding:10}}>Home Button</button>
      <button className="submit-btn">Home button</button>
      <button className={classes.btn}>What a Button</button>
      <img style={{
        width:200
      }} src="/sponge.webp" />
      <MyButton>my custom button</MyButton>
      <MyButton>Login</MyButton>
      <MyButton>my button</MyButton>
      <MyButton>Submit</MyButton>

      <TextInput type="password" label="Enter a password" id="password" />
      <TextInput type="text" label="Full name" id="name"/>
      <TextInput type="email" label="Email Address" id="email"/>
    </div>
  )
}

export default Home;
