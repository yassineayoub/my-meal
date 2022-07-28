import { ADD_ALIMENT, SET_ALIMENTS, SET_ALIMENT_CALORIES, SET_ALIMENT_SELECTED } from "../actions/actions"

const initialState = {
  alimentSelected: '',
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
      label: 'epinard',
      protein: 15,
      carbohydrate: 50,
      fat: 2,
      quantity: 50,
    },
    {
      id: 2,
      label: 'banane',
      protein: 15,
      carbohydrate: 50,
      fat: 2,
      quantity: 50,
    },
    {
      id: 3,
      label: 'coco',
      protein: 15,
      carbohydrate: 50,
      fat: 2,
      quantity: 50,
    },
    {
      id: 4,
      label: 'Aliment Test 4',
      protein: 15,
      carbohydrate: 50,
      fat: 2,
      quantity: 50,
    },
    {
      id: 6,
      label: 'Aliment Test 6',
      protein: 15,
      carbohydrate: 50,
      fat: 2,
      quantity: 50,
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
    case SET_ALIMENT_SELECTED:
    return { 
      ...state, 
      alimentSelected: payload.alimentSelected
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
