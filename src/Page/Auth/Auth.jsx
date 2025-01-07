import { Outlet } from 'react-router-dom';
import AuthCss from './Auth.module.css';

function Auth(){
  return(
    <div className={AuthCss.authSection}>
      <div className={AuthCss.authBanner}>
        <img className={AuthCss.authImg} src='/images/spiderHead.jpg' alt='logo'/>
      </div>
      <div className={AuthCss.formSection}>
        <Outlet/>
      </div>
    </div>
  )
}

export default Auth;