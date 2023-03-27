import { useState } from "react"
import bird from "../svg/bird.svg"
import cat from "../svg/cat.svg"
import cow from "../svg/cow.svg"
import dog from "../svg/dog.svg"
import gator from "../svg/gator.svg"
import horse from "../svg/horse.svg"
import heart from "../svg/heart.svg"
import "./AnimalShow.css"

function AnimalShow({type}) {

  const animalmap={
    //bird:bird but array destructing in js gives us this feature of directly using bird as both the key and value has same identifier.
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
  }

const [click,setClick]=useState(0);
 const onContainerClick =()=>{
  setClick(click+1)
 }


  return ( 
<div className="animalContainer" onClick={onContainerClick}> 
<img className="animal" alt="animal" src={animalmap[type]}/>
<img className="heart" alt="heart" src={heart} style={{width: 10+click*10+"px"}} /></div>
  )
  }

export default AnimalShow