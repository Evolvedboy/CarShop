//data api
import cardata from "../../data/cardata";
//component
import Cartlist from '../../Components/template/Cartlist';

const Suv=()=> {
    const SuvCars=cardata.filter(car=>car.category=="suv")
    return (
        <div>
            <Cartlist data={SuvCars} />            
        </div>
    )
}

export default Suv;
