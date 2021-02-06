
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getA } from '../../hoc/hoc'
import Push from './Push'
import { pushAnn } from '../../ResduxStore/announcmentsReducer'

class PushContainer extends React.Component{
    render(){
        return <Push {...this.props} />
    }
}

const mstp = (state) => {
    return {
        ShowAList : getA(state).ShowAList,
        MySimiliarArrayIndex : getA(state).MySimiliarArrayIndex
    }
}
export default compose (
    connect(mstp, { pushAnn })) 
 (PushContainer)