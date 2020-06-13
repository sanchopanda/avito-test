import React from 'react';
import './App.css';
import GetPhotos from './GetPhotos';


class GetPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      popup: []
    };
  }

  componentDidMount() {
    fetch("https://boiling-refuge-66454.herokuapp.com/images/239")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            popup: result
          });
          console.log(this.state.popup);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
    /*/const { error, isLoaded, popup } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else */
    if (this.state.isLoaded) {
      return (
        <div className="popup" >
          <img className="popup__img" src={this.state.popup.url}></img>
          <ul className="comments"></ul>
        </div>

      )
    } else {
      return (null);
    }

  }
}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://boiling-refuge-66454.herokuapp.com/images")
      .then(res => res.json())
      .then(
        (result) => {

          this.setState({
            isLoaded: true,
            items: result
          });
          console.log(this.state.items);
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleClick() {

  }


  render() {
    return (
      <div className="app" >
        <h1 className="app__title">test app</h1>
        <GetPhotos
          state={this.state}
          onClick={this}
        />
        <GetPopup />
      </div>
    );
  }

}

export default App;
