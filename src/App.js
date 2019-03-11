import React, { useState } from 'react'
import UserTable from './component/Ajoute/config'
import AddUserForm from './component/forms/AddUserForm';
import 'react-confirm-alert/src/react-confirm-alert.css'
import './App.css';

import './component/forms/form.css';
import './component/tableau/tableau.css';
import './component/Ajoute/list.css';
import 'bootstrap/dist/css/bootstrap.css';



const App = () => {

  const usersData = []

  const [users, setUsers] = useState(usersData)
  
  const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
  }
  
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="container">
    <div className="flex-row red"></div>
      <div className="flex-row">
        <div className="flex-large">
          <h2></h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <UserTable users={users} deleteUser={deleteUser}/>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
  
}

export default App;
