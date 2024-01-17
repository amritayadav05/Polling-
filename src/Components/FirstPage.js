import React from 'react'
import NavBar from './NavBar'

const FirstPage = () => {
  return (
    <>
      <NavBar/>
    {/* WELCOMING PART */}
    <div className='col-6'>
        <center>
      <h1>
       WELCOME TO POLLING WEBSITE
      </h1>
      </center>
      <br/>
      <br/>
      
      <div className='login'>
        <button type='button' className='buttonlogin'>admin login</button>
        <p className='buttonlogin'>Admin can login by clicking on admin login</p>
     </div>
     <div className='login'>
        <button type='button' className='buttonlogin'>user admin login</button>
        <p className='buttonlogin'>if you want to create a poll click on user admin login</p>
      </div>
      <div className='login'>
        <button type='button' className='buttonlogin'>user login</button>
        <p className='buttonlogin'>if you want to vote for any poll click on user login </p>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </>
  )
}

export default FirstPage
