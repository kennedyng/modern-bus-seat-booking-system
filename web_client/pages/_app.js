import "../styles/global.scss";
import "../styles/main.scss";
import { useEffect } from "react";
import RootLayout from "../components/layout/RootLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-calendar/dist/Calendar.css";
import useSWR, { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";

const fetcher = (url, token) =>
  axios
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <SWRConfig value={{ fetcher }}>
      <SessionProvider session={session}>
        <RootLayout>
          <ToastContainer icon={false} />
          <Component {...pageProps} />
        </RootLayout>
      </SessionProvider>
    </SWRConfig>
  );
}

export default MyApp;
