const redux = require("redux");
const produce = require("immer").produce;

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
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default:
      return state;
  }
};

const store = redux.createStore(Reducer);

console.log("initial Address: ", store.getState().address.street);

const unsubscribe = store.subscribe(() =>
  console.log("Updated Address: ", store.getState().address.street)
);

store.dispatch(UpdateStreet("Bharatmata Housing Society"));

unsubscribe();
