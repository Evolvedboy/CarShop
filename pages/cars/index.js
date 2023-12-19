import cardata from "../../data/cardata";
import CarPage from "../../Components/template/CarPage";
import Category from "../../Components/module/Category";
import SearchBar from "../../Components/module/SearchBar";
const index=()=> {
    return (
        <div>
            <SearchBar/>
            <Category/>
            <CarPage data={cardata}/>
            
        </div>
    )
}

export default index;
