import { InitialAnList } from "./InitialAnVal/InitialAnVal"

const FILTER_BY_TITLE = "announcementReducer_FILTER_BY_TITLE"
const SHOW_ORIGIN = "announcementReducer_SHOW_ORIGIN"
const PUSH_ANN = "announcementReducer_PUSH_ANN"
const CHANGE_ITEM = "announcementReducer_CHANGE_ITEM"
const DELETE_ITEM = "announcementReducer_DELETE_ITEM"
const FIND_TOP_SIMILIAR = "announcementReducer_FIND_TOP_SIMILIAR"
const SET_ARRAY_DETAILS = "announcementReducer_SET_ARRAY_DETAILS"

const initialState = {
    check: 'asdada',
    BasicAnnouncementList : InitialAnList,
    ShowAList : InitialAnList,
    SearchList : [],
    MySimiliarArrayIndex : [],
    arrayDetails : null
}

const postsInfoReducer = (anInfo = initialState, action)  => {
    
    switch (action.type) {
        case FILTER_BY_TITLE : 
            return {
                ...anInfo,
                SearchList : [...anInfo.BasicAnnouncementList.filter((objItem) => 
                    objItem.title.toLocaleLowerCase().includes(action.input.toLocaleLowerCase()))]
            }
        
        case SHOW_ORIGIN : 
            return {
                ...anInfo,
                ShowAList : [...anInfo.BasicAnnouncementList]
            }

        case PUSH_ANN : 
        let setArray = [...anInfo.BasicAnnouncementList, {...action.formObj, 
            id : anInfo.BasicAnnouncementList.length + 1}]
            return {
                ...anInfo,
                BasicAnnouncementList : setArray,
                ShowAList : setArray
            }

        case CHANGE_ITEM :
            let changeArray = [...anInfo.BasicAnnouncementList.map(val => {
                if(val.id === action.formObj.id)
                return  action.formObj
                return val 
            })]
            return {
                ...anInfo,
                BasicAnnouncementList : changeArray,
                ShowAList : changeArray 
            }

        case DELETE_ITEM : 
        debugger
            let deletedArray = [...anInfo.BasicAnnouncementList.filter(val =>
                val.id === action.removeId ? false : true)] 
            return {
                ...anInfo,
                BasicAnnouncementList : deletedArray,
                ShowAList : deletedArray
            }

        case FIND_TOP_SIMILIAR: 
        let Similiar = action.aSimItem.body.split(" ") 
        Similiar = Similiar.concat(action.aSimItem.title.split(" ")) 
        let resultObj = allComparesResults(anInfo, Similiar, action,  action.aSimItem.id)
           
            console.log(resultObj)
        let resultIntegerArray = Object.keys(resultObj).reduce((acum, val)=> {
                let a = countNeedbleInteger(resultObj[Number(val)]) 
                if(!a)
                return acum
                acum[Number(val)] = a
            return acum
        },[])
 
        let sortedCopy = resultIntegerArray.sort((a,b)=> b - a)
        console.log("sortedCopy",sortedCopy)
        
        let resIndex = []
        for( let i = 0 ; i < sortedCopy.length; i ++){
            resIndex[i] = resultIntegerArray.indexOf(sortedCopy[i]) 
            resultIntegerArray[resultIntegerArray.indexOf(sortedCopy[i]) ] = null
            
        }
        console.log("resIndex",resIndex)
        resIndex = resIndex.filter((val, index, arrayN) => {
            if(index === action.arrayElem){
                return false
            }
            return index > action.topNum  ? false : true})
        console.log("resIndex",resIndex)
        
        let finishUra = anInfo.BasicAnnouncementList.filter((val,index)=>{
            
            return resIndex.includes(index)})
        console.log("finishUra",finishUra)
        
        return {
                ...anInfo,
                MySimiliarArrayIndex : finishUra
            }

        case SET_ARRAY_DETAILS : 
        debugger
        return {
            ...anInfo,
            arrayDetails : action.id
        }
        default:
            return anInfo
        }
}

export const filterByTitle = (input) => ({type : FILTER_BY_TITLE, input})
export const showBase = () => ({type : SHOW_ORIGIN})
export const pushAnn = (formObj) => ({type : PUSH_ANN, formObj})
export const editAItem = (formObj) => ({type : CHANGE_ITEM, formObj})
export const removeItem = (removeId) => ({type : DELETE_ITEM, removeId})
export const getTopSimiliar = (aSimItem, topNum, arrayElem) => ({type : FIND_TOP_SIMILIAR, aSimItem, topNum, arrayElem})
export const hideOtherDetails = (id) => ({type : SET_ARRAY_DETAILS, id})


export default postsInfoReducer


// const countNeedbleIntoObjectWithIndex = (obj) => {
    
//     return Object.keys(obj).reduce((acum, val, noth, arrayName)=>{
        
//         if(!acum[val])
//         acum[val] = Number(0)
//         acum[val] = acum[val] + Number(obj[val])
//         return acum
//     }, {})
// }

const countNeedbleInteger = (obj) => {
    return Object.keys(obj).reduce((acum, val, noth, arrayName)=>{
        acum = acum + Number(obj[val])
        return acum
    }, 0)
}







let allComparesResults = (anInfo,Similiar, action, compareId) => {
    return {
        ...anInfo.BasicAnnouncementList.reduce((acum,item, index) => {
            if (compareId === item.id){
                return acum
            }else{
            let ItemToWords = item.body.split(" ") 
            ItemToWords = ItemToWords.concat(item.title.split(" "))
         
            let objWithOne = Similiar.reduce((Aaccumulator, AcurrentVal) => {

                let objWithArrayElementsAndHowManySimiliar = ItemToWords.reduce((Baccumulator, BcurrentVal) => {
                    if(AcurrentVal.replace(/[^a-zA-ZА-Яа-яЁё]/gi,'').replace(/\s+/gi,', ') === 
                    BcurrentVal.replace(/[^a-zA-ZА-Яа-яЁё]/gi,'').replace(/\s+/gi,', ')){
                        if(!Baccumulator[BcurrentVal])
                        Baccumulator[BcurrentVal] = 0
                        Baccumulator[BcurrentVal] = Baccumulator[BcurrentVal] + 1   
                    }
                   return Baccumulator
                }, Aaccumulator)

                return objWithArrayElementsAndHowManySimiliar
            }, {})

            acum[index] = {...objWithOne}
            return acum}
        },{})
    }
}

