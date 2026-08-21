function Book({ title, price, image }) {
    return (
        <div className="card">
            <img
                src={image}
                alt={title}
            />

            <h2>{title}</h2>

            <h3>Price: ₹ {price}</h3>

            <button>Add To Cart</button>
        </div>
    );
}

export default Book;