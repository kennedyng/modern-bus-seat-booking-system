import React from "react";
import no_data from "../../public/svg/no_data.svg";
import Image from "next/image";
function EmptyData() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="text-primary">
        <Image height={200} src={no_data} alt="no data"></Image>
        <h4 className="text-primary fw-light">
          NO DATA UPLOAD INFORMATION TO GET STARTED
        </h4>
      </div>
    </div>
  );
}

export default EmptyData;
