import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src="/logo.png"
          width={36}
          height={36}
          alt="logo"
          className="w-6 h-6 md:w-9 md:h-9"
        />
      </Link>
    </div>
  );
};
export default NavBar;
