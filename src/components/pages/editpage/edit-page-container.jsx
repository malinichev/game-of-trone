
import React from 'react';
import EditPageWhithFormRedux from './edit-page';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import {updateHeroData, setIsHeroUpdate,addHero} from '../../../redux/homepage-reduser';

class EditPageContainerApi extends React.Component {
    componentWillUnmount(){
        if(this.props.isHeroUpdate===true){
            this.props.setIsHeroUpdate(false)
        }
    }
    render(){
        if(this.props.isHeroUpdate) {
            return <Redirect to={'/'} />
        }

        //если не передаем в урле ИД то создается новый персонаж
        let herosToEdit = {id:this.props.heros.length+1};
        let editHeroOnSubmit = (e) =>{      
            this.props.addHero(e)
        }
        //если в урле находим ИД то редактируем данного персонажа
        if(this.props.heroId){
            herosToEdit = this.props.heros.find(el =>  el.id.toString() === this.props.heroId.toString())
            editHeroOnSubmit = (e) =>{      
                this.props.updateHeroData(e)
            }
        }
      
        return(
            <>
                <EditPageWhithFormRedux herosToEdit={herosToEdit}  editHeroOnSubmit={editHeroOnSubmit}/>
            </>
        );
    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
        heros: state.homepage.heros,
        isHeroUpdate: state.homepage.isHeroUpdate,
    }
}


let EditPageContainer = connect(mapStateToProps,{updateHeroData, addHero,setIsHeroUpdate})(EditPageContainerApi)



export default EditPageContainer