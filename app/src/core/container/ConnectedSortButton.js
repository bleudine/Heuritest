import React from 'react';
import { connect } from 'react-redux';
import { sortList }         from "../../actions";

import SortButton from '../component/SortButton';

export default connect(
    state => ({}),
    dispatch => ({
        sort: (key, nested) => dispatch(sortList(key, nested))
    }),
    (stateProps, dispatchProps, ownProps) => ({
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
        sort: () => dispatchProps.sort(ownProps.listKey, ownProps.nested)
    })
)(SortButton);