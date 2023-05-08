import ProductItem from './ProductItem';
import classes from './Products.module.css';


const Products = (props) => {
  let products=[
    {
      id:1,
      title:'Test',
       price:6,
       description:"this is a first Product- amazing"
    },
    {
      id:2,
      title:'Test2',
       price:8,
       description:"this is a second Product- amazing"
    }
 
]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item)=>{
          return(

            <ProductItem
              key={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              item={item}
            />
          )
        })}
      </ul>
    </section>
  );
};

export default Products;
