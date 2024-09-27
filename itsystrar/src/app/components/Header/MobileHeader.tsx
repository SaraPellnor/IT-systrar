import Image, { StaticImageData } from "next/image";

const MobileHeader = ({
  iconLogo,
  txtLogo,
  listItems,
}: {
  iconLogo: StaticImageData;
  txtLogo: StaticImageData;
  listItems: string[];
}) => {
  return (
    <div className="absolute z-20 bg-gradient-to-b from-zinc-900/50 to-slate-200/0 py-8 w-screen justify-between items-center md:hidden">
      <section className="flex gap-2 w-full justify-center pb-5">
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
            <li key={index} className="bg-pink-600 hover:cursor-pointer py-4 px-5">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MobileHeader;
