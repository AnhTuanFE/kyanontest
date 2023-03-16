import { useState } from "react";
import clsx from "clsx";
import styles from "./Login.module.scss";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

interface IUser {
  user: {
    email: string;
    password: string;
  };
}
function Login() {
  const [passwordType, setPasswordType] = useState("password");

  const submitHandleLogin = (e: IUser["user"]): void => {
    accountVerification(e.email, e.password);
  };

  // Account verification function
  const accountVerification = async (
    mail: string,
    pass: string
  ): Promise<void> => {
    let inforLogin = {
      email: mail,
      password: pass,
    };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(`/api/user/`, { inforLogin }, config);
      if (data) {
        alert("Login success!");
      }
    } catch (err) {
      alert("login failed, please review your account information");
    }
  };

  // function show password
  const togglePassword = (): void => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  //function validate
  const validateLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Please enter your full email information*")
        .email("Please enter a valid email address"),

      password: Yup.string().required("Please enter a password*"),
    }),
    onSubmit: (value: IUser["user"]) => {
      submitHandleLogin(value);
    },
  });

  return (
    <div className={clsx(styles.wrap_Login)}>
      <div className={clsx(styles.wrap_login_form)}>
        <form
          method="POST"
          onSubmit={validateLogin.handleSubmit}
          className={clsx(styles.wrap_form)}
        >
          <div className={clsx(styles.wrap_form_item)}>
            <div className={clsx(styles.form_items_title)}>
              <label>Login</label>
            </div>
            <div className={clsx(styles.form_items)}>
              <label className={clsx(styles.form_info)}>Email:</label>
              <input
                type={"email"}
                name={"email"}
                className={clsx(styles.form_data)}
                placeholder={"example@kyanon.digital"}
                value={validateLogin.values.email}
                onChange={validateLogin.handleChange}
                onBlur={validateLogin.handleBlur}
              ></input>
              <div className="frame-error">
                {validateLogin.touched.email && validateLogin.errors.email ? (
                  <span className="error-message">
                    {validateLogin.errors.email}
                  </span>
                ) : null}
              </div>
            </div>
            <div className={clsx(styles.form_items)}>
              <label className={clsx(styles.form_info)}>Password:</label>
              <input
                id={"password"}
                name={"password"}
                type={passwordType}
                className={clsx(styles.form_data)}
                placeholder={"******"}
                value={validateLogin.values.password}
                onChange={validateLogin.handleChange}
                onBlur={validateLogin.handleBlur}
              ></input>
              <div className="frame-error">
                {validateLogin.touched.password &&
                validateLogin.errors.password ? (
                  <span className="error-message">
                    {validateLogin.errors.password}
                  </span>
                ) : null}
              </div>
            </div>
            <div className={clsx(styles.wrap_button)}>
              <div className={clsx(styles.button_items_check)}>
                <input
                  id={"show_pass"}
                  type={"checkbox"}
                  onChange={togglePassword}
                  className={clsx(styles.button_item)}
                ></input>
                <label className={clsx(styles.button_items_title)}>
                  Show password
                </label>
              </div>
              <div className={clsx(styles.button_items)}>
                <button className={clsx(styles.button_login)} type="submit">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
