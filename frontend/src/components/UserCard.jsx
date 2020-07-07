import React from 'react';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

const UserCard = ({id, avatar, name, bio, onLike, onDislike}) => {
  return (
    <li key={id}>
      <img src={avatar} alt={'Gabriel'} />
      <footer>
        <strong>{name}</strong>
        <p>{bio}</p>
      </footer>

      <div className="buttons">
        <button type="button" onClick={onDislike}>
          <img src={dislike} alt="dislike" />
        </button>

        <button type="button" onClick={onLike}>
          <img src={like} alt="like" />
        </button>
      </div>
    </li>
  );
};

export default UserCard;
