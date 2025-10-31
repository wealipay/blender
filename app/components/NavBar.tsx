import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          width={36}
          height={36}
          alt="logo"
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="text-md font-medium tracking-wider">Wealipay</p>
      </Link>
    </nav>
  );
};
export default NavBar;
