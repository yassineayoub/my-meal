export const ADD_ALIMENT = 'ADD_ALIMENT';
export const addAliment = () => {
  return {
    type: ADD_ALIMENT,
  }
};

export const SET_ALIMENT_NAME = 'SET_ALIMENT_NAME';
export const setAlimentName = (alimentName) => {
  return {
    type: SET_ALIMENT_NAME,
    payload : alimentName,
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
    payload: aliments,
  
  }
};
