export const ADD_ALIMENT = 'ADD_ALIMENT';
export const addAliment = () => {
  return {
    type: ADD_ALIMENT,
  }
};

export const SET_ALIMENT_SELECTED = 'SET_ALIMENT_SELECTED';
export const setAlimentSelected = (alimentSelected) => {
  return {
    type: SET_ALIMENT_SELECTED,
    payload : {
      alimentSelected,
    },
  }
};

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
