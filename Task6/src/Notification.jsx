export default function Notification({message}){
    return(
        <>
           <p>{message===null?null:message}</p>
        </>
    )
}