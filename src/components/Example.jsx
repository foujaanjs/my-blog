import React ,{ useEffect, useState } from 'react'

const Example = () => {
    const [title,settitle] = useState("DOCUMWENT");

  


//    useEffect(() => {
    // runs at every render
//    })

//    useEffect(() => {
//     // runs at first render only
//    }, [])

   useEffect(() => {
    document.title = title;
   }, [title])

  
  return (
    <main>
        <input type='text' onChange={(e)=> settitle(e.target.value)}></input>
        <button onClick = {(e) => settitle(e.target.value)}> change </button>
    </main>
  )
}

export default Example