import SearchBar from "../Components/module/SearchBar";
import Category from "../Components/module/Category";
import CarPage from "../Components/template/CarPage";
import cardata from "../data/cardata";
import AllButton from "../Components/module/AllButton";

const Home=()=> {
  const cars=cardata.slice(0,3);

  return (
    <>
      <SearchBar/>
            <Category/>
            <AllButton/>
            <CarPage data={cars}/>
            
    </>
  )
}
export default Home;
