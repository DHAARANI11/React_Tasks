export default function UserProfile({userName,email,location}){
    return(
        <>
          <h4>UserName: {userName}</h4>
          <h4>Email: {email}</h4>
          <h4>Location: {location}</h4>
        </>
    )
}