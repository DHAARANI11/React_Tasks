import AgeCheck from "./AgeCheck"
import Feedback from "./Feedback"
import Loading from "./Loading"
import Notification from "./Notification"
import UserState from "./UserState"
export default function App(){
  return(
    <>
      <UserState isOnline={false}/>
      <UserState isOnline={true}/>
      <AgeCheck age={20}/>
      <AgeCheck age={17}/>
      <Loading isLoading={true} content={"Welcome to this page"}/>
      <Loading isLoading={false} content={"Welcome to this page"}/>
      <Notification message={"hello"}/>
      <Feedback type="positive" feedback="Congrats"/>

    </>
  )
}