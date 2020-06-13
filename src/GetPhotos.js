import React from 'react';

function Image(props) {
    return (
        <img src={props.url} onClick={props.onClick}></img>
    );
}

function GetPhotos(props) {

    const { error, isLoaded, items } = props.state;
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <ul className="app__gallery gallery">
                {items.map(item => (
                    <li key={item.id} className="gallery__item">
                        <Image
                            url={item.url}
                            onClick={() => this.props.onClick()}
                        />

                    </li>
                ))}
            </ul>
        );
    }

}

export default GetPhotos;
