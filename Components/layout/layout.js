import styles from "./layout.module.css";
import Link from "next/link";
const layout=({children})=> {
    return (
        <>
            <header className={styles.header}>
                <h2><Link href="/">BOTOCAR</Link></h2>
                <p>Chose an Buy Your Car</p>
            </header>
                <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                <a href="http://Botostart.ir" traget="_blank">Evolvedboy</a> Next.js project &copy;
            </footer>
        </>
        )
}

export default layout;
