import coffeeImg from '../assets/images/coffee.jpg';

function Coffee() {
    return (
        <div className="product-page">
            <img src={coffeeImg} alt='Coffee' className='product-image' />
            <h1>Coffee</h1>
            <p>Our coffee is fresh, natural, and produced on our farm.</p>

            <div className='contact-links'>
                <a href='https://wa.me/573117028881' target='_blank'>WhatsApp: +57 311 702 8881</a>

                <a href='mailto:el_paraiso_hass@hotmail.com'>Email: el_paraiso_hass@hotmail.com</a>
            </div>
        </div>
    );
}

export default Coffee;


