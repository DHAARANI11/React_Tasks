export default function Products({products}){
    return(
        <>
        <ul>
    {products.filter(product => product.price < 10).map(product => (
      <li key={product.id}>{product.name} - ${product.price}</li>
    ))}
  </ul>
        </>
    )
}