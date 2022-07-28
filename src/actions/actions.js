// Insert aliment in list ex Matin/ midi / soir
export const ADD_ALIMENT = 'ADD_ALIMENT';
export const addAliment = () => {
  return {
    type: ADD_ALIMENT,
  }
};

// Set l'element select dans le select form
export const SET_ALIMENT_SELECTED = 'SET_ALIMENT_SELECTED';
export const setAlimentSelected = (alimentSelected) => {
  return {
    type: SET_ALIMENT_SELECTED,
    payload : {
      alimentSelected,
    },
  }
};

const CHANGE_QUANTIY = "CHANGE_QUANTITY";
const setQuantity = (value) => ({
  type: CHANGE_QUANTIY,
  payload: {
    value
  }
})

export const SET_ALIMENT_CALORIES = 'SET_ALIMENT_CALORIES';
export const setAlimentCalories = (calories) => {
  return {
    type: SET_ALIMENT_CALORIES,
    payload : calories,
  }
};

export const SET_ALIMENTS = 'SET_ALIMENTS';
export const setAliments = (aliments) => {
  return {
    type: SET_ALIMENT_CALORIES,
    payload: {
      aliments,
    },
  
  }
};
