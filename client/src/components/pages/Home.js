//import Header from "../views/Header";
import { useSelector } from "react-redux";
import { getAllAds } from "../../redux/adsRedux";
import AdList from "../features/AdList";

const Home = () => {

  const ads = useSelector(getAllAds);
  console.log('HOME ADS', ads)
  
  return (
    <>
      {/* < Header /> */}
      <h1>All ads</h1>
      <AdList ads={ads}/>
    </>
    );
}
 
export default Home;