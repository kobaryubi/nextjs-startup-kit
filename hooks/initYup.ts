import { useEffect } from "react";
import yup from 'schemas/instance';

export const useInitYup = () => {
  useEffect(() => {
    yup.setLocale({
      string: {
        max: "is over ${max}"
      }
    })
  }, []);
};
