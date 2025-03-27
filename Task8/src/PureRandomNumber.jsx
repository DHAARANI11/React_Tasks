import { useEffect, useState } from "react";

export default function PureRandomNumber(){
    const [randomNumber, setRandomNumber] = useState(Math.random());

  useEffect(() => {
    setRandomNumber(Math.random());
  }, []);
    return(
        <>
            <p>Random Number: {randomNumber}</p>
        </>
    )
}