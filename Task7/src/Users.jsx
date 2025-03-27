export default function Users({users}){
    return(
        <>
            <ul>
            {users.map(user => (
            <li key={user.id}>{user.name} ({user.email})</li>
            ))}
        </ul>
        </>
    )
}