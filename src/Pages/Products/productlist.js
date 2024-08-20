import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import revet1 from "../../assets/revet1.jpg";
import revet2 from "../../assets/revet2.jpg";
import revet3 from "../../assets/revet3.jpg";
import hindges1 from "../../assets/hindges1.jpg";
import flushbolt from "../../assets/flushbolt.jpg";
import doorcloser from "../../assets/doorcloser.jpg";
import hightensile from "../../assets/hightensile.jpg";
import panicdevice from "../../assets/panicdevice.jpg";
import anchor2 from "../../assets/anchor2.jpg";
import anchor3 from "../../assets/anchor3.jpg";
import anchor4 from "../../assets/anchor4.jpg";
import MetalBolts from "./metalbolt.js";
import MetalRivets from "./metalrivets.js";
import AnchorFastner from "./anchor.js";
import Otherproducts from "./otherproduct.js";

const Productlist = () => {
  return (
    <>
      <div>
        <div class="flex items-center justify-center">
          <div class="container w-9/12 ">
            {/* Metal Bolts */}
            <MetalBolts />
            <MetalRivets />
            <AnchorFastner />
            <Otherproducts />
          </div>
        </div>
      </div>
      {/* //////// */}
    </>
  );
};
export default Productlist;
