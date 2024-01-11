import React,{useState} from 'react';
import UserInput from './components/UserHandler/UserInput/UserInput';
import UserList from './components/UserHandler/UserList/UserList';
import './App.css';

function App() {
  const [users,setUsers] = useState([])

  const addUserHandler = (name,age)=>{
    setUsers(prevUsers=>{
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({name:name,age:age,id:Math.random().toString()});
      return updatedUsers;
    })
  }

  return (
    <div className="App">
      <UserInput onAddUser={addUserHandler}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
