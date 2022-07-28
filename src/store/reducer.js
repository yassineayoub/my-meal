import { ADD_ALIMENT, SET_ALIMENTS, SET_ALIMENT_CALORIES, SET_ALIMENT_SELECTED } from "../actions/actions"

const initialState = {
  alimentSelected: '',
  whereToAdd: 'Matin',
  alimentCalorie: '',
  alimentsUser: [
   
  ],
  aliments: [
    {
      id: 1,
      label: 'epinard',
      protein: 15,
      carbohydrate: 50,
      fat: 2,
      quantity: 100,
    },
    {
      id: 2,
      label: 'banane',
      protein: 15,
      carbohydrate: 12,
      fat: 2,
      quantity: 100,
    },
    {
      id: 3,
      label: 'coco',
      protein: 1,
      carbohydrate: 54,
      fat: 2,
      quantity: 100,
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
    // const alimentToInsert = state.alimentSelected.map()
    const alimentToInsert = state.aliments.find((aliment) => aliment.label === state.alimentSelected)
    return { 
      ...state, 
      alimentsUser: [...state.alimentsUser, alimentToInsert] 
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
