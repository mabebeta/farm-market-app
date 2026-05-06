import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import honeyImg from '../assets/images/honey.jpg';
import coffeeImg from '../assets/images/coffee.jpg';
import avocadosImg from '../assets/images/avocados.jpg';

function Home() {
    const [products, setProducts] = useState([]);
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/products/')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await fetch(`http://127.0.0.1:5000/api/products/${id}`, {
                method: 'DELETE'
            });

            setProducts(prev => prev.filter(p => p.id !== id));
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <div className="home">
            <h1>Farm Market</h1>
            <p>Welcome to El Paraiso Hass. We produce honey, coffee and avocados.</p>

            <div className='cards'>
                {products.map(product => (
                    <div key={product.id} className='card'>
                        <Link to={`/${product.category}`}>
                            <img 
                                src={
                                    product.category === 'avocados'
                                    ? avocadosImg
                                    : product.category === 'coffee'
                                    ? coffeeImg
                                    : honeyImg
                                }
                                alt={product.name}
                            />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                        </Link>

                        {isAdmin && (
                            <button
                                className='delete-btn'
                                onClick={() => handleDelete(product.id)}
                            >
                                Delete
                            </button>
                        )}
                    </div>
                ))}
            </div>

            <section className='about-section'>
                <h2>Our Story</h2>

                <p className='about-text'>
                    We are a proud Colombian, family-owned farm based in San Vicente de Ferrer, Antioquia.
                    Our mission is to produce high-quality, 100% organic products directly from our land.
                    We grow, harvest, and care for everything ourselves - including raising our own bees.
                    Each product comes from a specialized region in Antioquia: our Raw Honey is produced in San Carlos,
                    our Coffee is grown in Fredonia, and our Hass Avocados are cultivated in San Vicente,
                    ensuring the best quality from each area of Antioquia. 
                </p>

                <div className='about-grid'>
                    <div className='about-card'>
                        <h3>Honey - San Carlos</h3>
                        <p>
                            Our raw honey is produced in San Carlos, Antioquia, where our bees thrive
                            in a natural, untouched environment. 
                        </p>
                    </div>

                    <div className='about-card'>
                        <h3>Coffee - Fredonia</h3>
                        <p>
                            Our coffee is grown in Fredonia, known for its rich soil and ideal climate
                            for premium Colombian coffee. 
                        </p>
                    </div>

                    <div className='about-card'>
                        <h3>Avocados - San Vicente</h3>
                        <p>
                            Our Hass avocados are cultivated in San Vicente, delivering fresh, organic
                            quality straight from our home base.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;

