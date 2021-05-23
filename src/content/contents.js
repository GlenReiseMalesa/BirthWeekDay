import logo from './confetti.png';
import React from 'react';

class contents extends React.Component {

   constructor(props){
       super(props);

       this.state = {
         actualDOB : '2015-08-09',
         futureDOB : '2015-08-09',
        
       };

       

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }



   handleChange(event){
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});

   }


    handleSubmit(event) {


        let date = new Date();
        let str = this.state.futureDOB;
        let result = str.split("-")
        date.setFullYear(result[0], result[1], result[2]);

        let weekday = "";


        if(date.getDay() == 4){
          weekday = "Monday";
        }

        if(date.getDay() == 5){
          weekday = "Tuesday";
        }

        if(date.getDay() == 6){
          weekday = "Wednesday";
        }

        if(date.getDay() == 0){
          weekday = "Thursday";
        }

        if(date.getDay() == 1){
          weekday = "Friday";
        }

        if(date.getDay() == 2){
          weekday = "Saturday";
        }

        if(date.getDay() == 3){
          weekday = "Sunday";
        }

	    
	    alert("Your birthday Will Be On "+weekday+"!!!");


	    event.preventDefault();
	}

  render() {

  return (
  	
  	<div className="container mt-5">
		<nav className="navbar navbar-light bg-light">
		  <div className="container-fluid">
		    <a className="navbar-brand" href="#">
		      Let's play a birthday guessing game!!! 
		      <img className="mx-4" src={ logo} alt="" width="30" height="30" class="d-inline-block align-text-top"></img>
		    </a>
		  </div>
		</nav>

 


			<form onSubmit={this.handleSubmit}>
			  <div className="mb-3 mx-4">
			    <label for="exampleInputEmail1" className="form-label mt-5">Give us your birthday,
                 we'll predict which day of the week
                 is your birth day in years to come :
                </label>
			    <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  name ="actualDOB" 
                  onChange={this.handleChange}
 			    ></input>

                 
                <label for="exampleInputEmail2" className="form-label mt-5">
                 Which future birth day would you like to Check??
                </label>
			    <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  name ="futureDOB" 
                  onChange={this.handleChange}
			    ></input>



			    <div id="emailHelp" className="form-text mt-3 mx-3">We'll never share your birthday with anyone else.</div>
			    <button type="submit" className="btn btn-primary mt-5">Check</button>
			  </div>
	
			</form>


         
    </div>

    
  );
  }
}

export default contents;