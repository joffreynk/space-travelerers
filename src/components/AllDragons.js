import React, {Fragment} from 'react';
import SingleDragon from './SingleDragon';

const AllDragons = ({ dragon }) => {
  
    return (
    <Fragment>
        {dragon.map((dr) => (
        <SingleDragon 
          key={dr.id} 
          id={dr.id}
          name={dr.name}
          type={dr.type}
        />
      ))}
    </Fragment>
    );
};

export default AllDragons;
