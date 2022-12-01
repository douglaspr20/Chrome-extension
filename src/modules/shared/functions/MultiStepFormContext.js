import { createContext, useState, useContext } from "react";

const MultiStepFormContext = createContext();

export const MultiStepFormProvider = ({ children }) => {
  const [multiStepFormData, setMultiStepFormData] = useState({});

  const setMultiStepFormDataValues = (values) => {
    setMultiStepFormData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <MultiStepFormContext.Provider
      value={{ multiStepFormData, setMultiStepFormDataValues }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
};

export const useMultiStepFormData = () => useContext(MultiStepFormContext);
