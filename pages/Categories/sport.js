
//data api
import cardata from "../../data/cardata";
//component
import Cartlist from '../../Components/template/Cartlist';
const Sport=()=> {
    const SportCars=cardata.filter(car=>car.category=="sport")

    return (
        <div>
            <Cartlist data={SportCars} />            
        </div>
    )
}

export default Sport;
