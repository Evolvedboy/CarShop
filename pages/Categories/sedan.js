import Sedan from '../../Components/icons/Sedan'
//data api
 import cardata from "../../data/cardata";
 import Cartlist from '../../Components/template/Cartlist';
const Sedaan=()=> {
    const SedanCars=cardata.filter(car=>car.category=="sedan")
    return (
        <div>
        <Cartlist data={SedanCars} />            
        </div>
    )
}

export default Sedaan;
