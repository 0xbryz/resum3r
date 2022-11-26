import { useState, createContext, useContext, useMemo } from 'react';

export const FormContext = createContext(null);

export default function FormProvider({ children }) {
  const [data, setData] = useState({});

  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  const value = useMemo(
    () => ({
      data,
      setFormValues,
    }),
    [data]
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export const useFormData = () => useContext(FormContext);
