import React , { useEffect } from 'react';
import { connect } from "react-redux";
import './App.css';
import './ListItem'
import ListItem from './ListItem';
import List from './List'
import { filter } from "./actions";

function App(props) {
  return (
    <div className="App">
      <div className="inputContainer">
        <input className="input" onChange={(e) => props.filter(e.target.value)}/>
      </div>
      <div className="wrapper">
        <div>
          <div className="title">favourite</div>
          <List list={props.fav}/>
        </div>
        <div>
          <div className="title">listened</div>

          <List list={props.listen}/>
        </div>
        <div>
          <div className="title">all</div>

          <List list={props.all}/>
        </div>
      </div>
    </div>

  );
}
const mapStateToProps = state => {
  
  let all = [...state.all.filter(song => {
    if(state.filter.length == 0)return true;
    else return(song.artist.toUpperCase().includes(state.filter.toUpperCase()) || song.track.toUpperCase().includes(state.filter.toUpperCase()))
  })];
  if(state.filter.length == 0) all = [...state.all]
  const fav = all.filter(song => song.favourite)
  const listen = all.filter(song => song.listened)
  return {all, fav, listen};
};
const mapDispatchToProps = dispatch => ({
  filter: text => dispatch(filter(text)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
