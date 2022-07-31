import ProductItem from './ProductItem';
import classes from './Products.module.css';
const dummydata=[
  {title:'Product1',
  price:12,
  description:'This is a first product - amazing!'},
  {title:'Product2',
  price:35,
  description:'This is a second product - amazing!'},
  {title:'Product3',
  price:47,
  description:'This is a third product - amazing!'},
  {title:'Product4',
  price:102,
  description:'This is a forth product - amazing!'},
];
const Products = (props) => {
 const productlist=dummydata.map(product=><ProductItem
  title={product.title}
  price={product.price}
  description={product.description}
  key={Math.random().toString()}
/>)
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productlist}
      </ul>
    </section>
  );
};

export default Products;
