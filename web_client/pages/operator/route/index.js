import React from "react";
import RouteCard from "../../../components/parts/RouteCard";
import axios from "axios";
import { getSession } from "next-auth/react";
import useToken from "../../../hooks/useToken";
import useSWR from "swr";
import LoadingPage from "../../../components/LoadingPage";
import { Pagination } from "@mui/material";
import Link from "next/link";

function Route({ initialData }) {
  const [page, setPage] = React.useState(1);
  const handleChange = async (event, value) => {
    setPage(value);
  };

  const token = useToken();

  const { data, error } = useSWR(
    token
      ? [
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/route/view/all?page=${page}`,
          token,
        ]
      : null,
    {
      initialData: initialData,
      revalidateOnMount: true,
    }
  );

  if (!data && !error) {
    return <LoadingPage />;
  }
  return (
    <div className="container">
      <div className="my-4">
        <h4 className="text-muted text-center">Route Management</h4>
        <p className="text-muted text-center">create update the route</p>

        <div className="d-flex justify-content-center">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <Link href="/operator">
              <a className="nav-link">
                <button type="button" className="rounded-0 btn btn-dark">
                  Management
                </button>
              </a>
            </Link>
            <Link href="/operator/route/create">
              <a className="nav-link">
                <button type="button" className="rounded-0 btn btn-dark">
                  Add New Route
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <div className="row g-2">
          {data != undefined &&
            data.data.map((routeData) => (
              <div className="col-md-6" key={routeData.id}>
                <RouteCard data={routeData} />
              </div>
            ))}
        </div>
      </div>

      <div className="d-flex justify-content-center py-4">
        <Pagination
          count={data ? data.totalPages : 0}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Route;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session) {
    const config = {
      headers: {
        Authorization: "Bearer " + session.userData.token,
      },
    };

    const fetchData = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/route/view/all`,
      config
    );

    return {
      props: {
        initialData: fetchData.data,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/operator/auth/login",
        permanent: false,
      },
    };
  }
}
