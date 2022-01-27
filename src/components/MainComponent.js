import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import DishDetail from './components/DishdetailComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import { Component } from 'react';

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />        
      </div>
    );
  }
}

export default Main;