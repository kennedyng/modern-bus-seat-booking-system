import React from "react";

function SimpleCard({ data }) {
  const { title, subtitle } = data;
  return (
    <div className="card boder-2 rounded-0 shadow">
      <div className="card-body text-center">
        <h5 className="card-title text-primary fw-bolder">{title}</h5>
        <h6 className="card-subtitle mb-2 text-secondary fw-light">
          {subtitle}
        </h6>
      </div>
    </div>
  );
}

export default SimpleCard;
