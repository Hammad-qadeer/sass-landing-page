import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInstagram from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
          <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
            <Image src={Logo} alt="Logo" width={40} className="relative"/>
          </div>
          <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Pricing</a>
            <a href="#">Help</a>
            <a href="#">Pricing</a>
          </nav>
          <div className="flex justify-center gap-4 mt-6">
            <SocialX />
            <SocialInstagram />
            <SocialLinkedin />
            <SocialYoutube />
          </div>

          <p className="mt-6">© 2025 SaaS. All rights reserved.</p>
        </div>
    </footer>
  );
};
