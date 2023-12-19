import styles from "./Card.module.css";
//icons 
import Location from "../icons/Location";
//router
import { useRouter } from "next/router";
const Card=(props)=> {
    const{id,name,model,year,distance,location,image,price}=props
    return (
        <div className={styles.container}>
            <img src={image} alt={image} className={styles.image}/>            
            <h4 className={styles.title}>{`${name} ${model}`}</h4>
            <p className={styles.detail}>{`${year} . ${distance}Km  `}</p>
            <div className={styles.footer}>
                <p>${price}</p>
                <div className={styles.location}><p>{location}</p></div>
                <Location/>
            </div>
        </div>
    )
}

export default Card;
