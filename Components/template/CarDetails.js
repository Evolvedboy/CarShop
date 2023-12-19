 import styles from "./CardDetails.module.css";
//icon
 import Company from "../icons/Company";
 import Location from "../icons/Location";
 import Model from "../icons/Model";
 import Money from "../icons/Money";
 import Road from "../icons/Road";
 import Calender from "../icons/Calender";
const cardDetails=(props)=> {
    const{id,name,model,year,distance,location,image,price,descriptition}=props;

    return (
/* eslint-disable @next/next/no-img-element */

<div className={styles.container}>

      <img src={image} alt="image " className={styles.image} />

            <h3 className={styles.header}>{name} {model}</h3>
            <div className={styles.details}>
                <div>
                    <Company/>
                    <p>Company</p>
                    <span>{name}</span>
                </div>
                <div>
                    <Model/>
                    <p>Model</p>
                    <span>{Model}</span>
                </div>
                <div>
                    <Calender/>
                    <p>First registration</p>
                    <span>{year}</span>
                </div>
                <div>
                    <Road/>
                    <p>Km driven</p>
                    <span>{distance}</span>
                </div>
            </div>
            <div className={styles.details}>
                <div>
                    <Location/>
                    <p>kms driven</p>
                    <span>{location}</span>
                </div>
                <div className={styles.details}>
                <p className={styles.descriptitionTitle}>Extra Information</p>
                <p className={styles.descriptitionText}>{descriptition}</p>
                </div>
                <div className={styles.details}>
                    <div className={styles.price}>
                        <Money/>
                        <p>Price:</p>
                        <span>{price}</span>
                    </div>
                </div>
                    <button className={styles.button}>Buy</button>
            </div>
        </div>
        
    )
}

export default cardDetails
