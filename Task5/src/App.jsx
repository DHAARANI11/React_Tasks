import Button from "./Button";
import Model from "./Model";
import Movie from "./Movie";
import UserProfile from "./UserProfile";

export default function App(){
  return(
    <>
     <Movie title={"Frozen"} year={"2000"} rating={"5"}/>
     <Button label={"Click me"}/>
     <UserProfile userName={"Dhaarani"} email={"dhaaranidhaaru0411@gmail.com"} location={"Coimbatore"}/>
     <Model title={"Frozen"} content={"Elsa and Anna"}/>
    </>
  )
}