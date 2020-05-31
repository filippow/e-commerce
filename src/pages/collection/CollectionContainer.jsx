import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from "reselect";
import {selectIsCollectionsLoaded} from "../../redux/shop/selectors";
import WithSpinner from "../../components/withSpinner/WithSpinner";
import CollectionPage from "./CollectionPage";

const mapStateToProps = createStructuredSelector({
    isLoading: state=> !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
