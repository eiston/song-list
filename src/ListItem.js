import React from 'react';
import './ListItem.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HeadsetIcon from '@material-ui/icons/Headset';
import { listen,fav } from "./actions";
import { connect } from 'react-redux'

function ListItem({song, fav, listen}) {
  return (
    <div className="item">
      <div className = "top" >
        <div className = "artist">{song.artist}</div>
        <FavoriteIcon className={ song.favourite?'red':'grey'} onClick={() => fav(song)}/>
        <HeadsetIcon className={ song.listened?'green':'grey'} onClick={() => listen(song)}/>
      </div>
      <div className = 'track'>{song.track}</div>
    </div>
  );
}
const mapStateToProps = state => ({
})
const mapDispatchToProps = dispatch => ({
  listen: song => dispatch(listen(song)),
  fav: song => dispatch(fav(song)),
})
export default connect(mapStateToProps,mapDispatchToProps)(ListItem)
