const redux = require("redux");


const initialstate = {
  name: "nishant",
  address: {
    street: "House No3 Rail vihar",
    city: "Pune",
    state: "Mh",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

const UpdateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    default:
      return state;
  }
};





const store = redux.createStore(Reducer);
console.log("initial state ;")

const unsubscribe = store.subscribe(() =>{});

store.dispatch(UpdateStreet("Bharatmata Housing Society"));
store.dispatch(UpdateStreet("plot n b20"));


unsubscribe();
