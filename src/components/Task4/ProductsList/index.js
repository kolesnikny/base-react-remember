import './ProductsList.css';

const ProductsList = (props) => {
    const ingridients = props.products.map((ingridient) => (
        <li>{ingridient}</li>
    ));

    return (
        <>
            <h3>Ингредиенты для пиццы</h3>
            <ul>{ingridients}</ul>
        </>
    );
};

export default ProductsList;
