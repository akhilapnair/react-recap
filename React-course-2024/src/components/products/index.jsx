import ProductItem from "./Components/product-item";

const ProductList = ({ listOfProduct, name, city }) => {
  const flag =false;

  return (

    <div>
      <h3>E-Commerce Project</h3>
      {
        flag?
        <h3>
          Name is {name} from {city}
        </h3>:
        <h3>
        Name is {name} from Sweden
      </h3>
      }
      
      <ul>
        {
        listOfProduct.map((e, i) => (
          <ProductItem singleItem={e} key={i} />
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
