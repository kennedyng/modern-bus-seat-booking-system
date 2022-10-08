import '../styles/global.scss'
import '../styles/main.scss'
import { useEffect } from "react";
import RootLayout from '../components/layout/RootLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-calendar/dist/Calendar.css';
import useSWR, { SWRConfig } from 'swr'
import axios from "axios";
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])





  return (
    <SWRConfig value={{
        fetcher: (url) => axios.get(url).then(res => res.data)
        }}>
      <RootLayout>
        <ToastContainer icon={false}/>
        <Component {...pageProps} />
      </RootLayout>
    </SWRConfig>
  )
}

export default MyApp
