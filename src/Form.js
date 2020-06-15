import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const url = `https://boiling-refuge-66454.herokuapp.com/images/${this.props.id}/comments`;
        const data = new FormData(document.querySelector('.popup__form'));


        const response = await fetch(url, {
            method: 'POST',
            body: data,
        })
    }

    render() {
        return (
            <form enctype="multipart/form-data" className="popup__form" method="post" onSubmit={this.handleSubmit} >
                <input name="Name" type="text" className="popup__input" placeholder="Ваше имя"></input>
                <input name="Comment" type="text" className="popup__input" placeholder="Ваш комментарий" ></input>
                <input type="submit" className="popup__input btn" value="Оставить комментарий"></input>
            </form >
        );
    }
}

export default Form;