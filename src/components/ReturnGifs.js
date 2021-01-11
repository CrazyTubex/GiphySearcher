import React from 'react'

function ReturnGifs(results,width,height){
    console.log(results)


    if(results.results.data !== undefined){
    return (
      results.results.data.map(item => <video autoPlay loop width={results.width} height={results.height} src={item.images.preview.mp4} key={item}></video>) 
    )}else{
      return(
        <h1>Please input something !</h1>
      )
    }
  
}

export default ReturnGifs