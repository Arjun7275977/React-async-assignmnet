import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => setUsers(data.data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      <div className="user-cards">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
