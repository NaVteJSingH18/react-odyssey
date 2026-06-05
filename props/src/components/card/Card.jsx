import React from 'react'
import styles from './card.module.css'
const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.img}/>
      <h1 >{props.title}</h1>
      <p>{props.desc}</p>
      <button>{props.inside}</button> 
    </div>
  )
}

export default Card
