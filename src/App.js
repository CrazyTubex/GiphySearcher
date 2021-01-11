import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { queryByTestId } from '@testing-library/react';
import FetchData from './components/FetchData.js'
import ReturnGifs from './components/ReturnGifs'


function App() {

  const [search,Setsearch] = useState("")
  const [query,Setquery] = useState("")
  const [results,Setresults] = useState([])
  const [numOfImages,setnumOfImages] = useState([])
  const [index,Setindex] = useState(0)
  const [advanced,setAdvanced] = useState(false)
  const [width,Setwidth] = useState (300)
  const [height,Setheight] = useState (300)

  useEffect(() =>{
    async function getData(){
      if(query !== ''){
        const data = await FetchData(query,numOfImages)
        Setresults(() => data)
        Setindex((prevIndex) => prevIndex + 1)
      }
    }
    getData()
  },[query, numOfImages])
  return (
    <div>
      <center>
        <h1>Search for Gifs !</h1>
      </center>
        <br />
        <form>
          <label>What GIFs to look for ?</label>
          <input type="text"onChange={((e) => Setsearch(e.target.value))}></input>
          <br />
          <label>How many images to return ?</label>
          <input type="number"  onChange={((e) => setnumOfImages(e.target.value))}></input>
          <br/>
          <input type="checkbox" onChange={() => setAdvanced((prevAdvanced) => !prevAdvanced)} ></input>
          <label>Set advanced options</label>
          <br/>
          {advanced === true ?<div><label>What width of images do you want</label><input type="number"  onChange={((e) => Setwidth(e.target.value))}></input><br /><label>What height of images do you want</label><input type="number" default={height} onChange={((e) => Setheight(e.target.value))}></input></div> : null}      
          <br/>
          <input type="button" value="Submit !" onClick={() => Setquery(search)}></input>
        </form>
      <br />
      <center>
      <ReturnGifs results={results} width={width} height={height}/>
      </center>
    </div>
  )
}

export default App;
