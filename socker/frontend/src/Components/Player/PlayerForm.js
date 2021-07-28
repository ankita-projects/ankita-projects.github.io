import axios from 'axios';
import React from 'react';

class PlayerForm extends React.Component {
    submitPlayer(event){
        event.preventDefault();

        axios.post('http://localhost:4000/players',{
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value,
        })
        .then((response) =>{
           console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
       
    }
    render() { 
        return (
             <div className="row">
                 <h1 className ="center">Add a new player</h1>
        <form className="col s12" onSubmit = {this.submitPlayer.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input  id="firstName" ref="firstName" type="text"  />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input  id="lastName" ref="lastName" type="text"  />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input  id="phone" ref="phone" type="text"  />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="input-field col s6">
              <input  id="email" ref="email" type="text"  />
              <label htmlFor="email">email</label>
            </div>
          </div>
          <div className="button-container">
         <button className ="btn waves-effect waves-light" type="submit"
         name="action">Add player</button>
       
         </div>
        </form>
      </div>
             );
    }
}
 
export default PlayerForm;