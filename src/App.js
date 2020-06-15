import React from 'react';
import './App.css';
import GetPhotos from './GetPhotos';


class App extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="app" >
        <h1 className="app__title">test app</h1>
        <GetPhotos
        />
      </div>
    );
  }
}

export default App;
