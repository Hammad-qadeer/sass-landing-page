import acmeLogo from "@/assets/logo-acme.png";
import qualcommLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import calisthenicsLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden mask-gradient">
        <div className="flex gap-14 flex-none">
          <Image src={acmeLogo} alt="Acme Logo" className="logo-ticker-image"/>
          <Image src={qualcommLogo} alt="Qualcomm Logo" className="logo-ticker-image"/>
          <Image src={echoLogo} alt="Echo Logo" className="logo-ticker-image"/>
          <Image src={calisthenicsLogo} alt="Calisthenics Logo" className="logo-ticker-image"/>
          <Image src={pulseLogo} alt="Pulse Logo" className="logo-ticker-image"/>
          <Image src={apexLogo} alt="Apex Logo" className="logo-ticker-image" />
          </div>
        </div>
      </div>
    </div>
  );
};
