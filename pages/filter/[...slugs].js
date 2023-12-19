import { useRouter } from "next/router";
import CarsList from "../../Components/template/Cartlist";
import cardata from "../../data/cardata";

function FilteredCars() {
  const router = useRouter();
  const [min, max] = router.query.slugs || [];

  const filteredData = cardata.filter(
    (item) => item.price > min && item.price < max
  );
  console.log(filteredData);

  if (!filteredData.length) return <h3>NotFound</h3>;

  return <CarsList data={filteredData} />;


}

export default FilteredCars;
