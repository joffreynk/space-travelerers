import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDragon } from '../redux/dragons/dragonSlice';
import AllDragons from './AllDragons';

const DragonsContainer = () => {
  // Using Use Selector to grab the state
  const alldragons = useSelector((state) => state.dragon);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!alldragons.length) {
      dispatch(getDragon());
    }
  }, [alldragons.length]);

  return (
    <div className="rockets-container">
      {
      alldragons.length ? <AllDragons dragon={alldragons} /> : <div>No Dragon Found</div>
      }
    </div>
  );
};

export default DragonsContainer;
