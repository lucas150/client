import NavbarFlowbite2 from "../../Components/Flowbite/NavbarFlowbite2.jsx";
import Body from "../Body/index.js";
import PhotoSwipe from "../../Components/Flowbite/PhotoSwipe.jsx";
import Card2 from "../../Components/Flowbite/Card2.jsx";
import Footer from "../../Components/Footer";
import Mailbox from "../MailBox/mailbox.js";

const Home = () => {
  return (
    <>
      <NavbarFlowbite2 />
      <Body />
      <PhotoSwipe />
      <Card2 />
      {/* <Mailbox /> */}
      <Footer />
    </>
  );
};
export default Home;
