import React, { Component } from 'react';
import { connect } from 'react-refetch'

import {
  Search,
  SelectedList,
  Spinner
}
from './components'

import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      list: [],
      searchValue: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    const { champFetch } = nextProps; 

    if (champFetch.fulfilled) {
      this.setState({
        list: champFetch.value
      });
    }
  }
  

  /* auto binding */
  onChange = (e) => {
    const searchValue = e.target.value
    this.setState({ searchValue })
  }

  render() {
    const { champFetch } = this.props;
    const { searchValue, list } = this.state

    return (
      <div className="App">
        <Search searchValue={searchValue} onChange={this.onChange} />
        {champFetch.pending ? <Spinner /> : <SelectedList searchValue={searchValue} list={list} />}
      </div>
    );
  }
}

export default connect(props => ({
  champFetch: 'http://quakechampselect.com/api/champs'
}))(App)
