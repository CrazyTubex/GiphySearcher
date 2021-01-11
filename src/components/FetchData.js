import react from 'react'

async function FetchData(query,numOfImages){
    try{
      const search = query
      let url = 'https://api.giphy.com/v1/gifs/search?api_key=61y6QTjRYFfZEvtKWd4qfL0gn6ymbSzv&q='+query+'&limit='+numOfImages+'&offset=0&rating=g&lang=en'
      const response = await fetch(url)
      const jsonData = await response.json();
    //  console.log(jsonData)
      return jsonData
    }
    catch(error){
      console.log(error)
    }
}

export default FetchData