import React, { useState } from 'react'
import TopItem from '../Announcement/AnnouncementItem/TopItem'
import s from './Search.module.css'

const Search = (props) => {
    const announcementList = props.SearchList.map((anVal, arrayIndex) => <TopItem
    aItem = {anVal} key = {arrayIndex} arrayIndex = {arrayIndex} getTopSimiliar = {props.getTopSimiliar}
    editAItem = {props.editAItem} removeItem = {props.removeItem}
    MySimiliarArrayIndex = {props.MySimiliarArrayIndex} />).reverse()
    debugger

let [searchValue, changeSearchValue] = useState('')
const onInputChange = (e) =>{
    changeSearchValue(e.target.value)
}
const searchForTitle = () => {
    props.filterByTitle(searchValue)
}
    return <div className = {s.serchWrapper}>
        <div></div>
        <div >
            {announcementList}
        </div>
        <div className={s.toRight}>
            <input  onChange = {onInputChange} value={searchValue}  type="text"/>
            <button onClick = {searchForTitle}>Search</button>
        </div>
        <div></div>
    </div>
}



export default Search