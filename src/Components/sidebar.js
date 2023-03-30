import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

function Sidebar() {

  const [showNav, setShowNav] = useState(true)
  const [showAll, setShowAll] = useState(true)

  return (
  <div className={`body-area${showNav ? ' body-pd' : ''}`}>
        
          <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <img src="logo.png" className="Head" alt="..."></img>
          
          <vl class="vl"></vl>

                    {/* <!-- Topbar Search --> */}
                    <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"></input>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* <!-- Topbar Navbar --> */}
                    <ul class="Topbar navbar-nav ml-auto">

                        {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                        <li class="nav-item dropdown no-arrow d-sm-none">
                            <a class="nav-link dropdown-toggle search" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-search fa-fw"></i>
                            </a>
                            {/* <!-- Dropdown - Messages --> */}
                            <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                                <form class="form-inline mr-auto w-100 navbar-search">
                                    <div class="input-group">
                                        <input type="text" class="form-control bg-light border-0 small" placeholder="Search Projects..." aria-label="Search" aria-describedby="basic-addon2"></input>
                                        <div class="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i class="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        <button className="button">+ Create New </button>
                        {/* <!-- Nav Item - Cast--> */}
                        <i class="Bell fa-solid fa-bell"></i>

                        {/* <!-- Nav Item - Messages --> */}
                        <i class="Gear fa-solid fa-gear"></i>

                        {/* <!-- Nav Item - User Information --> */}
                        <i class=" House fa-solid fa-house"></i>
                     
                    </ul>

                </nav>

    <div className={`l-navbar${showNav ? ' show' : ''}`}>
     
      <i
          className={`bi ${showNav ? 'bi-list' : 'bi-list'}`}
          onClick={() => setShowNav(!showNav)} />
           <nav className="nav">
        <img src="download.jpeg" className="Icon " alt="..."></img>
        <h4 className="name">Edward Spencer</h4>
        <h4 className="name">Developer</h4>
          
          <div className=" list nav_list">
            <Link to="/" className="nav_link" rel="noopener">
              <i className='bi bi-people nav_icon' /><span className="nav_name">Home</span>
            </Link>
            <hr></hr>
            <a href="#" target="_blank" className="nav_link" rel="noopener">
              <i className='bi bi-person-check nav_icon' /><span className="nav_name">Dashboard</span>
            </a>            <hr></hr>
            <a href="#" target="_blank" className="nav_link" rel="noopener">
              <i className='bi bi-person-check nav_icon' /><span className="nav_name">Member</span>
            </a>            <hr></hr>
            <a href="#" target="_blank" className="nav_link" rel="noopener">
              <i className='bi bi-person-check nav_icon' /><span className="nav_name">Sales Staff</span>
            </a>            <hr></hr>
            <a href="#" target="_blank" className="nav_link" rel="noopener">
              <i className='bi bi-person-check nav_icon' /><span className="nav_name">UI Elements</span>
            </a> 
          </div>

      </nav>
    </div>
  </div>
  )
}

export default Sidebar;