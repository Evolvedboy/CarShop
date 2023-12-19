import { useState } from "react";
import {useRouter} from "next/router";
import styles from "./Searchbar.module.css";
const SearchBar=()=> {
    const router=useRouter();
    const [min,Setmin]=useState("");
    const [max,Setmax]=useState("");
    console.log(router);
    const SearchHandler=()=>{
    if(min && max){
        router.push(`/filter/${min}/${max}`)
        }else{
            alert("Please Enter the minimum and maximum price!");
        }        
    }
    return (
        <div className={styles.container}>
            <div> 

                <input placeholder="Inter min-price" value={min} onChange={(e)=>Setmin(e.target.value)}></input>
                <input placeholder="Inter max-price" value={max} onChange={(e)=>Setmax(e.target.value)}></input>
                
            </div>
            <button onClick={SearchHandler} >Search</button>
        </div>
    )
}

export default SearchBar;
