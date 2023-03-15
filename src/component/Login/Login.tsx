import clsx from "clsx";
import styles from "./Login.module.scss";
function Login() {
  const submitHandle = (): void => {};
  return (
    <div className={clsx(styles.wrap_Login)}>
      <div className={clsx(styles.wrap_login_form)}>
        <form onSubmit={submitHandle} className={clsx(styles.wrap_form)}>
          <div className={clsx(styles.form_items_title)}>
            <h5>Login</h5>
          </div>
          <div className={clsx(styles.form_items)}>
            <div className={clsx(styles.form_info)}>Email:</div>
            <input
              type={"email"}
              placeholder={"example@kyanon.digital"}
              className={clsx(styles.form_data)}
            ></input>
          </div>
          <div className={clsx(styles.form_items)}>
            <div className={clsx(styles.form_info)}>Password:</div>
            <input
              type={"password"}
              placeholder={"******"}
              className={clsx(styles.form_data)}
            ></input>
          </div>
          <div className={clsx(styles.wrap_button)}>
            <div className={clsx(styles.button_items_check)}>
              <input type={"checkbox"}></input>
              <div className={clsx(styles.button_items_title)}>
                Show password
              </div>
            </div>
            <div className={clsx(styles.button_items)}>
              <button className={clsx(styles.button_login)} type="submit">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
