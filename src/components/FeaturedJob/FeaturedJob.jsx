import React from "react";
import { MapPinIcon, CurrencyBangladeshiIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const FeaturedJob = ({ showedJob }) => {
  const {
    id,
    logo,
    jobTitle,
    companyName,
    onsiteJob,
    fulltimeJob,
    location,
    salary,
  } = showedJob;
  return (
    <div className="border rounded-md p-5 drop-shadow-sm	flex flex-col">
      <div className="">
        <img className="object-cover h-[80%] mb-10" src={logo} alt="" />
      </div>
      <p className="font-bold">{jobTitle}</p>
      <p className="font-light tracking-wide	">{companyName}</p>
      <div className="flex gap-2 py-2">
        <button className="job-type-btn">{onsiteJob}</button>
        <button className="job-type-btn">{fulltimeJob}</button>
      </div>
      <div className="flex gap-3">
        <div className="flex items-center">
          <MapPinIcon className="h-5 w-5 text-gray-500" />
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        <div className="flex items-center">
          <CurrencyBangladeshiIcon className="h-5 w-5 text-gray-500" />
          <p className="text-sm text-gray-500">{salary}</p>
        </div>
      </div>
      <div>
        <Link to={`job-details/${id}`}>
          <button className="job-details-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJob;
