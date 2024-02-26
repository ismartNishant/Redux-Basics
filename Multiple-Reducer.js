const redux = require("redux");

//store created

//action for cake
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

//action creators
function OrderCake() {
  return {
    type: CAKE_ORDERED, //action type
    payload: 1, // use payload when you want to send additional information
  };
}
//action creators
function RestockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED, //action type
    payload: qty, // use payload when you want to send additional information
  };
}

//initial state
const initialsateForcake = {
  numberOfCakes: 10,
};

//reducer function
const CakeReducer = (state = initialsateForcake, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state, // making copy of state and below only want to update numberofCakes
        numberOfCakes: state.numberOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state, // making copy of state and below only want to update numberofCakes
        numberOfCakes: state.numberOfCakes + action.payload, // use payload when you want to send additional information
      };
    default:
      return state;
  }
};

//action for cake
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

//action creators
function OrderIceCream() {
  return {
    type: ICECREAM_ORDERED, //action type
    payload: 1, // use payload when you want to send additional information
  };
}

//action creators
function RestockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED, //action type
    payload: qty, // use payload when you want to send additional information
  };
}

//initial state
const initialsateForIceream = {
  numberOfIceream: 10,
};

//reducer function
const IcecreamRducer = (state = initialsateForIceream, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state, // making copy of state and below only want to update numberOfIceream
        numberOfIceream: state.numberOfIceream - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state, // making copy of state and below only want to update numberOfIceream
        numberOfIceream: state.numberOfIceream + action.payload, // use payload when you want to send additional information
      };
    default:
      return state;
  }
};

//combine reducer function to combine multiple reducer cause createstore acn only accept one reducer function
const RootReducer = redux.combineReducers({
  cake: CakeReducer,
  IceCream: IcecreamRducer,
});
//
const store = redux.createStore(RootReducer);// accepts single reducer function

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  {}
);

//
store.dispatch(OrderCake());
store.dispatch(OrderCake());
store.dispatch(OrderCake());
//
console.log("Cakes are Restocked");
store.dispatch(RestockCake(5));

//
store.dispatch(OrderIceCream());
store.dispatch(OrderIceCream());
store.dispatch(OrderIceCream());

console.log("iceream are Restocked");
store.dispatch(RestockIceCream(10));



unsubscribe();
//after unsubscribe you cant update the state
store.dispatch(OrderCake()); //no output
