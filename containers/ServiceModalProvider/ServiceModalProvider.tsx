import React, { useEffect } from "react";
import { ServiceModalName } from "@/enums";
import { selectServiceModals } from "@/redux/selectors";

const ServiceModalProvider = ({ children }: { children?: React.ReactNode }) => {
  const modalKeys = Object.keys(selectServiceModals());

  useEffect(() => {
    const modalOverflow = document.body.style.overflow;

    document.body.style.overflow = modalKeys?.length ? "hidden" : modalOverflow;

    return () => {
      document.body.style.overflow = modalOverflow;
    };
  }, [modalKeys]);

  const getModalComponent = (key: ServiceModalName, index: number) => {
    switch (key) {
      default:
        return null;
    }
  };

  return (
    <>
      {children}
      {modalKeys.map((key: any, index) => (
        <React.Fragment key={key}>
          {getModalComponent(key, index)}
        </React.Fragment>
      ))}
    </>
  );
};

export default ServiceModalProvider;
