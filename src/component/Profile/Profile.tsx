import clsx from "clsx";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import styles from "./Profile.module.scss";

interface IProfile {
  id: number;
  fullName: string;
  dateOfbirth: string;
  email: string;
  phone: string;
}
function Profile() {
  const [dataUser, setDataUser] = useState<IProfile>();

  // get data from api
  const getData = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(`/api/user/`, config);
      setDataUser(data);
    } catch (err) {
      alert("server error !!");
      return 0;
    }
  };

  // Get data from mock API
  useEffect(() => {
    getData();
  }, []);

  // function validate
  const validateProfile = useFormik({
    initialValues: {
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Please enter your full email information*")
        .email("Please enter a valid email address"),

      phone: Yup.string().required("Please enter the phone number*"),
    }),
    onSubmit: (value) => {},
  });

  const choossePhoneNumber = () => {
    if (validateProfile.values.phone) {
      return validateProfile.values.phone;
    } else return dataUser?.phone;
  };
  const choosseEmail = () => {
    if (validateProfile.values.email) {
      return validateProfile.values.email;
    } else return dataUser?.email;
  };
  return (
    <div>
      <div className={clsx(styles.wrap_profile_form)}>
        <form className={clsx(styles.wrap_form)}>
          <div className={clsx(styles.form_title)}>
            <label>Profile</label>
          </div>
          <label className={clsx(styles.form_info)}>Full name:</label>
          <input
            className={clsx(styles.form_data)}
            defaultValue={dataUser?.fullName}
            name={"fullname"}
          ></input>
          <label className={clsx(styles.form_info)}>Date Of Birth:</label>
          <input
            className={clsx(styles.form_data)}
            defaultValue={dataUser?.dateOfbirth}
            name={"date"}
          ></input>
          <label className={clsx(styles.form_info)}>Email:</label>
          <input
            className={clsx(styles.form_data)}
            type={"email"}
            name={"email"}
            defaultValue={choosseEmail()}
            onChange={validateProfile.handleChange}
            onBlur={validateProfile.handleBlur}
          ></input>
          <div className="frame-error">
            {validateProfile.touched.email && validateProfile.errors.email ? (
              <span className="error-message">
                {validateProfile.errors.email}
              </span>
            ) : null}
          </div>
          <label className={clsx(styles.form_info)}>Phone:</label>
          <input
            className={clsx(styles.form_data)}
            type={"text"}
            name={"phone"}
            defaultValue={choossePhoneNumber()}
            onChange={validateProfile.handleChange}
            onBlur={validateProfile.handleBlur}
          ></input>
          <div className="frame-error">
            {validateProfile.touched.phone && validateProfile.errors.phone ? (
              <span className="error-message">
                {validateProfile.errors.phone}
              </span>
            ) : null}
          </div>
          <div className={clsx(styles.wrap_button)}>
            <button className={clsx(styles.button_cancel)}>Cancel</button>
            <button className={clsx(styles.button_update)}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
