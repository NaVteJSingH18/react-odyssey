import React from 'react'
import {Bookmark} from 'lucide-react'
import styles from './Wcard.module.css'
const Wcard = (props) => {
  return (
    
    <div className={styles.Wcard}>
        <div className={styles.upper}>
            <img src={props.brandLogo} alt=""/>
      <button >  Save <Bookmark size="12px" strokeWidth={3}  /> </button>
        </div>
        <div className={styles.middle}>
          <div className={styles.mcontent}><h3>
            {props.company}
          </h3>
            <p>{props.datePosted}</p></div>
            
            <h2>{props.post}</h2>
            <div className={styles.btn}>
              <button >{props.tag1}</button>
              <button >{props.tag2}</button>
            </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomleft}  ><h3>{props.pay}</h3>
            <p>{props.location}</p></div>
            
            <button >
Apply now
            </button>
        </div>
        </div>


  )
}

export default Wcard
