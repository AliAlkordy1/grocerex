import './searchpage.css';
import useStore from './../store.js';
import DataOfJson from './../data.json';

export default function SearchPage() {
    const { searchQuery } = useStore();

    
    const filteredData = DataOfJson.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="product-container">
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <div key={item.id} className="product-card">
                        <img src={item.img} alt={item.name} className="card-img" />
                        <h2>{item.name}</h2>
                        {item.discountPrice&& <p id="old-price">old price : {item.discountPrice}</p> }

                        
                        <p>{item.price}</p>
                        <button>Add to Cart</button>
                    </div>
                    ))
                ) : (
                    <p>No results found for {searchQuery}</p>
                )}
            </div>
        </>
    );
}
