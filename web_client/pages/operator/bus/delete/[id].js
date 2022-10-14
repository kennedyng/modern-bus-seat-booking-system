import React, { useEffect, useState } from "react";
import axios from "axios";
import { getSession } from "next-auth/react";
import BusCard from "../../../../components/parts/BusCard";
import DeleteButton from "../../../../components/parts/SubmitButton";
import useToken from "../../../../hooks/useToken";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Router from "next/router";
function DeleteBus({ data }) {
  const token = useToken();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setIsLoading(true);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/bus/delete/${router.query.id}`;

    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    await axios
      .delete(url, config)
      .then((response) => {
        setIsLoading(false);
        toast.success("route information deleted successfully");
        Router.back();
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false);
        toast.error("failed try again");
      });
  };

  return (
    <div className="container">
      <div className="my-4 d-flex justify-content-center flex-column ">
        <h4 className="text-danger">
          THE FOLLOWING BUS INFORMATION WILL BE DELETED PERMANENTLY
        </h4>

        <table className="">
          <thead>
            <tr>
              <th>ID</th>
              <th>Plate Number</th>
              <th>Passenger Capacity</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{data.id}</td>
              <td>{data.plate_number}</td>
              <td>{data.total_seat}</td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-center my-4">
          <DeleteButton isLoading={isLoading} pressed={handleDelete}>
            Delete
          </DeleteButton>
        </div>
      </div>
    </div>
  );
}

export default DeleteBus;

export async function getServerSideProps({ req, query }) {
  const session = await getSession({ req });
  const { id } = query;

  //redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: "/operator/auth/login",
        permanent: false,
      },
    };
  }

  const config = {
    headers: {
      Authorization: "Bearer " + session.userData.token,
    },
  };
  const fetchData = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/bus/view/one/${id}`,
    config
  );

  return {
    props: {
      data: fetchData.data,
    },
  };
}
