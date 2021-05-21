import logo from './confetti.png';

function Navbar() {
  return (
  	
  	<div className="container mt-5">
		<nav className="navbar navbar-light bg-light">
		  <div className="container-fluid">
		    <a className="navbar-brand" href="#">
		      Let's play a birthday guessing game!!!
		      <img className="mx-4" src={logo} alt="" width="30" height="30" class="d-inline-block align-text-top"></img>
		    </a>
		  </div>
		</nav>

 


			<form>
			  <div className="mb-3 mx-4">
			    <label for="exampleInputEmail1" className="form-label mt-5">Give us your birthday,
                 we'll predict which day of the week
                 is your birth day in years to come :
                </label>
			    <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>

                 
                <label for="exampleInputEmail2" className="form-label mt-5">
                 Which future birthday would you like to Check??
                </label>
			    <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>



			    <div id="emailHelp" className="form-text mt-3 mx-3">We'll never share your birthday with anyone else.</div>
			    <button type="submit" className="btn btn-primary mt-5">Check</button>
			  </div>
	
			</form>

    </div>

    
  );
}

export default Navbar;