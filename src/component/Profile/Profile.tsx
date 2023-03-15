import clsx from "clsx";
import styles from "./Profile.module.scss";
function Profile() {
  return (
    <div>
      <div className={clsx(styles.wrap_profile_form)}>
        <form className={clsx(styles.wrap_form)}>
          <div className={clsx(styles.title)}>
            <h5>Profile</h5>
          </div>
          <div className={clsx(styles.form_info)}>Full name:</div>
          <input className={clsx(styles.form_data)}></input>
          <div className={clsx(styles.form_info)}>Date Of Birth:</div>
          <input className={clsx(styles.form_data)}></input>
          <div className={clsx(styles.form_info)}>Email:</div>
          <input className={clsx(styles.form_data)}></input>
          <div className={clsx(styles.form_info)}>Phone:</div>
          <input className={clsx(styles.form_data)}></input>
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
