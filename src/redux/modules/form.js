// when naming actions, namespace them by the file to prevent collisions
export const CREATE_INPUT = "form/CREATE_INPUT";
export const DELETE_INPUT = "form/DELETE_INPUT";
export const UPDATE_VALUE = "form/UPDATE_VALUE";

// sets the initial state of this portion of the store
const initialState = [
  {
    label: "step ",
    id: "0",
    value: ""
  }
];

// routes the actions and returns old, new state if action matches
export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_INPUT:
      return [
        ...state,
        {
          label: "step ",
          id: state.length.toString(),
          value: ""
        }
      ];
    case UPDATE_VALUE:
      return state.map((item, i) => {
        if (action.id === item.id) {
          return {
            ...item,
            value: action.value,
            id: action.id
          };
        }

        return item;
      });
    default:
      return state;
  }
};

export const createInput = () => {
  return dispatch => {
    dispatch({
      type: CREATE_INPUT
    });
  };
};

export const updateValue = data => {
  const { value, id } = data;

  return dispatch => {
    dispatch({
      type: UPDATE_VALUE,
      value,
      id
    });
  };
};
