import React, { useEffect, useState } from "react";
import BusCard from "../../../components/parts/BusCard";
import { Pagination } from "@mui/material";
import { getSession, signIn } from "next-auth/react";
import axios from "axios";
import useSWR from "swr";
import Link from "next/link";
import useToken from "../../../hooks/useToken";
import LoadingPage from "../../../components/LoadingPage";

function Bus({ initialData }) {
  const [page, setPage] = React.useState(1);
  const handleChange = async (event, value) => {
    setPage(value);
  };

  const token = useToken();

  const { data, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_BACKEND_URL}/bus/view/all?page=${page}`, token],
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
        <h4 className="text-muted text-center">Bus Management</h4>
        <p className="text-muted text-center">create update the route</p>

        <div className="d-flex justify-content-center">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <Link href="/operator">
              <a className="btn btn-success bg-dark">Trip Menu</a>
            </Link>
            <Link href="/operator/bus/create">
              <a className="btn btn-success">Add Bus</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="row g-2">
          {data != undefined &&
            data.data.map((busData) => (
              <div className="col-md-6" key={busData.id}>
                <BusCard data={busData} />
              </div>
            ))}

          <div className="d-flex justify-content-center py-4">
            <Pagination
              count={data ? data.totalPages : 0}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bus;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session) {
    const config = {
      headers: {
        Authorization: "Bearer " + session.userData.token,
      },
    };

    const fetchData = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/bus/view/all`,
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
