import {
    LOG_OUT,LOAD_EVENT_DETAIL
 } from '../../components/actions/types';
 
 const initialState = {
  event:[],
 };
 
 const EventReducer = (state = initialState, action) => {
   switch (action.type) {

     case LOAD_EVENT_DETAIL:
       return {
         ...state,
         event: {...action.event},
       };
  

     case LOG_OUT:
       return {
         ...initialState,
       };
 
     default:
       return state;
   }
 };
 
 
 export default EventReducer;
 