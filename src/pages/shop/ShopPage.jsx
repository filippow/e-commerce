import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionPageContainer from '../collection/CollectionContainer';

import './shopPage.scss';

import {fetchCollectionsStartAsync} from '../../redux/shop/actions';

import CollectionOverviewContainer from '../../components/collectionsOverview/CollectionsOverviewContainer';


class ShopPage extends React.Component {
    componentDidMount() {
        this.props.fetchCollectionStartAsync();
    }

    render() {
        const {match} = this.props;

        return (
            <div className='shop-page'>
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionStartAsync: () => dispatch(fetchCollectionsStartAsync())
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ShopPage);