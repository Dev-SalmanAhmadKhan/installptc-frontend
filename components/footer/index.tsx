import { Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { navigationData } from "@/data/navigation";

const footerLinks = {
  quickLinks: navigationData,
  importantLinks: [
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
} as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#002525] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-black">
              INSTALL<span className="text-[#008888]">PTC</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The most trusted pay-per-install network for advertisers and
              publishers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-[#008888]">Quick Links</h4>
            <ul className="text-gray-400 space-y-3 text-sm">
              {footerLinks.quickLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-[#008888] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-bold mb-6 text-[#008888]">Important Links</h4>
            <ul className="text-gray-400 space-y-3 text-sm">
              {footerLinks.importantLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-[#008888] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-bold mb-6 text-[#008888]">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <SocialIcon
                icon={<Facebook size={20} />}
                href="https://facebook.com"
              />
              <SocialIcon
                icon={<Twitter size={20} />}
                href="https://twitter.com"
              />
              <SocialIcon
                icon={<Instagram size={20} />}
                href="https://instagram.com"
              />
            </div>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <Mail size={14} />
                <a
                  href="mailto:support@installptc.com"
                  className="hover:text-[#008888] transition-colors"
                >
                  support@installptc.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-500 text-xs">
            © {currentYear} InstallPTC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

function SocialIcon({ icon, href }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#008888] cursor-pointer transition-colors"
    >
      {icon}
    </a>
  );
}
