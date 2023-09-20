import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: "home-route" },
    { path: "/about", name: "About", id: "about-route" },
    { path: "/products", name: "Products", id: "products-route" },
    { path: "/contact", name: "Contact", id: "contact-route" },
    { path: "/404", name: "Not Found", id: "not-found-route" },
  ];

  return (
    <nav className="bg-rose-400 p-4 rounded-lg">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>}
        
      </div>
      <ul className={`md:flex justify-center md:static duration-500 ${open? 'top-14': '-top-60'} absolute bg-rose-400 text-white rounded-sm px-4`} >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
