import React from 'react';

function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getDate();
    const mounth = "0" + date.getMonth();
    const year = "0" + date.getFullYear();
    return hours + '.' + mounth + '.' + year;
}

class GetPopup extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            popup: []
        };
    }

    componentDidMount() {
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${this.props.id}`)
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
        if (this.state.isLoaded) {
            return (
                <div>
                    <div className="overlay" onClick={this.props.onClick}></div>
                    <div className="gallery__popup popup" >
                        <img className="popup__img" src={this.state.popup.url}></img>
                        <ul className="popup__comments">
                            {this.state.popup.comments.map(item => (
                                <li key={item.id} className="popup__comment comment">
                                    <span className="comment__date">{formatDate(item.date)}</span>
                                    <span className="comment__text">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="popup__close closer" onClick={this.props.onClick}>
                            <span></span>
                            <span></span>
                        </button>
                        <form className="popup__form">
                            <input name="Name" type="text" className="popup__input" placeholder="Ваше имя"></input>
                            <input name="Comment" type="text" className="popup__input" placeholder="Ваш комментарий"></input>
                            <input type="submit" className="popup__input btn" value="Оставить комментарий"></input>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (null);
        }

    }
}


export default GetPopup;
