
import style  from "../template/Cartlist.module.css";
import {useRouter} from "next/router";
//component
import Card from "../module/Card";
//icon
import Back from "../icons/Back";
import Link from "next/link";
const Cartlist=({data})=> {
    const router=useRouter();
    const backHandler=()=>{
        router.back();
    }
    return (
        <div className={style.container}> 
        <div className={style.back} onClick={backHandler}>
            <Back/>
             <p>Back</p>
        </div>
        <div className={style.cards}>
            {data.map(item=><Link key={item.id} href={`/cars/${item.id}`}> <Card  {...item}/></Link>)}
        </div>
        </div>
    )
}

export default Cartlist
