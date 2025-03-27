export default function ShoppingCart({items}){
    return(
        <>
        <ul>
    {items.map(item => (
      <li key={item.id}>{item.name} - ${item.price}</li>
    ))}
  </ul>
        </>
    )
}