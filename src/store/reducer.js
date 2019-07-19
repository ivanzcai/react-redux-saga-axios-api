const initialState = {
  age: 20
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "AGE_UP_ASYNC":
      newState.age += action.value;
      break;

    case "AGE_DOWN":
      newState.age -= action.value;
      break;
    case "CALL_APIS_FULFILLED":
      console.log("second", action.value);
      break;
    case "CALL_APIS_FULFILLED3":
      console.log("third", action.value);
      break;
    case "CALL_POST_API":
      console.log("first", action.value);
      break;
    case "NOTIFY":
      console.log("all done!");
      break;
  }
  return newState;
};

export default reducer;
