export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const ADD_ITEM = 'ADD_ITEM';

export const removeFeature = (item) => ({
    type: REMOVE_FEATURE,
    payload: item
})

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
})