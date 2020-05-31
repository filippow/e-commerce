import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionsOverview from '../../components/collectionsOverview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage'
import WithSpinner from '../../components/withSpinner/WithSpinner';

import './shopPage.scss';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebaseUtil';
import {updateCollections} from '../../redux/shop/actions';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        isLoading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

            updateCollections(collectionsMap);
            this.setState({
                isLoading: false
            })
        });
    }

    render() {
        const {match} = this.props;
        const {isLoading} = this.state;

        return (
            <div className='shop-page'>
                <Route
                    exact path={`${match.path}`}
                    render={
                        props => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props}/>
                    }
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={
                        props => <CollectionPageWithSpinner isLoading={isLoading} {...props}/>
                    }
                />

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ShopPage);