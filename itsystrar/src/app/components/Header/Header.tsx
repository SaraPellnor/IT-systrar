import Image, { StaticImageData } from "next/image";
import txtLogo from "../../assets/logos/logo-text.png";
import iconLogo from "../../assets/logos/logo-icons.png";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

const listItems = [
  { title: "Tjänster", slug: "tjanster" },
  { title: "om oss", slug: "om-oss" },
  { title: "kontakt", slug: "kontakt" },
  { title: "projekt", slug: "projekt" },
];

const Header = ({ headerImage }: { headerImage: StaticImageData }) => {
  return (
    <div className="h-screen md:h-[50vh] w-screen relative">
      <MobileHeader
        txtLogo={txtLogo}
        iconLogo={iconLogo}
        listItems={listItems}
      />
      <DesktopHeader
        txtLogo={txtLogo}
        iconLogo={iconLogo}
        listItems={listItems}
      />

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
