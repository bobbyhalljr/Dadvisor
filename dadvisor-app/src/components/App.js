import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../styles/App.css';

import Users from '../components/users/Users';


function App() {
  const [users, setUsers] = useState([ {info: { name: 'Bobby', age: 28 }}])

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
    .then(res => {
      console.log(res.data.results)
      setUsers(res.data.results)
    })
  }, [])

  return (
    <div className="App">
      <Users users={users}/>
    </div>
  );
}

export default App;
