import React from 'react'

const NavBar = () => {
  return (
    <center>
    <div className='navu'>
      <ul class="nav justify-content-end">
    <a class="nav-link active" aria-current="page" href="#">HOME</a>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <a class="nav-link active" aria-current="page" href="#">LOGIN</a>
    {/* make a dropdown and add admin/user admin/user login option */}
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <a class="nav-link active" aria-current="page" href="#">SIGN UP</a>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <a class="nav-link active" aria-current="page" href="#">CREATE POLL</a>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <a class="nav-link active" aria-current="page" href="#">ABOUT US</a>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <a class="nav-link active" aria-current="page" href="#">PRIVACY</a>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <a class="nav-link active" aria-current="page" href="#">HELP</a>
</ul>

    </div>
    </center>
  )
}

export default NavBar
