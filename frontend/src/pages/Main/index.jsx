import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.svg';

import './styles.css';

export default function Main() {
  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="Tindev Logo" />
      </Link>

      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li>
              <img src={user.avatar} alt={user.name}/>
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>

              <div>
                <button>
                  <img src="" alt="deslike"/>
                </button>

                <button>
                  <img src="" alt="like"/>
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>Sem devs no momento :(</div>
      )}

      {matchDev && (
        <div>
          <img src="" alt="match"/>

          <img src="" alt="dev-match"/>
          <strong></strong>
          <p></p>

          <button>Fechar</button>
        </div>
      )}
    </div>
  );
}
