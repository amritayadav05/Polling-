import React from 'react'

const Voting = () => {
  return (
   <div>
  <div className="container">
    <div className="row">
      <div className="col-6 form_col">
        <div className="container form_container">
          <center>
          <h3 className="text-center">WELCOME TO OUR VOTING WEBSITE</h3>
          </center>
          <br/>
          <h5>enter your question</h5>&nbsp;
          <input type="text" className="form-control" />
          <h5>enter your options 1: 
          </h5>
          <input type="text" className="form-control" />
          <h5>enter your options 2: 
          </h5>
          <input type="text" className="form-control" />
          <h5>enter your options 3: 
          </h5>
          <input type="text" className="form-control" />
          <div className="row justify-content-between">
            <button type="button" onClick="submit" className="btn btn-outline-primary">SUBMIT </button>
          </div>
        </div>
        
      </div>
      </div>
    </div>
</div>

  )
}

export default Voting
