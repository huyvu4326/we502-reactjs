const ProductPage = (props) => {
    const removeProduct = (id) => {
        props.onRemove(id)
    }
    return (
        <div>
            {props.products.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <button onClick={() => removeProduct(item.id)}>Remove</button>
                    </div>
                );
            })}
        </div>
    );
};
export default ProductPage;