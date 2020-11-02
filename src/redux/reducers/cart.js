import _ from "lodash";
import {
  LOG_OUT,
  UPDATE_CART,
  ITEM_REMOVED_FROM_CART,
  CLEAR_CART,
  UPDATE_QTY,
} from '../../components/actions/types';

const initialState = {
  cart: {
    items: [],
    totalPrice: 0,
  },
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        cart: action.cart,
      };
    case UPDATE_QTY:
      const cart = _.cloneDeep(state.cart);
      const index = _.findIndex(cart.items, item => item._id === action.item._id);
      if (index !== -1) {
        cart.items[index] = action.item;
      } else {
        cart.items.push(action.item);
      }
      let totalPrice = 0;
      _.each(cart.items, (item) => {
        totalPrice += item.total;
      });
      cart.totalPrice = totalPrice;
      return {
        ...state,
        cart,
      };
    case ITEM_REMOVED_FROM_CART:
      return {
        ...state,
        cart: action.cart,
      };
    // case ORDER_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: null,
    //   };
    // case ORDER_CREATE_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: null,
    //   };
    // case ORDER_PREVIEW_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     orders: action.orders,
    //     error: null,
    //   };
    // case SET_ORDER_PREVIEW:
    //   return {
    //     ...state,
    //     orders: null,
    //   };
    // case ORDER_PREVIEW_ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.error,
    //   };
    case CLEAR_CART: {
      return {
        ...initialState,
      };
    }
    case LOG_OUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
