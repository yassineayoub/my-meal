import { ADD_ALIMENT, SET_ALIMENT_CALORIES, SET_ALIMENT_NAME } from "../actions/actions"

const initialState = {
  alimentName: '',
  alimentCalorie: '',
  aliments: [
    {
      name: 'Aliment Test',
      calorie: 200,
    },
    {
      name: 'Aliment Test 2',
      calorie: 200,
    }
  ]
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_ALIMENT:
    return { 
      ...state, 
      aliments: [...state.aliments, {name: state.alimentName , calorie: state.alimentCalorie}] 
    }
    case SET_ALIMENT_NAME:
    return { 
      ...state, 
      alimentName: payload 
    }
    case SET_ALIMENT_CALORIES:
    return { 
      ...state, 
      alimentCalorie: payload 
    }

  default:
    return state
  }
};

export default reducer;
