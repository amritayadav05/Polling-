import React from 'react'

const FirstPage = () => {
  return (
    <div className='col-6'>
        <center>
      <h1>
       WELCOME TO POLLING WEBSITE
      </h1>
      </center>
      <br/>
      <br/>
      
      <div className='login'>
        <button type='button'>admin login</button>
        <p>Admin can login by clicking on admin login</p>

     
     </div>
     <div className='login'>
        <button type='button'>user admin login</button>
        <p>if you want to create a poll click on user admin login</p>
    
      </div>
      <div className='login'>
        <button type='button'>user login</button>
        <p>if you want to vote for any poll click on user login </p>
      </div>
    </div>
  )
}

export default FirstPage
