import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getA } from '../../hoc/hoc'
import Search from './Search'
import {filterByTitle, editAItem, removeItem, getTopSimiliar} from '../../ResduxStore/announcmentsReducer'

class SearchContainer extends React.Component{

    render(){
        return <Search {...this.props} />
    }
}

const mstp = (state) => {
    return {
        MySimiliarArrayIndex : getA(state).MySimiliarArrayIndex,
        SearchList : getA(state).SearchList
    }
}
export default compose (
    connect(mstp, {filterByTitle, editAItem, removeItem, getTopSimiliar})) 
 (SearchContainer)