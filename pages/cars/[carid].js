import {useRouter} from "next/router";
import carsdata from "../../data/cardata";
import CardDetails from "../../Components/template/CarDetails";
const Car=()=> {
    const router=useRouter();
    const{carid}=router.query;
    const cardDetails=carsdata[carid-1];
    return (
        <div>
        <CardDetails {...cardDetails}/>
        </div>
    )
}

export default Car;
