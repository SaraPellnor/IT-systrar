import Image, { StaticImageData } from "next/image";
import { iHeader } from "./interfaces";

const MobileHeader = ({
  iconLogo,
  txtLogo,
  listItems,
}: {
  iconLogo: StaticImageData;
  txtLogo: StaticImageData;
  listItems: iHeader[];
}) => {
  return (
    <div className="absolute z-20 bg-gradient-to-b from-zinc-900/50 to-slate-200/0 py-8 w-screen h-screen flex  flex-col justify-center md:hidden">
      <section className=" absolute top-0 left-0 flex gap-2 w-full justify-center pt-5">
        <Image
          src={iconLogo}
          alt="The icon part of the logo depicting the silhouette of two women"
          height={30}
        />
        <Image src={txtLogo} alt="ITsystrar" className="h-8 w-auto" />
      </section>
      <section className="w-40">
        <ul className="flex tracking-wider text-sm uppercase font-bold flex-col gap-y-5">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="bg-pink-600 hover:cursor-pointer py-4 px-5"
            >
              <a href={`/${item.slug}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MobileHeader;
