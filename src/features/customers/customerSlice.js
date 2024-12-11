const initialStateCustomer = {
  fullname: "",
  nationalID: "",
  createdAt: "",
};

export default function customerreducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullname: action.payload.fullname,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullname: action.payload };
    default:
      return state;
  }
}

export function createCustomer(fullname, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullname, nationalID, createdAt: new Date().toISOString() },
  };
}
export function updateName(fullname) {
  return { type: "customer/updateName", payload: fullname };
}

//   store.dispatch(createCustomer("andronicos nicolaides", "56356356"));
//   console.log(store.getState());
//   store.dispatch(updateName("andy nico"));
//   console.log(store.getState());
