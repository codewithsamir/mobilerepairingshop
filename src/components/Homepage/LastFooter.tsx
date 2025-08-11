import { Facebook, X, Instagram } from "lucide-react";
import {
  phoneSeries,
  locations,
  middleLinksLeft,
  middleLinksRight,
  covidNotice,
  copyright,
} from "@/lib/data";

export default function LastFooter() {
  return (
    <footer
      className="text-white relative"
      style={{
        backgroundImage: "url('/assets/construction-5-buid.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Links */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 border-b border-gray-700 pb-8">
          {phoneSeries.map((series) => (
            <div key={series.title}>
              <h3 className="font-bold text-blue-400">{series.title}</h3>
              <ul className="space-y-1 text-sm">
                {series.models.map((model) => (
                  <li key={model}>{model}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-gray-700">
          {/* Left */}
          <div>
            <div className="font-bold text-lg">iCloud Repairing</div>
            <ul className="mt-4 space-y-1 text-sm">
              {locations.map((loc) => (
                <li key={loc}>{loc}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-blue-400">{covidNotice}</p>
          </div>

          {/* Middle */}
          <div className="text-sm space-y-2">
            {middleLinksLeft.map((link) => (
              <div key={link}>{link}</div>
            ))}
          </div>

          {/* Right */}
          <div className="text-sm space-y-2">
            {middleLinksRight.map((link) => (
              <div key={link}>{link}</div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-xs">
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5" />
            <X className="w-5 h-5" />
            <Instagram className="w-5 h-5" />
          </div>
          <div className="mt-4 md:mt-0">{copyright}</div>
        </div>
      </div>
    </footer>
  );
}
