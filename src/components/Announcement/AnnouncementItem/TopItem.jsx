import React, { useState } from 'react'
import NewAForm from '../../../common/Form/Form'
import s from './AnnouncementItem.module.css'

const AnnouncementItem = (props) => {
    let [showDetails, setShowDetails ] = useState(false)
    let [showForm, showFormToggle] = useState(false)
    const showDetailsOnClick = () => {
        setShowDetails(true)
    }
    const editFormById = (formValue) =>{
        formValue["id"] = props.aItem.id
        formValue["lastChange"] = new Date().toLocaleString()
        props.editAItem(formValue)
        showFormToggle(false)
    }

    const removeItem = () => {
         props.removeItem(props.aItem.id)
         setShowDetails(false)
    }
    return <div className = {s.similiar}>
        <span className = {s.itemTitle} onClick = {showDetailsOnClick}>
            <b>Title : </b>{props.aItem.title}
        </span>
        <div>
            {showDetails && <div> 
            {!showForm && <div>
                 <div className = {s.inlineFunctions}>
                 <div onClick = {() => setShowDetails(false)}>
                    hideDetails
                </div>
                <div onClick = {() => showFormToggle(true)}>
                    Edit Announcement
                </div>
                <div onClick = {removeItem}>
                    Delete Announcement
                </div>
                </div>
                <div className ={ s.inlineInfo}>
                    <b>Sender : </b> {props.aItem.description.senderName} {props.aItem.description.senderEmail}
                    <b> Added at : </b>{props.aItem.dateAdded}
                    {props.aItem.lastChange && <div><b>Last changed at : </b>{props.aItem.lastChange}</div>}
                </div>
                <div>
                    <b>Body : </b> {props.aItem.body}
                </div>

            </div>}
            {showForm && <div>
                <NewAForm initialValues = {props.aItem} onSubmit = {editFormById} />
                <button onClick = {() => showFormToggle(false)}>Cancel</button>
            </div>

            }
            </div>}
        </div>
    </div>
}

export default AnnouncementItem