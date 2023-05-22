"use client"

import { useEffect, useState } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("../api/controllers/UsersControllers")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar usuários:', error);
      });
  }, []);

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
