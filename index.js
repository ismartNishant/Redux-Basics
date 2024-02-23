const redux = require("redux");
//store created
// const createStore = redux.createStore;

//action
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

//action creators
function OrderCake() {
  return {
    type: CAKE_ORDERED, //action type
    payload: 1,// use payload when you want to send additional information
  };
}
//action creators
function RestockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED, //action type
    payload: qty,// use payload when you want to send additional information
  };
}

//initial state
const initialsate = {
  numberOfCakes: 10,
  numofbuns: 15,
};

//reducer function
const reducer = (state = initialsate, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state, // making copy of state and below only want to update numberofCakes
        numberOfCakes: state.numberOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state, // making copy of state and below only want to update numberofCakes
        numberOfCakes: state.numberOfCakes + action.payload,// use payload when you want to send additional information
      };
    default:
      return state;
  }
};

//
const store = redux.createStore(reducer);

console.log("initial sate and ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated State ", store.getState())
);

for (i = 0; i < 10; i++) {
  store.dispatch(OrderCake());

  if (store.getState().numberOfCakes === 0) {
    console.log("Cakes are Restocked");
    store.dispatch(RestockCake(15));
  }
}


// ================================  you can also use bindActionCreators ===========================
// const bindActionCreators = redux.bindActionCreators;
// const actions = bindActionCreators({ OrderCake, RestockCake }, store.dispatch);

// for (i = 0; i < 10; i++) {
//   actions.OrderCake();

//   if (store.getState().numberOfCakes === 0) {
//     console.log("Cakes are Restocked");
//     actions.RestockCake(4)
//   }
// }

unsubscribe();
//after unsubscribe you cant update the state
store.dispatch(OrderCake()); //no output
