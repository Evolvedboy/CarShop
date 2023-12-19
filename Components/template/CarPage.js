import Link from "next/link";
import Card from "../module/Card";
import styles from "./CarPage.module.css";

function CarPage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Link key={car.id} href={`/cars/${car.id}`}>
        <Card  {...car} />
        </Link>
      ))}
    </div>
  );
}

export default CarPage;
