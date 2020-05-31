import ShopActionTypes from './actionTypes';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebaseUtil';

export const fetchCollectionsStart = () => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_START
    }
};

export const fetchCollectionSuccess = collectionMap => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionMap
    }
}

export const fetchCollectionsFailure = errorMessage => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: errorMessage
    }
}

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(
            snapshot=> {
                const collectionMap = convertCollectionsSnapshotToMap(snapshot);

                dispatch(fetchCollectionSuccess(collectionMap))
            },
            error => dispatch(fetchCollectionsFailure(error.message))
        )
    }
}