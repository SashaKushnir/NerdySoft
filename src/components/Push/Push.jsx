
import React, { useState } from 'react'
import NewAForm from '../../common/Form/Form'

const Announcement = (props) => {
let [successBanner, successBannerToggle] = useState(false)
const addNewA = (formObj) => {
    formObj["dateAdded"] = new Date().toLocaleString()
    props.pushAnn(formObj)
    successBannerToggle(true)
    setTimeout(()=>{successBannerToggle(false)
    },3000)
}
    return <div>
         <NewAForm onSubmit = {addNewA} />
            {successBanner && 
            <div>
                Success
            </div>
            }
    </div>
}



export default Announcement