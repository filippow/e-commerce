import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParams => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParams] : null
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.values(collections) : []
);

export const selectIsCollectionFetching  = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);