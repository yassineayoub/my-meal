import { ADD_ALIMENT, SET_ALIMENTS, SET_ALIMENT_CALORIES, SET_ALIMENT_NAME } from "../actions/actions"

const initialState = {
  alimentName: '',
  alimentCalorie: '',
  alimentsMatin: [
    {
      id: 1,
      name: 'banane',
      protein: 15,
      carbohydrate: 50,
      fat: 2,
      quantity: 50,
    },
  ],
  aliments: [
    {
      id: 1,
      name: 'Aliment Test',
      calorie: 200,
    },
    {
      id: 2,
      name: 'Aliment Test 2',
      calorie: 200,
    },
    {
      id: 3,
      name: 'Aliment Test 3',
      calorie: 200,
    },
    {
      id: 4,
      name: 'Aliment Test 4',
      calorie: 200,
    },
    {
      id: 5,
      name: 'Aliment Test 5',
      calorie: 200,
    },
    {
      id: 6,
      name: 'Aliment Test 6',
      calorie: 200,
    },
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
    case SET_ALIMENTS:
      return {
        ...state,
        aliments: payload
      }

  default:
    return state
  }
};

export default reducer;
