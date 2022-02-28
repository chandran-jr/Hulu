import Image from "next/image";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="">
        <div>
            <HeaderItem title="HOME" Icon={HomeIcon}/>
            <HeaderItem title="HOME" Icon={HomeIcon}/>
            <HeaderItem title="HOME" Icon={HomeIcon}/>
            <HeaderItem title="HOME" Icon={HomeIcon}/>
            <HeaderItem title="HOME" Icon={HomeIcon}/>
            <HeaderItem title="HOME" Icon={HomeIcon}/>
        </div>
        <Image 
        className="object-contain" 
        src="https://links.papareact.com/ua6" 
        width={200} 
        height={100} />
    </header>
  )
}

export default Header