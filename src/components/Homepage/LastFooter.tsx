import { Facebook, X, Instagram} from "lucide-react";

export default function LastFooter() {
  return (
    <footer
      className=" text-white relative"
      style={{
        backgroundImage: "url('/your-image.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Links */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 border-b border-gray-700 pb-8">
          <div>
            <h3 className="font-bold text-blue-400">12 SERIES</h3>
            <ul className="space-y-1 text-sm">
              <li>iPhone 12 Pro Max</li>
              <li>iPhone 12 Pro</li>
              <li>iPhone 12</li>
              <li>iPhone 12 Mini</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-blue-400">11 SERIES</h3>
            <ul className="space-y-1 text-sm">
              <li>iPhone 11 Pro Max</li>
              <li>iPhone 11 Pro</li>
              <li>iPhone 11</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-blue-400">10 SERIES</h3>
            <ul className="space-y-1 text-sm">
              <li>iPhone Xs Max</li>
              <li>iPhone Xs</li>
              <li>iPhone Xr</li>
              <li>iPhone X</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-blue-400">8 SERIES</h3>
            <ul className="space-y-1 text-sm">
              <li>iPhone 8 Plus</li>
              <li>iPhone 8</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-blue-400">7 SERIES</h3>
            <ul className="space-y-1 text-sm">
              <li>iPhone 7 Plus</li>
              <li>iPhone 7</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-blue-400">6 SERIES</h3>
            <ul className="space-y-1 text-sm">
              <li>iPhone 6s Plus</li>
              <li>iPhone 6s</li>
              <li>iPhone 6 Plus</li>
              <li>iPhone 6</li>
            </ul>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-gray-700">
          {/* Left */}
          <div>
            <div className="font-bold text-lg">ITECHS</div>
            <ul className="mt-4 space-y-1 text-sm">
              <li>San Francisco, California</li>
              <li>San Bruno, California</li>
              <li>San Mateo, California</li>
            </ul>
            <p className="mt-4 text-xs">
              <span className="text-blue-400">COVID19 - METHODS & PROCEDURES</span> - CONTACTLESS & CURBSIDE SERVICES
            </p>
          </div>
          {/* Middle */}
          <div className="text-sm space-y-2">
            <div>HOME</div>
            <div>SF HEADQUARTERS</div>
            <div>MY ACCOUNT | LOGIN</div>
            <div>FAQ</div>
          </div>
          {/* Right */}
          <div className="text-sm space-y-2">
            <div>SCHEDULE SERVICE</div>
            <div>HOW IT WORKS</div>
            <div>QUALITY STANDARDS</div>
            <div>CONTACT US</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-xs">
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5" />
            <X className="w-5 h-5" />
            <Instagram className="w-5 h-5" />
            {/* <TikTok className="w-5 h-5" /> */}
          </div>
          <div className="mt-4 md:mt-0">
            © 2022 iPhone Repair SF | ITECHS Properties, Inc. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
