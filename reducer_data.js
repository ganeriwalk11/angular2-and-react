import { CLEAR_DATA } from '../actions/index';
import { FETCH_DATA } from '../actions/index';
import { POST_DATA } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {

      case CLEAR_DATA:
          return [];
          break;

    case FETCH_DATA:
      //console.log(action.payload.data,state);
      return [ action.payload.data, ...state ];
      break;

      case POST_DATA:
          console.log(action.payload.data);
          //return [ action.payload.data, ...state ];
          break;
  }




  
  return state;
}
