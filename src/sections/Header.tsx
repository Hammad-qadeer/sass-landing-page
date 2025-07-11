import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex items-center justify-center py-3 bg-black text-white gap-3 text-sm">
        <p className="text-white/60 hidden md:block">
          Streamline your productivity and boost your productivity
        </p>
        <div className="inline-flex items-center gap-1">
          <p>Get started for free</p>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Logo" width={40} height={40} />
            <MenuIcon className="w-4 h-4 md:hidden" />
            <nav className="hidden md:flex items-center gap-6 text-black/60">
              <a href="#">Home</a>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Contact</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Get started
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
