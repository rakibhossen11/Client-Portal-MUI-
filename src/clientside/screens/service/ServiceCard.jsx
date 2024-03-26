import React from "react";
import { Card } from "flowbite-react";
import image from "../../../assets/image.png";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, serviceName, description } = service;
  return (
    <div className="font-signika">
      <Link to={`/service-de/${_id}`}>
        <Card className="max-w-sm" imgSrc={image}>
          <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
            {serviceName}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description.slice(0, 110)}
          </p>
          <p className="font-normal text-gray-900">From: ${service.price}</p>
        </Card>
      </Link>
    </div>
  );
};

export default ServiceCard;
