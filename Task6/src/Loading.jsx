export default function Loading({isLoading,content}){
    return(
        <>
            <p>{isLoading?"Loading.....":content}</p>
        </>
    )
}