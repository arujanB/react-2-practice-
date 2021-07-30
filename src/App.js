import './App.css';
import React, {Fragment, useState} from 'react';
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
    }); 
  };

  return (
    <Fragment>
    <div className="App">
      <header className="App-header">
        <AddUser onAddUser = {addUserHandler}></AddUser>
        <UserList user={usersList}></UserList>
      </header>
    </div>
    </Fragment>
  );
}

export default App;
