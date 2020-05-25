import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';
import itsamatch from '../../assets/itsamatch.png';

import './styles.css';

export default function Main() {
  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(true);

  async function handleDislike() {
  }

  async function handleLike() {
  }

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="Tindev Logo" />
      </Link>

        <ul>
            <li key={2}>
              <img src="https://avatars3.githubusercontent.com/u/47339825?s=460&u=dbf13c0c1865ffa4e2bc8535c2e32bccc957251d&v=4" alt={'Gabriel'}/>
              <footer>
                <strong>Gabriel</strong>
                <p>Software Developer</p>
              </footer>

              <div className="buttons">
                <button type="button" onClick={() => handleDislike(1)}>
                  <img src={dislike} alt="dislike" />
                </button>

                <button type="button" onClick={() => handleLike()}>
                  <img src={like} alt="like" />
                </button>
              </div>
            </li>

            <li key={2}>
              <img src="https://avatars3.githubusercontent.com/u/47339825?s=460&u=dbf13c0c1865ffa4e2bc8535c2e32bccc957251d&v=4" alt={'Gabriel'}/>
              <footer>
                <strong>Gabriel</strong>
                <p>Software Developer</p>
              </footer>

              <div className="buttons">
                <button type="button" onClick={() => handleDislike(1)}>
                  <img src={dislike} alt="dislike" />
                </button>

                <button type="button" onClick={() => handleLike()}>
                  <img src={like} alt="like" />
                </button>
              </div>
            </li>

            <li key={2}>
              <img src="https://avatars3.githubusercontent.com/u/47339825?s=460&u=dbf13c0c1865ffa4e2bc8535c2e32bccc957251d&v=4" alt={'Gabriel'}/>
              <footer>
                <strong>Gabriel</strong>
                <p>Software Developer</p>
              </footer>

              <div className="buttons">
                <button type="button" onClick={() => handleDislike(1)}>
                  <img src={dislike} alt="dislike" />
                </button>

                <button type="button" onClick={() => handleLike()}>
                  <img src={like} alt="like" />
                </button>
              </div>
            </li>

            <li key={2}>
              <img src="https://avatars3.githubusercontent.com/u/47339825?s=460&u=dbf13c0c1865ffa4e2bc8535c2e32bccc957251d&v=4" alt={'Gabriel'}/>
              <footer>
                <strong>Gabriel</strong>
                <p>Software Developer</p>
              </footer>

              <div className="buttons">
                <button type="button" onClick={() => handleDislike(1)}>
                  <img src={dislike} alt="dislike" />
                </button>

                <button type="button" onClick={() => handleLike()}>
                  <img src={like} alt="like" />
                </button>
              </div>
            </li>

            <li key={2}>
              <img src="https://avatars3.githubusercontent.com/u/47339825?s=460&u=dbf13c0c1865ffa4e2bc8535c2e32bccc957251d&v=4" alt={'Gabriel'}/>
              <footer>
                <strong>Gabriel</strong>
                <p>Software Developer</p>
              </footer>

              <div className="buttons">
                <button type="button" onClick={() => handleDislike(1)}>
                  <img src={dislike} alt="dislike" />
                </button>

                <button type="button" onClick={() => handleLike()}>
                  <img src={like} alt="like" />
                </button>
              </div>
            </li>

            <li key={2}>
              <img src="https://avatars3.githubusercontent.com/u/47339825?s=460&u=dbf13c0c1865ffa4e2bc8535c2e32bccc957251d&v=4" alt={'Gabriel'}/>
              <footer>
                <strong>Gabriel</strong>
                <p>Software Developer</p>
              </footer>

              <div className="buttons">
                <button type="button" onClick={() => handleDislike(1)}>
                  <img src={dislike} alt="dislike" />
                </button>

                <button type="button" onClick={() => handleLike()}>
                  <img src={like} alt="like" />
                </button>
              </div>
            </li>
        </ul>

      {matchDev && (
        <div className="match-container">
          <img src={itsamatch} alt="match"/>

          <img className="avatar" src="https://avatars3.githubusercontent.com/u/47339825?s=460&u=dbf13c0c1865ffa4e2bc8535c2e32bccc957251d&v=4" alt="dev-match"/>
          <strong>Gabriel Santana</strong>
          <p>Software Developer</p>

          <button>Fechar</button>
        </div>
      )}
    </div>
  );
}
