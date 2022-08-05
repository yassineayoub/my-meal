import { ADD_ALIMENT, ADD_ALIMENT_TO_ARRAY, DELETE_ALIMENT, SET_ALIMENTS, SET_ALIMENT_CALORIES, SET_ALIMENT_SELECTED, SET_QUANTITY } from "../actions/actions"

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
      carbs: 50,
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
    case ADD_ALIMENT_TO_ARRAY:
      payload.id = Math.random();
      payload.quantity = 100;
      return {
        ...state,
        aliments: [...state.aliments, payload]
      }
    case DELETE_ALIMENT:
      const newAlimentArray = state.alimentsUser.filter((aliment) => aliment.id !== payload.alimentId);
      return {
        ...state,
        alimentsUser: newAlimentArray,
        
      }
    case SET_QUANTITY:
      const alimentIndex = state.alimentsUser.findIndex((aliment) => aliment.id === payload.alimentId);
      const alimentsUserCopy = [...state.alimentsUser];
      const aliment = alimentsUserCopy[alimentIndex];

      const InputQuantity = +payload.quantity < 1 ? 1 : +payload.quantity;
      const { quantity } = aliment;

        aliment.protein = +((aliment.protein / quantity) * InputQuantity).toFixed(1);
        aliment.carbohydrate = +((aliment.carbohydrate / quantity) * InputQuantity).toFixed(1);
        aliment.fat = +((aliment.fat / quantity) * InputQuantity).toFixed(1);
        aliment.quantity = InputQuantity;

        alimentsUserCopy[alimentIndex] = aliment;
      return {
        ...state,
        alimentsUser: alimentsUserCopy,
      }

  default:
    return state
  }
};

export default reducer;
