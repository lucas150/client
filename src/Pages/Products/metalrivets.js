import revet1 from "../../assets/revet1.jpg";
import revet2 from "../../assets/revet2.jpg";
import revet3 from "../../assets/revet3.jpg";

const MetalRivets = () => {
  return (
    <div className="mt-5 ml-5">
      <div className="text-red-700 font-bold text-lg">Metal Revet</div>
      <hr className="my-2 bg-gray-200 border-0 h-px dark:bg-gray-700" />
      <p className="text-gray-600">
        The metal rivites that we provide is of exceptional quality and is
        procured only from the reputed vendors of the market. Our Metal Rivets
        are subjected to stringent quality tests with the objective of
        eliminating each and every possibility of defect from it.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 pb-2">
        {/* Image 1 */}
        <div className="rounded-lg border-2 text-center">
          <img
            className="object-contain w-full h-48"
            src={revet1}
            alt="Blind Rivets"
          />
          <div className=" p-2">
            <hr className="w-10/12 mx-auto h-1 bg-gray-600 border-0 rounded dark:bg-gray-700" />
            <div className="text-black font-semibold">Blind Rivets</div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="rounded-lg border-2 text-center">
          <img
            className="object-contain w-full h-48"
            src={revet2}
            alt="Nutsert"
          />
          <div className=" p-2">
            <hr className="w-10/12 mx-auto h-1 bg-gray-600 border-0 rounded dark:bg-gray-700" />
            <div className="text-black font-semibold">Nutsert</div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="rounded-lg border-2 text-center">
          <img
            className="object-contain w-full h-48"
            src={revet3}
            alt="Solid Rivets"
          />
          <div className=" p-2">
            <hr className="w-10/12 mx-auto h-1 bg-gray-600 border-0 rounded dark:bg-gray-700" />
            <div className="text-black font-semibold">Solid Rivets</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetalRivets;
