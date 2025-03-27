export default function App(){
  return(
    <>
      <h2>Pure Random Number</h2>
      <PureRandomNumber />
      
      <h2>Clock</h2>
      <Clock />
      
      <h2>Profile Picture</h2>
      <ProfilePic userId={1} />
      
      <h2>Fetched Data</h2>
      <FetchData />
    </>
  )
}