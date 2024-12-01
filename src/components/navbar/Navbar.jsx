import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <nav>
      <div>
        Logo
      </div>
      <div>
        <Links />
      </div>
    </nav>
  )
}

export default Navbar;