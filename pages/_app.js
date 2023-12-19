import '../styles/globals.css'
//component
import Layout from '../Components/layout/layout';
export default function App({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps}/>
  </Layout>
  );
}
