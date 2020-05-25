import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import io from 'socket.io-client';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';
import itsamatch from '../../assets/itsamatch.png';

import './styles.css';

export default function Main({match}) {
  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.post('/devs', {
        headers: {
          user: match.params.id
        }
      });

      setUsers(response.data);
    }

    loadUsers();
  }, [match.params.id]);

  useEffect(() => {
    const socket = io('http://localhost:3333', {
      query: {
        user: match.params.id
      }
    });

    socket.on('match', dev => {
      setMatchDev(dev);
    });
  }, [match.params.id]);

  async function handleLike(userId) {
    await api.post(`/devs/${userId}/likes`, null, {
      headers: {
        user: match.params.id
      }
    });

    setUsers(users.filter(user => user.id === userId));
  }

  async function handleDislike(userId) {
    await api.post(`/devs/${userId}/dislikes`, null, {
      headers: {
        user: match.params.id
      }
    });

    setUsers(users.filter(user => user.id === userId));
  }

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="Tindev Logo" />
      </Link>

      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <img src={user.avatar} alt={'Gabriel'}/>
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>

              <div className="buttons">
                <button type="button" onClick={() => handleDislike(user._id)}>
                  <img src={dislike} alt="dislike" />
                </button>

                <button type="button" onClick={() => handleLike(user._id)}>
                  <img src={like} alt="like" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">Sem devs no momento :(</div>
      )}
        
      {matchDev && (
        <div className="match-container">
          <img src={itsamatch} alt="match"/>

          <img className="avatar" src="https://avatars3.githubusercontent.com/u/47339825?s=460&u=dbf13c0c1865ffa4e2bc8535c2e32bccc957251d&v=4" alt="dev-match"/>
          <strong>Gabriel Santana</strong>
          <p>Software Developer</p>

          <button type="button" onClick={() => setMatchDev(false)}>Fechar</button>
        </div>
      )}
    </div>
  );
}
