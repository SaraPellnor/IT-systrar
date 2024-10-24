import Image, { StaticImageData } from "next/image";
import txtLogo from "../../assets/logos/logo-full.png";
import HeaderNav from "./HeaderNav";
//import DesktopHeader from "./DesktopHeader";

const listItems = [
  { title: "Tjänster", slug: "services" },
  { title: "om oss", slug: "about" },
  { title: "kontakt", slug: "contact" },
  { title: "projekt", slug: "projects" },
];

const Header = ({ headerImage }: { headerImage: StaticImageData }) => {
  return (
    <div id="topPage" className="h-screen md:h-screen w-screen relative">
      <div className="absolute z-20 bg-gradient-to-b from-zinc-900/50 to-slate-200/0 py-8 w-screen h-screen flex  flex-col justify-center">
        <section className=" absolute top-0 left-0 flex gap-2 w-full justify-center pt-5">
          <Image
            src={txtLogo}
            alt="ITsystrar"
            className="h-14 lg:h-20 w-auto"
          />
        </section>

        <HeaderNav listItems={listItems} />
      </div>

      <Image
        src={headerImage}
        alt="Welcome picture depicting our office"
        layout="fill"
        objectFit="cover"
        className="absolute z-10 top-0 h-[75vh] w-screen"
      />
    </div>
  );
};

export default Header;
