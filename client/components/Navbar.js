import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getName} from '../store';

const navbar = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.game.name);

  return (
    <div id='navbar' >
      <h3
      name='learn'
      className={name==='learn' ? 'selected' : ''}
      onClick={() => dispatch(getName('learn'))}>
        Learn </h3>
      <h3
      name='music'
      className={name==='music' ? 'selected' : ''}
      onClick={() => dispatch(getName('music'))}>
        Music </h3>
      {/* <h3
      name='math'
      className={name==='math' ? 'selected' : ''}
      onClick={() => dispatch(getName('math'))}>
        Math </h3> */}
      <h3
      name='color'
      className={name==='color' ? 'selected' : ''}
      onClick={() => dispatch(getName('color'))}>
        Color </h3>
    </div>
  )
}

export default navbar
