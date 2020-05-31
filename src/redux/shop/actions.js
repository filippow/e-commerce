import ShopActionTypes from './actionTypes';

export const updateCollections = (collectionsMap) => {
    return {
        type: ShopActionTypes.UPDATE_COLLECTIONS,
        payload: collectionsMap
    }
}