import React from 'react'

function Header(props) {
  
  return(
    <>
        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Personal Protfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Talents</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Location</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Contact</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className='userAccount'>
        <abbr title="Your Accounts Information">
            <a href="#">
                <i class="fa-2x p-2 rounded-circle bg-dark text-light mx-lg-2 mt-md-2 mt-lg-0   fa-solid fa-user"></i>
            </a>
        </abbr>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header