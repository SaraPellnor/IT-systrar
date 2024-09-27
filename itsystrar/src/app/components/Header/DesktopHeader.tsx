import Image, { StaticImageData } from "next/image";

const DesktopHeader = ({
  iconLogo,
  txtLogo,
  listItems,
}: {
  iconLogo: StaticImageData;
  txtLogo: StaticImageData;
  listItems: string[];
}) => {
  return (
    <div className="absolute z-20 bg-gradient-to-b from-zinc-900/50 to-slate-200/0 p-8 px-10 w-screen justify-between items-center hidden md:flex">
      <section className="flex gap-2 w-1/2">
        <Image
          src={iconLogo}
          alt="The icon part of the logo depicting the silhouette of two women"
          height={30}
        />
        <Image src={txtLogo} alt="ITsystrar" className="h-8 w-auto" />
      </section>
      <section className="w-1/2">
        <ul className="flex gap-x-6 tracking-wider text-sm uppercase font-bold justify-end">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-orange-400 hover:cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DesktopHeader;
