import React from 'react';
import Tracks from '../tracks/tracks';
import MusicBar from './musicBar';

const MusicIndex = () => {
  return (
    <React.Fragment>
      <MusicBar />
      <Tracks />
    </React.Fragment>
  )

}

export default MusicIndex;