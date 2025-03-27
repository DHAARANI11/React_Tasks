export default function Feedback({type,feedback}){
    return(
        <>
            <p style={{color:type==="positive"?"green":"red"}}>{feedback}</p>
        </>
    )
}