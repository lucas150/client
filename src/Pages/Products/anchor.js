import img3 from "../../assets/img3.jpg";
import anchor2 from "../../assets/anchor2.jpg";
import anchor3 from "../../assets/anchor3.jpg";
import anchor4 from "../../assets/anchor4.jpg";

const AnchorFastner = () => {
  return (
    <div className="mt-5 ml-5">
      <div className="text-red-700 font-bold text-lg">Anchor Fateners</div>
      <hr className="my-2 bg-gray-200 border-0 h-px dark:bg-gray-700" />
      <p className="text-gray-600">
        The anchor Fasteners that we provide is of exceptional quality and is
        procured only from the reputed vendors of the market. Our Anchor
        Fasteners are subjected to stringent quality tests with the objective of
        eliminating each and every possibility of defect from it.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 pb-2">
        {/* Image 1 */}
        <div className="rounded-lg border-2 text-center">
          <img
            className="object-contain w-full h-48"
            src={img3}
            alt="Wedge Anchor"
          />
          <div className=" p-2">
            <hr className="w-10/12 mx-auto h-1 bg-gray-600 border-0 rounded dark:bg-gray-700" />
            <div className="text-black font-semibold">Wedge Anchor</div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="rounded-lg border-2 text-center">
          <img
            className="object-contain w-full h-48"
            src={anchor2}
            alt="Bullet Fasteners"
          />
          <div className=" p-2">
            <hr className="w-10/12 mx-auto h-1 bg-gray-600 border-0 rounded dark:bg-gray-700" />
            <div className="text-black font-semibold">Bullet Fasteners</div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="rounded-lg border-2 text-center">
          <img
            className="object-contain w-full h-48"
            src={anchor3}
            alt="Anchor Fasteners"
          />
          <div className=" p-2">
            <hr className="w-10/12 mx-auto h-1 bg-gray-600 border-0 rounded dark:bg-gray-700" />
            <div className="text-black font-semibold">Anchor Fasteners</div>
          </div>
        </div>

        {/* image 4 */}
        <div className="rounded-lg border-2 text-center">
          <img
            className="object-contain w-full h-48"
            src={anchor4}
            alt="Sleeve Anchor"
          />
          <div className=" p-2">
            <hr className="w-10/12 mx-auto h-1 bg-gray-600 border-0 rounded dark:bg-gray-700" />
            <div className="text-black font-semibold">Sleeve Anchor</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnchorFastner;
