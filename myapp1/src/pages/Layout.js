import { Link , Outlet } from "react-router-dom"
import './style.css'
function Layout(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/signup'>SIGNUP</Link>
                    </li>
                    <li>
                        <Link to='/signin'>SIGNIN</Link>
                    </li>
                    <li>
                        <Link to='/contact'>CONTACT</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Layout;