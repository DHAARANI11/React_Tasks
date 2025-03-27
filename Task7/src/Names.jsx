export default function Names({names}){
    return(
        <>
        <h1>Names</h1>
        <u1>
            {names.map((name,index)=>(<li key={index}>{name}</li>))}
        </u1>
        </>
    )
}