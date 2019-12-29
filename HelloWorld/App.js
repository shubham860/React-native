import React, { Component } from 'react';
import Blinker from './components/Blinker';
import Styling from './components/Styling';
import NormalButton from './components/NormalButton'
import TouchableButtons from './components/TouchableButtons';
import Scrollview from './components/Scrollview';
import Flatlist from './components/Flatlist';
import SectionList from './components/SectionList';
class App extends Component {

    render() {
    return (
       <SectionList/>
    );
  }
}


export default App;
