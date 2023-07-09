import { CarProps } from "@/types";
import React from "react";

interface CarDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ car, closeModal, isOpen }: CarDetailProps) => {
  return <div>CarDetails</div>;
};

export default CarDetails;
