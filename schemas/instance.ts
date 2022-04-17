import * as yup from "yup";

yup.setLocale({
  string: {
    max: "is over ${max}"
  }
})

export default yup;
