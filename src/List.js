import React from 'react';
import ListItem from './ListItem'

function List({list}) {
  return (
    <div>
        {list.map(song => (<div key={song.id}><ListItem song={{...song}}/></div>))}
    </div>
  );
}

export default List
