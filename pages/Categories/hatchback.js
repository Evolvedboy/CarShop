// data api
import Cartlist from "../../Components/template/Cartlist";
import cardata from "../../data/cardata";

const Hackback=()=> {
    const hatchbackCars=cardata.filter(car=>car.category=="hatchback")
    console.log(hatchbackCars);
    return (
            <Cartlist data={hatchbackCars}/>
    )
}

export default Hackback
