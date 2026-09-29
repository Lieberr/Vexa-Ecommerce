import VexaLogo from "./VexaLogo";
import {Link} from "react-router-dom"

export default function Footer() {
    const links = {
        Shop: [
            {label: "Fashion", page: "shop" as const},
            {label: "Electronics", page: "shop" as const},
            {label: "Accessories", page: "shop" as const},
            {label: "Lifestyle", page: "shop" as const},
            {label: "New Arrivals", page: "shop" as const}
        ],
        Company: [
            {label: "About Vexa", page: "about" as const},
            {label: "Careers", page: "about" as const},
            {label: "Press", page: "about" as const}
        ],
        Support: [
            {label: "My account", page: "account" as const},
            {label: "Orders", page: "account" as const},
            {label: "Returns", page: "about" as const},
            {label: "Contact", page: "about" as const}
        ]
    }

return (
    <footer className="text-white" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to={"/"} className="text-white mb-4 block hover:opacity-75 transition-opacity" aria-label="Ir para home">
                <VexaLogo height={24} />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-[200px]">
              Curated products designed to bring quality and simplicity into everyday life.
            </p>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Twitter', 'Pinterest'].map(s => (
                <a key={s} href="#" className="text-white/40 hover:text-white/80 transition-colors text-xs font-medium">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-4">
                {group}
              </p>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item.label}>
                    <Link to={`/${item.page}`} className="text-sm text-white/60 hover:text-white transition-colors">
                        {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; 2026 Vexa. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(l => (
              <a key={l} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}