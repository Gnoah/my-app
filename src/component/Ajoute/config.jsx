import { confirmAlert } from 'react-confirm-alert'; // Import
import React, { Component } from 'react'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css


class confirm extends Component {
    submit = () => {
        confirmAlert({
          title: 'Confirmer',
          message: 'suppression',
          buttons: [
            {
              label: 'Oui',
              onClick: () => {this.deleteUser()}
            },
            {
              label: 'Non',
            }
          ]
        })
      };
      render(){
            return (
                <div>
                <button className="btn btn-danger" onClick={this.submit}>X</button>
                </div>
            );
      }
}
	

export default confirm;