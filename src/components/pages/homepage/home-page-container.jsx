import React from 'react';
import HomePage from './home-page';
import { connect } from 'react-redux';
import { delHero } from '../../../redux/homepage-reduser';
import preloader from './Ellipsis200.svg'
import s from './home-page-container.module.css'

class HomePageContainerApi extends React.PureComponent {
  render() {
    if (!!this.props.heros.length && this.props.heros.length > 0) {
      return (
        <>
          <HomePage
            heros={this.props.heros}
            delHero={this.props.delHero}
          />
        </>
      );
    } else {
      return (
        <>
          <div className={s.preloader}>
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


const HomePageContainer = connect(mapStateToProps, { delHero })(HomePageContainerApi)



export default HomePageContainer