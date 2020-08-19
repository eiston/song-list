import { combineReducers } from "redux";
import {LISTEN, FAV, FILTER} from "./actions";
import db from "./db.json"

const all = (state = db.playlist, action)=>{
    switch(action.type){
        case LISTEN: {
            const {id, listened} = action.song;
            state.map(song => {
                if(song.id == id) song.listened = !listened;
                return song;
            });
            return [...state]
        }
        case FAV: {
            const {id, favourite} = action.song;
            state.map(song => {
                if(song.id == id) song.favourite = !favourite;
                return song;
            });
            return [...state]
        }
        default:
            return state
    }
}
const filter  = (state ='', action) =>{
    switch(action.type) {
        case FILTER: {
            return action.filter
        }
        default:
            return state
    }

}
export default combineReducers({all, filter});