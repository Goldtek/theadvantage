import {
    LOAD_COURSE_DETAIL,LOG_OUT,CHECKOUT,LOAD_BOOK_DETAIL
 } from '../../components/actions/types';
 
 const initialState = {
  course: {},
  checkout:{},
  book:{}
 };
 
 const CourseReducer = (state = initialState, action) => {
   switch (action.type) {

     case LOAD_COURSE_DETAIL:
       return {
         ...state,
         course: {...action.course},
       };
        case LOAD_BOOK_DETAIL:
       return {
         ...state,
         book: {...action.book},
       };

        case CHECKOUT:
        return {
            ...state,
            checkout: action.checkout,
        };

     case LOG_OUT:
       return {
         ...initialState,
       };
 
     default:
       return state;
   }
 };
 
 
 export default CourseReducer;
 