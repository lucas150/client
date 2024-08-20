import hindges1 from "../../assets/hindges1.jpg";
import flushbolt from "../../assets/flushbolt.jpg";
import doorcloser from "../../assets/doorcloser.jpg";
import panicdevice from "../../assets/panicdevice.jpg";

const Otherproducts = () => {
  return (
    <div className="mt-5 ml-5">
      <div className="text-red-700 font-bold text-lg">Other Products</div>
      <hr className="my-2 bg-gray-200 border-0 h-px dark:bg-gray-700" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 pb-2">
        {/* Image 1 */}
        <div className="rounded-lg border-2 text-center">
          <img
            className="object-contain w-full h-48"
            src={hindges1}
            alt="Wedge Anchor"
          />
          <div className=" p-2">
            <hr className="w-10/12 mx-auto h-1 bg-gray-600 border-0 rounded dark:bg-gray-700" />
            <div className="text-black font-semibold">Hinges</div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="rounded-lg border-2 text-center">
          <img
            className="object-contain w-full h-48"
            src={doorcloser}
            alt="Door Closer"
          />
          <div className=" p-2">
            <hr className="w-10/12 mx-auto h-1 bg-gray-600 border-0 rounded dark:bg-gray-700" />
            <div className="text-black font-semibold">Door Closer</div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="rounded-lg border-2 text-center">
          <img
            className="object-contain w-full h-48"
            src={flushbolt}
            alt="Flush Bolt"
          />
          <div className=" p-2">
            <hr className="w-10/12 mx-auto h-1 bg-gray-600 border-0 rounded dark:bg-gray-700" />
            <div className="text-black font-semibold">Flush Bolt</div>
          </div>
        </div>

        {/* image 4 */}
        <div className="rounded-lg border-2 text-center">
          <img
            className="object-contain w-full h-48"
            src={panicdevice}
            alt="Panic Device"
          />
          <div className=" p-2">
            <hr className="w-10/12 mx-auto h-1 bg-gray-600 border-0 rounded dark:bg-gray-700" />
            <div className="text-black font-semibold">Panic Device</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otherproducts;
