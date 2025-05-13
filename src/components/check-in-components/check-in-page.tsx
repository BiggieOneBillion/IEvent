import { useLocation } from "react-router-dom";
import { userProp, userStore } from "../../store/GlobalStore";
import Banner from "./banner";
import CheckInNav from "./check-in-nav";
import PinCodeVerify from "./pincode-verify";
import BarCodeVerify from "./barcode-verify";

const CheckInPage = () => {
  const location = useLocation();
  const event = location.state?.event;
  return (
    <section>
      <main className="flex flex-col h-[100dvh]">
        {/* top section */}
        <div className="border-b">
          <Banner />
          <section className="container mx-auto  px-2 md:px-0 h-[50px] flex items-center">
            <CheckInNav />
          </section>
        </div>
        {/* bottom section */}
        <section className="flex-1 bg-black flex items-center justify-center relative">
          <img
            src={event.eventImg}
            alt="event-image"
            className="h-full w-full absolute top-0 right-0 object-cover"
          />
          <div className="relative z-10">
            {event.authType === "pincode" ? (
              <PinCodeVerify />
            ) : (
              <BarCodeVerify />
            )}
          </div>
        </section>
      </main>
    </section>
  );
};

export default CheckInPage;
