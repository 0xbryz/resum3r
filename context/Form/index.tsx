import { useState, createContext, useContext, useMemo, useEffect, useCallback } from 'react';
import { NFTPageType } from '../../components/NFTTemplate/NFTTemplate';
import { formatNFTs, formatPoaps } from '../useNFTs';

export const FormContext = createContext(null);

type FormDataType = 'achievements' | any

export default function FormProvider({ children }) {
  const [data, setData] = useState({});
  const [touchedData, setTouchedData] = useState<Record<FormDataType, any>>({});
  const loadLocalStorage = useCallback(() => {
    const formValues = localStorage.getItem('formValues');
    if (formValues) {
      const _values = JSON.parse(formValues) as Record<NFTPageType, {
        [key: string]: any[];
      }>;
      setData(_values);

      const retrievedData = Object.keys(_values).reduce((acc, key) => {
        const nftKey = `${key}_nfts`;
        const poapKey = `${key}_poaps`;
        return {
          ...acc,
          [key]: {
            [nftKey]: Array.isArray(_values[key][nftKey]) ? formatNFTs(_values[key][nftKey].map((n) => JSON.parse(n))) : [],
            [poapKey]: Array.isArray(_values[key][poapKey]) ? formatPoaps(_values[key][poapKey].map((p) => JSON.parse(p))) : [],
          }
        }
      }, {}) as Record<NFTPageType, {
        [key: string]: any[];
      }>;

      setTouchedData(retrievedData);
    }
  }, []);

  const setFormValues = useCallback((values) => {
    localStorage.setItem('formValues', JSON.stringify(values));
    setData((prev) => {
      const _values = {
        ...prev,
        ...values,
      };
      localStorage.setItem('formValues', JSON.stringify(_values));
      return _values;
    });
  }, []);

  // loads data from local storage and sets it to the form
  useEffect(() => {
    loadLocalStorage()
  }, [loadLocalStorage])

  const value = useMemo(
    () => ({
      data,
      touchedData,
      setTouchedData,
      setFormValues,
    }),
    [data, setFormValues, touchedData]
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export const useFormData = () => useContext(FormContext);
