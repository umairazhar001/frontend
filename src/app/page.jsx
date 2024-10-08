import React from 'react'
import classes from './login/login.module.css'

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center " >Hello Umair</h1>
      <button style={{ backgroundColor:'black', color:'white', padding:10}}>Home Button</button>
      <button className="submit-btn">Home button</button>
      <button className={classes.btn}>What a Button</button>
      <img src="/sponge.webp" alt="" />
    </div>
  )
}

export default Home;
