import {getHeroApi, delHeroApi, updateHeroApi, newHeroApi} from '../api';

import {stopSubmit} from 'redux-form';



const IS_DATA_LOAD = 'homepage/IS_DATA_LOAD';
const IS_ERROR = 'homepage/IS_ERROR';

const SET_HERO = 'homepage/SET_HERO';

const UPDATE_HERO = 'homepage/UPDATE_HERO';
const IS_HERO_UPDATE = 'homepage/IS_HERO_UPDATE';
const DEL_HERO = 'homepage/DEL_HERO';
const ADD_HERO = 'homepage/ADD_HERO';




const initState = {
        heros:[],
        isLoad:false,
        isError:{
            error: false,
            message:''
        },
        isHeroUpdate:false
        
    
};

const homepageReduser = (state = initState, action) => {
    switch (action.type) {
       
        case IS_DATA_LOAD:
            return {
                ...state,
                isLoad: action.isDataLoad  
            };
        case IS_HERO_UPDATE:
            return {
                ...state,
                isHeroUpdate: action.isHeroUpdate  
            };
        case IS_ERROR:
            return {
                ...state,
                ...state.isError,
                isLoad: false,
                isError: {error:true, message: action.err}
            };
        case SET_HERO:
            return {
                ...state,
                ...state.heros,
                heros: [...action.heros]
            };
        
        case UPDATE_HERO:{
            let idX = state.heros.findIndex(el=>el.id===action.hero.id)
            
            return {
                ...state,
                ...state.heros,
                heros: [...state.heros.slice(0, idX), action.hero, ...state.heros.slice(idX + 1)]
            }
        }
        case DEL_HERO:{
            let idXDel = state.heros.findIndex(el=>el.id===action.heroId)
            return {
                ...state,
                ...state.heros,
                heros: [...state.heros.slice(0, idXDel), ...state.heros.slice(idXDel + 1)]
            }
        }
        case ADD_HERO:{
            return {
                ...state,
                ...state.heros,
                heros: [...state.heros, action.heroData]
            }
        }
        default:
            return state;
    }
};



export const isDataLoad = (isDataLoad) => ({
    type: IS_DATA_LOAD,
    isDataLoad
})
export const isHeroUpdateAC = (isHeroUpdate) => ({
    type: IS_HERO_UPDATE,
    isHeroUpdate
})
export const isError = (err) => ({

    type: IS_ERROR,
    err
})
export const setHeros = (heros) => ({
    type: SET_HERO,
    heros
})
export const updateHeroAC = (hero) => ({
    type: UPDATE_HERO,
    hero
})
export const delHeroAC = (heroId) => ({
    type: DEL_HERO,
    heroId
})
export const addHeroAC = (heroData) => ({
    type: ADD_HERO,
    heroData
})


export const setIsHeroUpdate = (isHeroUpdate) => async  (dispatch) => {  
        try {   
                dispatch(isHeroUpdateAC(isHeroUpdate))
          } 
        catch(err) {
                
                console.log(err)
          }

}  
export const updateHeroData = (heroData) => async  (dispatch) => {   
        try {
                dispatch(isDataLoad(false));
                let res = await updateHeroApi(heroData)
                dispatch(updateHeroAC(res));
                dispatch(setIsHeroUpdate(true))
                dispatch(isDataLoad(true));
          } 
        catch(err) {
            let action = stopSubmit('editPostForm', {_error:'Something wrong!! Try ealse!!'});
                dispatch(action);
                dispatch(setIsHeroUpdate(true))
                dispatch(isError('Hero data is not UPdated!!!'))
                console.log(err)
                dispatch(isDataLoad(true));
                
          }

}  
export const addHero = (heroData) => async  (dispatch) => {   
        try {
            
                dispatch(isDataLoad(false));
                let res = await newHeroApi(heroData)
                dispatch(addHeroAC(res));
                dispatch(setIsHeroUpdate(true))
                dispatch(isDataLoad(true));
          } 
        catch(err) {
            let action = stopSubmit('editPostForm', {_error:'Something wrong!! Try ealse!!'});
                dispatch(action);
                dispatch(setIsHeroUpdate(true))
                dispatch(isError('New Hero data!!! try else!'))
                console.log(err)
                dispatch(isDataLoad(true));
                
          }

}  
 


export const delHero = (heroId) => async (dispatch)=>{
    
    dispatch(isDataLoad(false));
    
        try{
            await delHeroApi(heroId);
            dispatch(delHeroAC(heroId))
            dispatch(isDataLoad(true))

        }
        catch(err){
            dispatch(isError('Del data!!! Please try agan!'))
            console.log(err)
            dispatch(isDataLoad(true))
            
        }        
    
} 

export const initializeApp = () => async (dispatch) => {

    try{
        let hero = await getHeroApi()
        dispatch(isDataLoad(false));
        dispatch(setHeros(hero))        
        dispatch(isDataLoad(true)) 
                
    }catch(err){
        dispatch(isError('Initialize data!!! Please try reload page!'))
        console.log(err)
    }
        
            
            
    
}

export default homepageReduser