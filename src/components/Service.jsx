import {
  ArrowDownLeftFromCircle,
  Car,
  CarFront,
  DollarSign,
  Headset,
  Users,
} from "lucide-react";
import React from "react";

const services = [
  {
    id: 1,
    icon: <CarFront size={30} color="red" />,
    title: "Free Delivery",
    description: "from $78",
  },
  {
    id: 2,
    icon: <Users size={30} color="red" />,
    title: "99% Customer",
    description: "feedbacks",
  },
  {
    id: 3,
    icon: <ArrowDownLeftFromCircle size={30} color="red" />,
    title: "10 Days",
    description: "for free return",
  },
  {
    id: 4,
    icon: <DollarSign size={30} color="red" />,
    title: "Payment",
    description: "secure system",
  },
  {
    id: 5,
    icon: <Headset size={30} color="red" />,
    title: "24/7",
    description: "online supports",
  },
];

const Service = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center mt-15">
      {services.map((service) => {
        return (
          <>
            <div
              key={service.id}
              className="flex items-center gap-2 border border-gray-300 p-8"
            >
              {service.icon}
              <div>
                <h2 className="font-semibold text-md">{service.title}</h2>
                <p className="text-gray-500">{service.description}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Service;
