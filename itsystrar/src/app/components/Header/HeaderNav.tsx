import { iHeader } from "./interfaces";

const HeaderNav = ({ listItems }: { listItems: iHeader[] }) => {
  return (
    <nav className="w-screen">
      <ul className="flex tracking-wider text-sm uppercase font-bold flex-col gap-y-5 md:gap-y-8">
        {listItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.slug}`}
            className="bg-pink-600 py-4 md:py-6 px-5 md:px-20 md:transform md:transition-all md:duration-300 md:ease-in-out md:hover:scale-125 md:focus:scale-125 md:hover:w-[400px] md:focus:w-[400px] md:hover:px-30 md:focus:px-30 md:w-[300px] w-80 rounded-tr-full"
          >
            <li>{item.title}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
