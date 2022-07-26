import React, {Fragment} from 'react';

const SingleDragon = ({id, name, type}) => {
  return(
    <Fragment>
    <div>id : {id}</div>
    <div>name : {name}</div>
    <div>type : {type}</div>
    </Fragment>
  )
};

export default SingleDragon;
