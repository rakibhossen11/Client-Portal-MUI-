import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceHeader from "./serviceComponents/ServiceHeader";
import ServiceDetail from "./serviceComponents/ServiceDetail";
import ServiceButton from "./serviceComponents/ServiceButton";
import Service from "./Service";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, serviceName, description, category, price } = service;
  console.log(service);
  return (
    <div>
      <div className="grid grid-cols-2 mt-[100px]">
        <div></div>
        <div>
          <ServiceHeader header={serviceName} />
          <div className="flex gap-[10px]">
            <ServiceButton text={"Order Now"} />
            <ServiceButton text={"Add To cart"} />
          </div>
        </div>
      </div>
      <div>
        <ServiceDetail detail={description} />
        <Service />
      </div>
    </div>
  );
};

export default ServiceDetails;
