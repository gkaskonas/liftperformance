import { getBookingButtonText } from "@/lib/utils";
import { PopupWidget } from "react-calendly";

export default function Calendly() {
  const getRootEelement = () => {
    const element = document.getElementById("hero");

    if (!element) {
      throw new Error("Root element not found");
    }
    return element;
  };
  return (
    <PopupWidget
      url="https://calendly.com/liftperformancehk/consultation"
      rootElement={getRootEelement()}
      text={getBookingButtonText()}
      textColor="#ffffff"
      color="#BF1E2C"
      branding={false}
      pageSettings={{
        hideEventTypeDetails: true,
        hideGdprBanner: true,
        hideLandingPageDetails: true,
      }}
    />
  );
}
