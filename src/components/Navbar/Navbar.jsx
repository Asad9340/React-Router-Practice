import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="flex justify-between gap-4 px-10 bg-stone-800 py-3">
      <div>
        <h2 className="text-2xl font-bold text-white">Logo</h2>
      </div>
      <div>
        <ul className="flex justify-between gap-4">
          <NavLink to="/">
            <li className="hover:bg-orange-900 text-white px-4 py-2 duration-300 rounded-lg font-semibold">
              Home
            </li>
          </NavLink>
          <NavLink to="/about">
            <li className="hover:bg-orange-900 text-white px-4 py-2 duration-300 rounded-lg font-semibold">
              About
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li className="hover:bg-orange-900 text-white px-4 py-2 duration-300 rounded-lg font-semibold">
              Contact
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
