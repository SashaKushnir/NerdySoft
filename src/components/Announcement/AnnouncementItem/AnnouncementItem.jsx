import React, { useState } from 'react'
import NewAForm from '../../../common/Form/Form'
import s from './AnnouncementItem.module.css'
import TopItem from './TopItem'
 const AnnouncementItem =  React.memo((props) => {
    let [showDetails, setShowDetails] = useState(false)
    let [showForm, showFormToggle] = useState(false)
    let [showTop, showTopToggle] = useState(false)
    let [editSuccess, editSuccessToggle] = useState(false)
    let top = props.MySimiliarArrayIndex.map(val => <TopItem aItem={val} />)
    // if(props.arrayDetails)
    // if(props.arrayDetails !== props.aItem.id)
    // showTopToggle(false)             UseEffect Or ComponentDidUpdateIsneeded//PureComponent
    const showDetailsOnClick = () => {
        setShowDetails(true)
    }
    debugger
    const editFormById = (formValue) => {
        formValue["id"] = props.aItem.id
        formValue["lastChange"] = new Date().toLocaleString()
        props.editAItem(formValue)
        showFormToggle(false)
        editSuccessToggle(true)
        setTimeout(()=>{
            editSuccessToggle(false)
        },3000)
    }
    const getTopTheSimiliar = () => {
        props.getTopSimiliar(props.aItem, 3, props.arrayIndex)
        showTopToggle(true)
        props.hideOtherDetails(props.aItem.id)
    }
    const removeItem = () => {
        props.removeItem(props.aItem.id)
        setShowDetails(false)
    }
    return <div className={s.announceItemWrapper}>
        <div></div>
        <div>
            <div className={s.itemTitle} onClick={showDetailsOnClick}>
                <b>Title : </b>{props.aItem.title}
            </div>
            <div style = {{paddingLeft : "12px"}} >
                {showDetails && <div>
                    <Info showForm = {showForm}setShowDetails = {setShowDetails} showFormToggle ={ showFormToggle}
                    removeItem = {removeItem} getTopTheSimiliar= {getTopTheSimiliar} showTopToggle = {showTopToggle}
                    aItem = {props.aItem} showTop= {showTop} top ={top}/>
                    {showForm && <div>
                        <NewAForm initialValues={props.aItem} onSubmit={editFormById} />
                        <button onClick={() => showFormToggle(false)}>Cancel</button>
                    </div>}
                    <div>{editSuccess && <div>Edit Success</div>}</div>
                </div>}
            </div>
        </div>
        <div></div>
    </div>
})
export default AnnouncementItem

const Functions = ({setShowDetails,showFormToggle,showTopToggle, showTop, removeItem, getTopTheSimiliar}) => {
    return <div className = {s.propWrapper}>
           <div onClick={() => setShowDetails(false)}>
                            hideDetails
            </div>
            <div onClick={() => showFormToggle(true)}>
                Edit Announcement
                </div>
            <div onClick={removeItem}>
                Delete Announcement
                </div>
            <div>
                {!showTop ?<div onClick={getTopTheSimiliar}>
                    Get Top 3 Similiar
                </div>
                :<div onClick={()=>showTopToggle(false)}>
                    HideTop    
                </div>}
            </div>
    </div>
}

const Info = ({showForm,setShowDetails, showFormToggle, removeItem, getTopTheSimiliar,
    aItem, showTop, top, showTopToggle}) => {
    return <div>
         {!showForm && <div>
                        <Functions setShowDetails = {setShowDetails} showFormToggle ={showFormToggle}
                        removeItem = {removeItem} getTopTheSimiliar = {getTopTheSimiliar}
                        showTop = {showTop} showTopToggle = {showTopToggle}/> 
                        
                        <div>
                        <b>Sender : </b> {aItem.description.senderName} {aItem.description.senderEmail}
                            <b> Added at : </b>{aItem.dateAdded}
                            {aItem.lastChange && <div><b>Last changed at : </b>{aItem.lastChange}</div>}
                        </div>
                        <div>
                            <b>Body : </b> {aItem.body}
                        </div>
                        {showTop && top}
                    </div>}
    </div>
}