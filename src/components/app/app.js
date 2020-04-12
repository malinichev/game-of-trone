import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {initializeApp} from '../../redux/homepage-reduser';



import { HashRouter, Route, Switch } from 'react-router-dom';
import EditPageContainer from '../pages/editpage';
import HomePageContainer from '../pages/homepage';
import NavBar from '../navbar';
import Warning from '../warning';
import 'bootstrap/dist/css/bootstrap.min.css';









const App =  (props) => {
  
  useEffect(() => {
    props.initializeApp()
   
    // eslint-disable-next-line
  }, []);
  
  
        
  return (
    <HashRouter>
      <NavBar isDataLoad={props.isDataLoad}/>
          <Warning isError={props.isError}/>
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            return (            
              <HomePageContainer/>
              );
          }}
           />
        
        <Route
          path="/edit/:heroId?"
          
          render={({match}) => {
            const {heroId} = match.params;
            
            return <EditPageContainer heroId={heroId}/>
          }}
          />
      </Switch>
    
    </HashRouter>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    isDataLoad: state.homepage.isLoad,
    isError: state.homepage.isError
  }
}


export default connect(mapStateToProps,{initializeApp})(App)