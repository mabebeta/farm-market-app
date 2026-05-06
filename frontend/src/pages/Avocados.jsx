import avocadosImg from '../assets/images/avocados.jpg';

function Avocados() {
    return (
        <div className="product-page">
            <img src={avocadosImg} alt='Avocados' className='product-image' />
            <h1>Avocados</h1>
            <p>Fresh Hass avocados grown on our farm.</p>

            <div className='contact-links'>
                <a href='https://wa.me/573117028881' target='_blank'>WhatsApp: +57 311 702 8881</a>

                <a href='mailto:el_paraiso_hass@hotmail.com'>Email: el_paraiso_hass@hotmail.com</a>
            </div>
        </div>
    );
}

export default Avocados;

