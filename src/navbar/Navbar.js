import logo from './calendar.png';

function Navbar() {
  return (
  	
	<nav className="navbar navbar-light bg-light">
	  <div className="container-fluid">
	    <a className="navbar-brand" href="#">
	      <img className="mx-5" src={logo} alt="" width="30" height="30" class="d-inline-block align-text-top"></img>
	      Birth WeekDay
	    </a>
	  </div>
	</nav>
    
  );
}

export default Navbar;