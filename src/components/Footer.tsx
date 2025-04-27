import { Linkedin } from "lucide-react";
import { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:items-start gap-8 text-center md:text-left">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center">
              <Image
                src="/logo-transparent2.png"
                alt="Lumify Labs Logo"
                width={50}
                height={50}
              />
            </div>
            <p className="text-sm text-slate-400 -mt-3">
              Transforming businesses through intelligent automation solutions.
            </p>
          </div>

          <div className="space-y-4 mt-8 md:mt-0 text-center md:text-left">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="group">
                <a
                  href="https://linkedin.com/company/lumifylabs-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <Linkedin
                    size={16}
                    className="mr-2 text-white group-hover:translate-x-1 transition-transform"
                  />
                  linkedin.com/company/lumifylabs-ai
                </a>
              </li>

              <li className="group">
                <a
                  href="https://linkedin.com/in/sevag-keosseian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <Linkedin
                    size={16}
                    className="mr-2 text-white group-hover:translate-x-1 transition-transform"
                  />
                  linkedin.com/in/sevag-keosseian
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 text-center">
          <p>© {new Date().getFullYear()} Lumify Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
