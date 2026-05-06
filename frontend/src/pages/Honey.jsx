import honeyImg from '../assets/images/honey.jpg';

function Honey() {
    return (
        <div className="product-page">
            <img src={honeyImg} alt='Honey' className='product-image' />
            <h1>Honey</h1>
            <p>Our honey is raw, natural, and fresh from the farm.</p>

            <div className='contact-links'>
                <a href='https://wa.me/573117028881' target='_blank'>WhatsApp: +57 311 702 8881</a>

                <a href='mailto:el_paraiso_hass@hotmail.com'>Email: el_paraiso_hass@hotmail.com</a>
            </div>
        </div>
    );
}

export default Honey;

