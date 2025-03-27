export default function TodayDate(){
    const TodayDate=new Date().toDateString();
    return(
        <>
          <p>Today's date is: {TodayDate}</p>
        </>
    )
}