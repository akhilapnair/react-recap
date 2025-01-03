
import styles from "./product-item.module.css";

function ButtonComponent() {
  console.log(styles.buttonStyle);
  
  return <button className="{styles.buttonStyle}">Click</button>;
}

function ProductItem({singleItem,key}) {
  return (
    <div
      style={{ padding: "20px", border: "2px solid red", marginBottom: "12px" }}
      key={key}
    >
      <p> {singleItem} </p>
      <ButtonComponent />
    </div>
  );
}

export default ProductItem;
