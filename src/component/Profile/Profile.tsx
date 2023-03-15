import clsx from "clsx";
import styles from "./Profile.module.scss";
function Profile() {
  return (
    <div>
      <h1 className={clsx(styles.title)}>Profile</h1>
      <div className={clsx(styles.wrap_form)}>
        <form className={clsx(styles.wrap_form_profile)}>
          <div>Full name</div>
          <input></input>
          <div>Date of birth</div>
          <input></input>
          <div>email</div>
          <input></input>
          <div>phone</div>
          <input></input>
          <div className={clsx(styles.wrap_button)}>
            <button className={clsx(styles.button_item)}>Update</button>
            <button className={clsx(styles.button_item)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
