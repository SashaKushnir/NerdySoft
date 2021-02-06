import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getA } from '../../hoc/hoc'
import List from './List'
import { showBase, editAItem, removeItem, getTopSimiliar, hideOtherDetails} from '../../ResduxStore/announcmentsReducer'

class ListContainer extends React.Component{

    render(){
        return <List {...this.props} />
    }
}

const mstp = (state) => {
    return {
        ShowAList : getA(state).ShowAList,
        MySimiliarArrayIndex : getA(state).MySimiliarArrayIndex,
        arrayDetails : getA(state).arrayDetails
    }
}
export default compose (
    connect(mstp, { showBase, editAItem, removeItem, getTopSimiliar, hideOtherDetails})) 
 (ListContainer)