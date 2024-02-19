import Image from "next/image"
import Container from "../components/shared/Container"
import Link from "next/link"
import Search from "../components/Search"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TfiUser } from "react-icons/tfi";
import { BsHeart } from "react-icons/bs";
const Header = () => {
  return (
    <Container>
      <div className="flex items-center justify-between gap-7 my-7">
        {/* Logo */}
        <Link href='/'>
          <Image
            src='/logo.svg'
            width={'160'}
            height={'60'}
          />
        </Link>
        {/* search */}
        <div className="hidden xl:block">
          <Search />
        </div>
        {/* contact */}
        <div className="hidden xl:block">
          <div className="flex flex-col gap-">
            <h1 className="text-2xl font-semibold">8 800 332 65-66</h1>
            <span className="text-sm font-normal text-gray1 self-end">
              Support 24/7
            </span>
          </div>
        </div>
        {/* Icons */}
        <div className="flex justify-end items-center gap-5">
          <Link href='/'>
            <TfiUser className="text-2xl" />
          </Link>

          <div className="relative">
            <Link href='/'>
              <BsHeart className="text-2xl" />
              <span className="bg-primery px-1 rounded absolute -top-2.5 left-4 text-xs">20</span>
            </Link>
          </div>

          <div className="relative">
            <Link href='/'>
              <AiOutlineShoppingCart className="text-2xl" />
              <span className="bg-primery px-1 rounded absolute -top-2 left-4 text-xs">20</span>
            </Link>
          </div>

        </div>
      </div>
    </Container>
  )
}

export default Header