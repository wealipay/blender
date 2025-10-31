import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200">
      {/*Left*/}
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
      {/*Right*/}
      <div className="">Right</div>
    </nav>
  );
};
export default NavBar;
