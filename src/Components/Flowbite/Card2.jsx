import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap styles are imported
import { Toaster, toast } from "react-hot-toast";

const Card2 = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [products, setProducts] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    // Log all form field values
    console.log({
      email,
      name,
      products,
      number,
      message,
    });

    try {
      const res = await fetch(
        "https://het-enterprise-server.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            name,
            products,
            number,
            message,
          }),
        }
      );

      const data = await res.json();
      console.log(data);

      if (data.status === 401 || !data) {
        toast.error("Error sending email. Please try again.");
      } else {
        toast.success("Your Email was Successfully Sent");
        // Clear the form fields
        setEmail("");
        setName("");
        setProducts("");
        setNumber("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Toaster component for rendering toast notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full p-4 sm:p-6 md:p-8 bg-pure-greys-25 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={sendEmail}>
          <h5 className="text-2xl font-medium text-gray-900 dark:text-white">
            Enquiry
          </h5>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <div className="flex-1">
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                {/* Products */}
                <div className="flex-1">
                  <label
                    htmlFor="Products"
                    className="block mb-2 text font-medium text-gray-900 dark:text-white"
                  >
                    Products
                  </label>
                  <input
                    type="text"
                    name="Products"
                    id="Products"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Products"
                    value={products}
                    onChange={(e) => setProducts(e.target.value)}
                    required
                  />
                </div>
                {/* Name */}
                <div className="flex-1">
                  <label
                    htmlFor="Name"
                    className="block mb-2 text font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 mt-4">
                {/* Email */}
                <div className="flex-1">
                  <label
                    htmlFor="Email"
                    className="block mb-2 text font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="email@gmail.com"
                    value={email}
                    required
                  />
                </div>
                {/* Phone Number */}
                <div className="flex-1">
                  <label
                    htmlFor="Number"
                    className="block mb-2 text font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="number"
                    id="number"
                    placeholder="+91 Phone Number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-4">
                {/* Message for us */}
                <label
                  htmlFor="message"
                  className="block mb-2 text font-medium text-gray-900 dark:text-white"
                >
                  Leave a Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Leave A Message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            {/* Address */}
            <div className="text-left flex-1">
              <div className="font-bold text-2xl">Find Us</div>
              <div className="font-bold text-xl pt-3 text-blue-700">
                Het Enterprise
              </div>
              <div className="font-semibold text-lg pt-2">
                Mr. Dharmesh Gandhi
              </div>
              <p>
                125, Narayan Dhruv Street, Office no: 102, 1st Floor, Masjid
                Bunder (West) Mumbai - 400003
              </p>

              <div className="flex font-semibold text-xl pt-3">
                <div className="pt-1 pr-3">
                  <FaPhone />
                </div>
                +91 8169174353
              </div>
              <div className="font-semibold text-xl pt-3 flex items-center">
                <div className="pt-1 pr-3">
                  <IoLogoWhatsapp />
                </div>
                +91 9619076787
              </div>
              <div>{/* <SimpleMap /> */}</div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Card2;
