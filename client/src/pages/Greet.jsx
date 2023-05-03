import React from 'react';
import mainImg from '../static/main-photo.jpg';

const Greet = () => {
    return (
        <div className='container-fluid p-5 main-article d-md-flex justify-content-between'>
            <div className='align-self-center'>
                Добро пожаловать на наш уникальный веб-аукцион – место, где вы можете купить абсолютно все, что вам захочется! На нашем сайте вы найдете тысячи лотов различной категории: от редких коллекционных предметов до бытовой техники и повседневных товаров.
            </div>
            <div>
                <img className='img-fluid mt-4' src={mainImg} alt={'MainPhoto'}/>
            </div>
        </div>
    );
};

export default Greet;