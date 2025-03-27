export default function AgeCheck({age}){
    return(
        <>
            <p>Age: {age>18?"Adult":"Minor"}</p>
        </>
    )
}