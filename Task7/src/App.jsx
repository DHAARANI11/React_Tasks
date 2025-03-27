import Names from "./Names";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import Users from "./Users";

export default function App(){
  const users=["Dhaarani","Dharshini"];
  const products = [
    { id: 1, name: "Pencil", price: 2 },
    { id: 2, name: "Notebook", price: 12 },
    { id: 3, name: "Eraser", price: 1 },
  ];
  const userDetails = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ];
  const items = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 },
  ];
  return(
    <>
      <Names names={users}/>
      <Products products={products}/>
      <Users users={userDetails}/>
      <ShoppingCart items={items}/>
    </>
  )
}