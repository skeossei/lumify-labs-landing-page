import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FC } from "react";
import Logo from "./Logo";

const Footer: FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo variant="white" />
            <p className="text-sm text-slate-400">
              Transforming businesses through intelligent automation solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a
                  href="mailto:info@automateai.com"
                  className="hover:text-white transition-colors"
                >
                  info@automateai.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Lumify Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
