import { fetchAds } from "./redux/adsRedux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchAds()), [dispatch])

  const ads = useSelector(state => state.ads);
  console.log(ads)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
