import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  MapPinIcon,
  BriefcaseIcon,
  PhoneIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { addToDb, getAppliedList } from "../Utilities/Fakedb";
import { AppliedJobContext } from "../Layout/Main";
import toast from "react-hot-toast";

const JobDetails = ({ applied }) => {
  const job = useLoaderData();
  const {
    id,
    logo,
    jobTitle,
    companyName,
    onsiteJob,
    location,
    fulltimeJob,
    salary,
    jobDetails,
    responsibility,
    requirements,
    experiences,
    contactInfo,
  } = job;
  const [appliedJobs, setAppliedJobs] = useContext(AppliedJobContext);

  const addAppliedJobs = () => {
    const appliedListsDb = getAppliedList();
    let toastShown = false;
    for (const id in appliedListsDb) {
      if (id === job.id && !toastShown) {
        toast("You have already applied");
        toastShown = true;
      }
    }
    if (!toastShown) {
      toast("Congratulations! Application done");
      toastShown = false;
    }
  };

  return (
    <div>
      <h1 className='flex text-center text-3xl mt-3 font-bold justify-center'>Job Details</h1>
      <div className="details-container">
        <div className="p-4 grid grid-cols-1 md:grid-cols-8 gap-3">
          <div className="col-span-5 tracking-wide">
            <h2 className="pb-3">
              <span className="font-bold">Job Description:</span> {jobDetails}
            </h2>
            <h2 className="pb-3">
              <span className="font-bold pb-2">Job Responsibility:</span>{" "}
              {responsibility}
            </h2>
            <h2 className="pb-3">
              <p className="font-bold pb-1">Educational Requirements:</p>
              {requirements}
            </h2>
            <h2 className="pb-3">
              <p className="font-bold pb-1">Experience:</p>
              {experiences}
            </h2>
          </div>
          <div className="col-span-3 ">
            <div className="flex flex-col bg-indigo-50 rounded-md p-4">
              <p className="font-bold">Job Details</p>
              <hr className="h-[2px] my-3 bg-gray-300" />
              <div className="flex items-center">
                <CurrencyDollarIcon className="h-5 w-5 text-indigo-500" />
                <p className="text-sm text-gray-500">
                  <span className="font-bold px-2">Salary:</span>
                  <span>{salary}</span>
                </p>
              </div>
              <div className="flex items-center mt-2">
                <BriefcaseIcon className="h-5 w-5 text-indigo-500"></BriefcaseIcon>
                <div className="px-2">
                  <p className="text-sm break-normal text-gray-500">
                    <span className="font-bold">Job Title: </span>
                    <span>{jobTitle}</span>
                  </p>
                </div>
              </div>
              <p className="font-bold mt-5">Contact Information</p>
              <hr className="h-[2px] my-3 bg-gray-300"></hr>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-indigo-500" />
                <p className="text-sm text-gray-500">
                  <span className="font-bold px-2">Phone:</span>
                  <span>{contactInfo[0].phone}</span>
                </p>
              </div>
              <div className="flex items-center mt-2">
                <BriefcaseIcon className="h-5 w-5 text-indigo-500" />
                <p className="px-2 text-sm break-normal text-gray-500">
                  <span className="font-bold">Job: </span>
                  <span>{contactInfo[0].email}</span>
                </p>
              </div>
              <div className="flex items-center mt-2">
                <MapPinIcon className="h-5 w-5 text-indigo-500"></MapPinIcon>
                <p className="px-2 text-sm break-normal text-gray-500">
                  <span className="font-bold">Address: </span>
                  <span>{location}</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                addAppliedJobs();
                addToDb(id);
              }}
              className={
                !applied ? "btn common-btn w-full" : "btn common-btn-two w-full"
              }
            >
              {applied ? "Applied" : "Apply Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
