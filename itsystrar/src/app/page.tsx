import Header from "./components/Header/Header";
import headerImage from './assets/Images/stockphotoHeader.jpg'

export default function Home() {
  return (
    <div className="h-screen w-screen">
     <Header headerImage={headerImage} />
    </div>
  );
}
