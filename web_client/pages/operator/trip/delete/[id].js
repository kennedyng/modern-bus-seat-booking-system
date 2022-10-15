import React, { useEffect, useState } from "react";
import axios from "axios";
import { getSession } from "next-auth/react";
import DeleteButton from "../../../../components/parts/SubmitButton";
import useToken from "../../../../hooks/useToken";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Router from "next/router";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";

function DeleteTrip({ data }) {
  const token = useToken();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setIsLoading(true);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/trip/delete/${router.query.id}`;

    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    await axios
      .delete(url, config)
      .then((response) => {
        setIsLoading(false);
        toast.success("trip information deleted successfully");
        Router.back();
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error.response);
        toast.error("failed try again");
      });
  };

  return (
    <div className="container">
      <div className="my-4 d-flex justify-content-center flex-column ">
        <h4 className="text-danger">
          THE FOLLOWING TRIP INFORMATION WILL BE DELETED PERMANENTLY
        </h4>

        <table className="">
          <thead>
            <tr>
              <th>ID</th>
              <th>Route</th>
              <th>Bus Number Plate</th>
              <th>Departing Time</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{data.id}</td>
              <td>
                {data.Route.starting_point} - {data.Route.ending_point}
              </td>
              <td>{data.Bus.plate_number}</td>
              <td>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    onChange={() => null}
                    readOnly
                    value={data.departing_time}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </td>
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

export default DeleteTrip;

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
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/trip/view/one/${id}`,
    config
  );

  return {
    props: {
      data: fetchData.data ? fetchData.data : {},
    },
  };
}
