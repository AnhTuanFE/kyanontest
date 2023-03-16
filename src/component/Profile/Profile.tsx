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
  const [dataUser, setDataUser] = useState();
  const [dataID, setDataID] = useState<number>();

  // get data from api
  const getData = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(`/api/user/`, config);
      let da = data;
      setDataUser(da);
      setDataID(da.id);
      console.log("===> data", data);
      console.log("==> data user", dataUser);
      console.log("==> data id", dataID);
    } catch (err) {
      alert("lỗi không xác định");
      return 0;
    }
  };
  // lấy dữ liệu
  useEffect(() => {
    // const infor: Promise<any> = getData();
    // setDataUser(infor);
    // console.log("===> dataUser", infor);
    getData();
  }, []);
  //=============validate=====
  const validateProfile = useFormik({
    initialValues: {
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Vui lòng nhập đầy đủ thông tin email*")
        .email("Vui lòng nhập địa chỉ email hợp lệ"),

      phone: Yup.string().required("Vui lòng nhập số điện thoại*"),
    }),
    onSubmit: (value) => {},
  });
  //==========================
  return (
    <div>
      <div className={clsx(styles.wrap_profile_form)}>
        <form className={clsx(styles.wrap_form)}>
          <div className={clsx(styles.title)}>
            <h5>Profile</h5>
          </div>
          <label className={clsx(styles.form_info)}>Full name:</label>
          <input
            className={clsx(styles.form_data)}
            value={"fullname"}
            name={"fullname"}
          ></input>
          <label className={clsx(styles.form_info)}>Date Of Birth:</label>
          <input
            className={clsx(styles.form_data)}
            value={"date"}
            name={"date"}
          ></input>
          <label className={clsx(styles.form_info)}>Email:</label>
          <input
            className={clsx(styles.form_data)}
            type={"email"}
            name={"email"}
            value={validateProfile.values.email}
            onChange={validateProfile.handleChange}
            onBlur={validateProfile.handleBlur}
          ></input>
          {/*  */}
          <div className="frame-error">
            {validateProfile.touched.email && validateProfile.errors.email ? (
              <span className="error-message">
                {validateProfile.errors.email}
              </span>
            ) : null}
          </div>
          {/*  */}
          <label className={clsx(styles.form_info)}>Phone:</label>
          <input
            type={"text"}
            name={"phone"}
            className={clsx(styles.form_data)}
            value={validateProfile.values.phone}
            onChange={validateProfile.handleChange}
            onBlur={validateProfile.handleBlur}
          ></input>
          {/*  */}
          <div className="frame-error">
            {validateProfile.touched.phone && validateProfile.errors.phone ? (
              <span className="error-message">
                {validateProfile.errors.phone}
              </span>
            ) : null}
          </div>
          {/*  */}
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
