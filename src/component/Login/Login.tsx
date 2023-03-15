import clsx from "clsx";
import styles from "./Login.module.scss";
function Login() {
  const submitHandle = (): void => {};
  return (
    <div className={clsx(styles.wrap_Login)}>
      <h1>Login pages</h1>
      <div className={clsx(styles.wrap_login_form)}>
        <form onSubmit={submitHandle} className={clsx(styles.wrap_form)}>
          <div className={clsx(styles.form_items)}>
            <div className={clsx(styles.form_info)}>email</div>
            <input type={"email"} className={clsx(styles.form_data)}></input>
          </div>
          <div className={clsx(styles.form_items)}>
            <div className={clsx(styles.form_info)}>mật khẩu</div>
            <input type={"number"} className={clsx(styles.form_data)}></input>
          </div>
          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
