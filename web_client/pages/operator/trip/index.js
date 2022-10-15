import React from "react";
import TripCard from "../../../components/parts/TripCard";
import { Pagination } from "@mui/material";
import Link from "next/link";
import { getSession } from "next-auth/react";
import axios from "axios";
import useToken from "../../../hooks/useToken";
import useSWR from "swr";
import LoadingPage from "../../../components/LoadingPage";
import EmptyData from "../../../components/parts/EmptyData";

function Trip({ initialData }) {
  const [page, setPage] = React.useState(1);
  const handleChange = async (event, value) => {
    setPage(value);
  };

  const token = useToken();

  const { data, error } = useSWR(
    token
      ? [
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/trip/view/all?page=${page}`,
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
        <div className="d-flex justify-content-center">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <Link href="/operator">
              <a>
                <button type="button" className="btn btn-dark rounded-0">
                  <i className="bi bi-arrow-left"> </i>
                  Manage <i className="bi bi-journal-text"> </i>
                </button>
              </a>
            </Link>

            <Link href="/operator/trip/create">
              <a>
                <button type="button" className="btn btn-success rounded-0">
                  <i className="bi bi-plus-circle"> </i>
                  Add Trip <i className="bi bi-pencil-square"></i>
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <h4 className="text-muted text-center fw-light">Trip Management</h4>
      <p className="text-muted text-center">create new trips</p>
      <div className="py-4">
        {!data.totalPages && <EmptyData />}
        <div className="row g-2">
          {data != undefined &&
            data.data.map((tripData) => (
              <div className="col-md-6" key={tripData.id}>
                <TripCard data={tripData} />
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

export default Trip;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session) {
    const config = {
      headers: {
        Authorization: "Bearer " + session.userData.token,
      },
    };

    const fetchData = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/trip/view/all`,
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
