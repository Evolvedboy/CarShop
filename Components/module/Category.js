//style
import style from "./Category.module.css";
//icons
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Hackback from "../icons/Hatchback";
import Sport from "../icons/Sport";

import Link from "next/link";
const Category=()=> {
    return (
        <div className={style.container}>
        <Link href="/Categories/sedan">
        <div>
            <span>Sedan</span>
            <Sedan/>
        </div>
        </Link>
        <Link href="/Categories/suv">
        <div>
            <span>SUV</span>
            <Suv/>
        </div>
        </Link>
        <Link href="/Categories/hatchback">

        <div>
            <span>Hatchback</span>
            <Hackback/>
        </div>
        </Link>
        <Link href="/Categories/sport">
        <div>
            <span>Sport cars</span>
            <Sport/>
        </div>
        </Link>
        </div>
    )
}

export default Category;
