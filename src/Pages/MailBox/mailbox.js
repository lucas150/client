import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const Mailbox = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const sendEmail = async (e) => {
    e.preventDefault();

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 401 || !data) {
      console.log("error");
    } else {
      setShow(true);
      setEmail("");
      console.log("Email sent");
    }
  };

  return (
    <>
      {show ? (
        <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          Your Email Succesfully Send
        </Alert>
      ) : (
        ""
      )}
      <div className="container mt-2">
        <div className="d-flex justify-content-center">
          <h2>Send Email With React & NodeJs</h2>
          {/* <img
            src="/gmail.png"
            alt="gmail img"
            className="mx-3"
            style={{ width: "50px" }}
          /> */}
        </div>
        <div className="d-flex justify-content-center">
          <Form className="mt-2 col-lg-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Your Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={sendEmail}>
              Send
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Mailbox;

// <div>
//   <div class="w-full p-4 bg-pure-greys-25 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
//     <form class="space-y-6" action="#">
//       <h5 class="text-xl font-medium text-gray-900 dark:text-white">
//         Enquiry
//       </h5>
//       <div class="flex gap-4">
//         <div class="basis-3/4">
//           <div class="flex items-center flex-row gap-4 pl-2">
//             {/* Products */}
//             <div class="basis-2/4">
//               <label
//                 for="Products"
//                 class="block mb-2 text font-medium text-gray-900 dark:text-white"
//               >
//                 Products
//               </label>
//               <input
//                 type="text"
//                 name="Products"
//                 id="Products"
//                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                 placeholder="Products"
//               />
//             </div>
//             {/* Name */}
//             <div class="basis-2/4">
//               <label
//                 for="Name"
//                 class="block mb-2 text font-medium text-gray-900 dark:text-white"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="Name"
//                 id="Name"
//                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                 placeholder="Name"
//                 required
//               />
//             </div>
//           </div>
//           <div class="flex items-center flex-row gap-4 p-2">
//             {/* Email */}
//             <div class="basis-2/4">
//               <label
//                 for="Email"
//                 class="block mb-2 text font-medium text-gray-900 dark:text-white"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                 placeholder="email@gmail.com"
//                 required
//               />
//             </div>
//             <div class="basis-2/4">
//               <label
//                 for="Number"
//                 class="block mb-2 text font-medium text-gray-900 dark:text-white"
//               >
//                 Phone Number
//               </label>
//               <input
//                 type="number"
//                 name="number"
//                 id="number"
//                 placeholder="+91 Phone Number "
//                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//               />
//             </div>
//           </div>
//           <div class="flex items-center flex-row gap-4 p-2">
//             {/* Phone Number */}
//           </div>
//           {/* Message for us */}
//           <div className="p-1">
//             <label
//               for="text"
//               class="block mb-2 text font-medium text-gray-900 dark:text-white"
//             >
//               Leave a Message
//             </label>
//             <textarea
//               rows="4"
//               col="50     "
//               name="message"
//               id="message"
//               placeholder="Leave A Message "
//               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//             />
//           </div>
//         </div>
//         {/* address */}
//         <div class="text-left">
//           <div class="font-bold text-2xl">Find Us</div>
//           <div class="font-bold text-xl pt-3 text-blue-700">
//             Het Enterprise
//           </div>
//           <div class="font-semibold text-lg pt-2">Mr. Dharmesh Gandhi</div>
//           <p class="">
//             125, Narayan Dhruv Street, Office no : 102,1st Floor, Masjid
//             Bunder (West)  Mumbai - 400003
//           </p>
//           <div class="flex font-semibold text-xl pt-3">
//             <div className="pt-1 pr-3">
//               <FaPhone />
//             </div>
//             +91 8169174353
//           </div>
//           <div class="font-semibold text-xl pt-3 flex flex-wrap">
//             <div className="pt-1 pr-3">
//               <IoLogoWhatsapp />
//             </div>
//             +91 9619076787
//           </div>
//         </div>
//       </div>

//       <button
//         type="submit"
//         class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         Submit
//       </button>
//     </form>
//   </div>
// </div>
