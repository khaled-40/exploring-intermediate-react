import React, { useState } from 'react';
import Link from './link';
import { Menu, X } from 'lucide-react';

const urls = [
    {
        id: 1,
        name: "Home",
        path: "/home"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Contact",
        path: "/contact"
    },
    {
        id: 5,
        name: "Blog",
        path: "/blog"
    }
];

const links = urls.map(route => <Link key={route.id} route={route}></Link>);


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='flex justify-between mx-10'>
            <ul className={`md:hidden bg-amber-200 text-black absolute duration-1000
                    ${open? 'top-7': '-top-32'}`}>
                    {links}
                </ul>

            <span onClick={() => setOpen(!open)} className='flex'>
                {
                    open === false ? <Menu className='md:hidden'></Menu> : <X className='md:hidden'></X>
                }
                
                <h3>My Navbar</h3>
            </span>



            <ul className='md:flex hidden'>
                {links}

            </ul>



            {/* <ul className='flex'>
                <li className="mr-10"><a href="">Home</a></li>
                <li className="mr-10"><a href="">About</a></li>
                <li className="mr-10"><a href="">Contact</a></li>
                <li className="mr-10"><a href="">FAQ</a></li>
            </ul> */}

            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;