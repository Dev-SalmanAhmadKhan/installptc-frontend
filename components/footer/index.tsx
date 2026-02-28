import {
  Mail,
  Facebook,
  MessageCircle,
  MessageSquare,
  Send,
} from "lucide-react";
import { navigationData } from "@/data/navigation";
import { ROUTES } from "@/lib/routes";
import Image from "next/image";

const footerLinks = {
  quickLinks: navigationData,
  importantLinks: [
    { label: "Terms & Conditions", href: ROUTES.TERMS },
    { label: "Privacy Policy", href: ROUTES.PRIVACY },
    { label: "Cookies Policy", href: ROUTES.COOKIES },
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
            <div className="flex items-center gap-2">
              <Image
                src="/logos/logo.jpeg"
                alt="Adsnes Logo"
                width={100}
                height={32}
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A trusted performance advertising network built for real growth
              and measurable results.
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
            <div className="flex gap-4 mb-6 flex-wrap">
              <SocialIcon
                icon={<Facebook size={20} />}
                href="https://www.facebook.com/adsnes/"
                label="Facebook"
              />
              <SocialIcon
                icon={<MessageSquare size={20} />}
                href="https://teams.live.com/l/invite/FEAuBJ3mJFY77lw4QE?v=g1"
                label="Teams"
              />
              <SocialIcon
                icon={<MessageCircle size={20} />}
                href="https://discord.gg/R9U9eJYdbr"
                label="Discord"
              />
              <SocialIcon
                icon={<Send size={20} />}
                href="https://t.me/adsnes_support"
                label="Telegram"
              />
            </div>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <Mail size={14} />
                <a
                  href="mailto:support@adsnes.com"
                  className="hover:text-[#008888] transition-colors"
                >
                  support@adsnes.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-500 text-xs">
            © {currentYear} Adsnes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

function SocialIcon({ icon, href, label }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#008888] cursor-pointer transition-colors group relative"
      aria-label={label}
    >
      {icon}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-[#008888] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </a>
  );
}
