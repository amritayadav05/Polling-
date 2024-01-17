import React from 'react'

const Voting = () => {
  return (
   <div>
  <div className="container">
    <div className="row">
      <div className="col-6 form_col">
        <div className="container form_container">
          <center>
          <h1 className="text-center">CREATE YOUR POLL</h1>
          </center>
          <br/>
          <h3>enter your question</h3>&nbsp;
          <input type="text" className="form-control" />
          <h3>enter your options 1: 
          </h3>
          <input type="text" className="form-control" />
          <h3>enter your options 2: 
          </h3>
          <input type="text" className="form-control" />
          <h3>enter your options 3: 
          </h3>
          <input type="text" className="form-control" />
          <div className="row justify-content-between">
            <button   onClick={()=>{alert('You have successfully created the poll !')}}>submit</button>
          </div>
        </div>
        
      </div>
      </div>
    </div>
</div>

  )
}

export default Voting
