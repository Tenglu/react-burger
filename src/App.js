import React, { Component } from 'react';
import './App.css';
import Layout from './component/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder';
class App extends Component {
  render (){
    return (
      <Layout>
        <BurgerBuilder />
      </Layout>
    );
  }
  
}

export default App;
