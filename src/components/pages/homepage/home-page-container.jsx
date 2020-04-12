

import React from 'react';
import HomePage from './home-page';

import { connect } from 'react-redux';
import { delHero} from '../../../redux/homepage-reduser';
// import {sendUpdatePost} from '../../../redux/editpage-reduser';
import preloader from './Ellipsis200.svg'

class HomePageContainerApi extends React.PureComponent {
    render(){
    
    
      
      
      if(!!this.props.heros.length && this.props.heros.length > 0 ){
        return(
          <>
           
            <HomePage heros={this.props.heros}
                            delHero={this.props.delHero} 
                      />
          </>
            
        );
      }else{
       return( 
        <>
          <div style={
              {display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              height: '100vh'}
                      }>
                        <img src={preloader} alt='preloader' />
          </div>
        </>
        );
      } 
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
      
      heros: state.homepage.heros,
      
    }
  }


const HomePageContainer = connect(mapStateToProps,{delHero })(HomePageContainerApi)



export default HomePageContainer