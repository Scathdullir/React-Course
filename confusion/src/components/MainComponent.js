import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
        //when initialised, none of the dishes are selected by default
    };
  }

  render() {

    const HomePage = () => {
      return(
        // selecting one featured item using filter
          <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
      );
    }

    return (
    <div>
      <Header />
       <Switch>
         <Route path="/home" component={HomePage} />
         {/* passing props to another component: */}
         <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
         <Route exact path='/contactus' component={Contact} />
          {/* if a page does not exist, redirect to home: */}
          <Redirect to="/home" />
       </Switch>
      <Footer />
      </div>
    );
  }
}

export default Main;
