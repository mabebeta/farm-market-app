import { useState } from "react";

function Admin() {
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    if (!isAdmin) {
        return <h2>Access denied</h2>;
    }
    
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newProduct = {
            name,
            category,
            description
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/api/products/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            });

            const data = await response.json();
            setMessage(data.message);

            setName('');
            setCategory('');
            setDescription('');
        } catch (error) {
            console.log(error);
            setMessage('Error adding product');
        }
    };

    return (
        <div className="product-page">
            <h1>Admin Panel</h1>

            <form className="admin-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Product name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select category</option>
                    <option value="honey">Honey</option>
                    <option value="coffee">Coffee</option>
                    <option value="avocados">Avocados</option>
                </select>

                <textarea 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />

                <button type="submit">Add Product</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
}

export default Admin;
