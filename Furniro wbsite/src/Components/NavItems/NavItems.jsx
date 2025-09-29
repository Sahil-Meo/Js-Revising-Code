import { NAV_ITEMS } from '../../Lib/Constants/Index'
import { Link, useLocation } from 'react-router-dom'

const NavItems = ({ openMenu }) => {
    const location = useLocation();

    const handleCloseMenu = () => {
        if (window.innerWidth > 768) openMenu(false);
    }
    return (
        <ul className='flex items-center justify-between flex-col md:space-x-8 lg:space-x-14  font-medium md:flex-row w-full' >
            {NAV_ITEMS?.map((item) => (
                <li onClick={handleCloseMenu} key={item.label} className=" w-full text-center px-10 md:px-0 md:w-auto ">
                    <Link
                        to={item.path}
                        className="relative after:content-[''] after:absolute after:bg-primary after:h-[3px] after:w-0 hover:after:w-full after:duration-300 after:left-0 after:-bottom-[3px] block py-2 px-3 md:p-0"
                        aria-current={location.pathname === item.path ? 'page' : undefined}
                    >
                        {item.label}
                    </Link>

                    <div className="w-full border border-gray-200 md:hidden"></div>
                </li>
            ))}
        </ul>
    )
}

export default NavItems
