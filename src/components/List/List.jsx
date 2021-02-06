import React from 'react'
import AnnouncementItem from '../Announcement/AnnouncementItem/AnnouncementItem'

const List = (props) => {
    debugger
    const announcementList = props.ShowAList.map((anVal, arrayIndex) => <AnnouncementItem
    aItem = {anVal} key = {arrayIndex} arrayIndex = {arrayIndex} getTopSimiliar = {props.getTopSimiliar}
    editAItem = {props.editAItem} removeItem = {props.removeItem} arrayDetails = {props.arrayDetails}
    MySimiliarArrayIndex = {props.MySimiliarArrayIndex} hideOtherDetails = {props.hideOtherDetails} />)
    .reverse()

    return <div>
        {announcementList}
    </div>
}



export default List