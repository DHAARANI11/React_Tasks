import { useEffect, useState } from "react";

export default function FetchData(){
    const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then(response => response.json())
      .then(json => setData(json));
  }, []);
    return(
        <>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}