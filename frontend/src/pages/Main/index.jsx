import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import io from 'socket.io-client';

import api from '../../services/api';
import UserCard from '../../components/UserCard';

import logo from '../../assets/logo.svg';
import itsamatch from '../../assets/itsamatch.png';

import './styles.css';

export default function Main({match}) {
  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: {
          user: match.params.id,
        },
      });

      setUsers(response.data);
    }

    loadUsers();
  }, [match.params.id]);

  useEffect(() => {
    const socket = io('http://localhost:3333', {
      query: {
        user: match.params.id,
      },
    });

    socket.on('match', (dev) => {
      setMatchDev(dev);
    });
  }, [match.params.id]);

  async function handleLike(userId) {
    await api.post(`/devs/${userId}/likes`, null, {
      headers: {
        user: match.params.id,
      },
    });

    setUsers(users.filter((user) => user.id === userId));
  }

  async function handleDislike(userId) {
    await api.post(`/devs/${userId}/dislikes`, null, {
      headers: {
        user: match.params.id,
      },
    });

    setUsers(users.filter((user) => user.id === userId));
  }

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="Tindev Logo" />
      </Link>

      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <UserCard
              key={user._id}
              id={user._id}
              name={user.name}
              bio={user.bio}
              avatar={user.avatar}
              onLike={() => handleLike(user._id)}
              onDislike={() => handleDislike(user._id)}
            />
          ))}
        </ul>
      ) : (
        <div className="empty">
          Sem devs no momento <br />
          :(
        </div>
      )}

      {matchDev && (
        <div className="match-container">
          <img src={itsamatch} alt="match" />

          <img className="avatar" src={matchDev.avatar} alt="dev-match" />
          <strong>{matchDev.name}</strong>
          <p>{matchDev.bio}</p>

          <button type="button" onClick={() => setMatchDev(false)}>
            Fechar
          </button>
        </div>
      )}
    </div>
  );
}
