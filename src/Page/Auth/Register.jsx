import { Link } from 'react-router-dom';
import AuthCss from './Auth.module.css';
function Register(){
  return(
    <>
      <div className={AuthCss.formWrapper}>
        <h1 className={AuthCss.formTitle}>Sign Up</h1>
        <p className={AuthCss.formDesc}>Create your account</p>
        <form action="" className={AuthCss.formInput}>
          <div className={AuthCss.formGroup}>
            <label htmlFor="userName">Name</label>
            <input type="text" id='userName'/>
            <p className={AuthCss.errorMessage}> </p>
          </div>
          <div className={AuthCss.formGroup}>
            <label htmlFor="userEmail">Email address</label>
            <input type="text" id='userEmail'/>
            <p className={AuthCss.errorMessage}> </p>
          </div>
          <div className={AuthCss.formGroup}>
            <label htmlFor="userPassword">Password</label>
            <input type="text" id='userPassword'/>
            <p className={AuthCss.errorMessage}> </p>
          </div>
          <div className={AuthCss.formGroup}>
            <label htmlFor="userPasswordConfirm">Confirm Password</label>
            <input type="text" id='userPasswordConfirm'/>
            <p className={AuthCss.errorMessage}> </p>
          </div>
          <button id='signUpBtn' className={AuthCss.formBtn}>Sign Up</button>
        </form>
        <p className={AuthCss.formNav}>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </>
  )
}

export default Register;