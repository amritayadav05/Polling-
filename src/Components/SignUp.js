import React from 'react'

const SignUp = () => {
  return (
    <center>
    <div className='signup'>
     
      <h1>SIGN UP</h1>
       <div className='userpass'>
        <label htmlFor='email'>Email ID: </label><input type='email' className='email'/>
        <br/>
        <br/>
        <label htmlFor="username">Username: </label><input type='text' className='username'/>
        <br/>

        <label htmlFor="password">password: </label><input type='password' className='password'/>
        <br/>
        {/* rembemer me and forgot password code should be here  */}
        <button onClick={()=>{alert('Thank You for signing up')}}>submit</button>
        </div>


    
    </div>
    </center>
  )
}

export default SignUp
