import React from 'react';
import axios from "axios";



const PlayerSingle = (props) => {
  
  const deletePlayer = (e) =>{
    e.preventDefault();
    if(window.confirm('Are you sure you want to delete?')){
        // axios.delete(`http://localhost:4000/player/`+id)
       // .then ( response => console.log(response) )
       console.log(e)
       console.log(e+"   fghfghfg  "+e.target.id);
    }
  }
   return(
        <div className="row">
        <div className="col s12">
        <div className="card-container"> 
          <div className="card">
            <div className="card-image">
              <img src="https://source.unsplash.com/Z0KjmjxUsKs" alt="soccer image"/>
              <span className="card-title">{props.player.firstName} {props.player.lastName}</span>
            </div>
            <div className="card-content">
              <p>Phone: {props.player.phone} - Email: {props.player.email}</p>
              <p>Strength: {props.player.strength} - Edurance: {props.player.endurance}</p>
            </div>
            <div className="card-action">
              Team:{props.player.team}
       
            </div>
            <button className ="btn waves-effect waves-light" onClick={deletePlayer}
         name="action" id={props.player.id} >Delete player</button>
          </div>
        </div>
        </div>
      </div>
    );
}

export default PlayerSingle;