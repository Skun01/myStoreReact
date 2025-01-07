import { Link } from 'react-router-dom';
import AuthCss from './Auth.module.css';
function Login(){
  return(
    <>
      <div className={AuthCss.formWrapper}>
          <h1 className={AuthCss.formTitle}>Sign In</h1>
          <p className={AuthCss.formDesc}>Sign in to your account</p>
          <form action="" className={AuthCss.formInput}>
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
            <button id='signInBtn' className={AuthCss.formBtn}>Sign In</button>
          </form>
          <p className={AuthCss.formNav}>Don&apos;t have an account? <Link to='register'>Sign up</Link></p>
        </div>
    </>
  )
}

export default Login;