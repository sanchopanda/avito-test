import React from 'react';
import GetPopup from './GetPopup';

function Image(props) {
    return (
        <img src={props.url} className="gallery__img" onClick={props.onClick}></img>
    );
}

class GetPhotos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            isPopup: false,
            popupId: null
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


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
                <div className="container">
                    <ul className="app__gallery gallery">
                        {items.map(item => (
                            <li key={item.id} className="gallery__item">
                                <Image
                                    url={item.url}
                                    onClick={this.handleClick.bind(this, item.id)}
                                />
                                {this.state.isPopup ? <GetPopup
                                    id={this.state.popupId}
                                    onClick={this.handleClick.bind(this)}
                                /> : null}
                            </li>
                        ))}
                    </ul>
                </div>

            );
        }
    }

    handleClick(id) {
        this.setState({
            isPopup: !this.state.isPopup,
            popupId: this.state.popupId ? null : id
        });
    }


}

export default GetPhotos;
