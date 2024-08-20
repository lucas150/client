import img1 from "../../assets/img1.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import hightensile from "../../assets/hightensile.jpg";

const MetalBolts = () => {
  return (
    <div className="mt-5 ml-5">
      <div className="text-red-700 font-bold text-lg">Metal Bolts</div>
      <hr className="my-2 bg-gray-200 border-0 h-px dark:bg-gray-700" />
      <p className="text-gray-600">
        We have carved out a distinct position in supplying an enormous range of
        Metal Bolts in India. Our range of bolts includes Hex Bolt, Flange
        Bolts, Torx Head Bolt and many more. The bolts that we offer are highly
        durable due to their strong and sturdy construction.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 pb-2">
        {/* Image 1 */}
        <div className="rounded-lg border-2 text-center">
          <img
            className="object-contain w-full h-48"
            src={img1}
            alt="SS 304 Hex Bolt And Nut"
          />
          <div className=" p-2">
            <hr className="w-10/12 mx-auto h-1 bg-gray-600 border-0 rounded dark:bg-gray-700" />
            <div className="text-black font-semibold">
              SS 304 Hex Bolt And Nut
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="rounded-lg border-2 text-center">
          <img
            className="object-contain w-full h-48"
            src={hightensile}
            alt="High Tensile Bolt Nut"
          />
          <div className=" p-2">
            <hr className="w-10/12 mx-auto h-1 bg-gray-600 border-0 rounded dark:bg-gray-700" />
            <div className="text-black font-semibold">
              High Tensile Bolt Nut
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="rounded-lg border-2 text-center">
          <img
            className="object-contain w-full h-48"
            src={img5}
            alt="SS 304 Self Drilling Screw"
          />
          <div className=" p-2">
            <hr className="w-10/12 mx-auto h-1 bg-gray-600 border-0 rounded dark:bg-gray-700" />
            <div className="text-black font-semibold">
              SS 304 Self Drilling Screw
            </div>
          </div>
        </div>

        {/* Image 4 */}
        <div className="rounded-lg border-2 text-center">
          <img
            className="w-full h-48 object-contain"
            src={img4}
            alt="SS 304 Self Tapping Screw"
          />
          <div className=" p-2">
            <hr className="w-10/12 mx-auto h-1 bg-gray-600 border-0 rounded dark:bg-gray-700" />
            <div className="text-black font-semibold">
              SS 304 Self Tapping Screw
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetalBolts;
