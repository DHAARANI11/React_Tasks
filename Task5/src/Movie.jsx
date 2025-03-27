export default function Movie({title,year,rating="Not Rated"}){
    return(
        <>
           <h1>Movie Name: {title}</h1>
           <h2>Year: {year}</h2>
           <p>Rating: {rating}</p>
        </>
    )
}