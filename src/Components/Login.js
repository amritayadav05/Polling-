import React from 'react'

const Login = () => {
  return (
    <center>
    <div className='logoiono'>
      <h1>USER LOGIN</h1>
       <div className='userpass'>
        <label htmlFor="username">Username: </label><input type='text' className='username'/>
        <br/>

        <label htmlFor="password">password: </label><input type='password' className='password'/>
        <br/>
        <button onClick={()=>{alert('A mail has been send to your mail')}}>forgot password?</button>
        &nbsp; &nbsp; 
        {/* rembemer me and forgot password code should be here  */}
        <button onClick={()=>{alert('You have successfully logged in!')}}>submit</button>
        </div>


    </div>
    </center>
  )
}

export default Login
