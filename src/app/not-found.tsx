import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, MapPin } from "lucide-react";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="relative mb-8 mx-auto w-64 h-64">
            {/* Animated search elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <Search className="text-sky-300 w-32 h-32" strokeWidth={1.5} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-3/5">
                  <span className="text-6xl font-bold text-sky-500">?</span>
                </div>
              </div>
            </div>

            {/* Animated floating elements */}
            <div className="absolute top-1/4 left-1/4 animate-pulse">
              <div className="w-8 h-8 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center">
                <span className="text-sky-500 font-bold">4</span>
              </div>
            </div>
            <div
              className="absolute top-1/3 right-1/3 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-8 h-8 rounded-full bg-sky-200 border border-sky-300 flex items-center justify-center">
                <span className="text-sky-600 font-bold">0</span>
              </div>
            </div>
            <div
              className="absolute bottom-1/4 right-1/4 animate-pulse"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="w-8 h-8 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center">
                <span className="text-sky-500 font-bold">4</span>
              </div>
            </div>

            {/* 404 text */}
            <div className="absolute bottom-0 inset-x-0 flex items-center justify-center">
              <h1 className="text-7xl font-bold text-sky-500">404</h1>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 ">
            Oops! Page <span className="text-sky-500">Not Found</span>
          </h2>

          <p className="text-xl text-slate-600 mb-6 max-w-2xl mx-auto">
            We&apos;ve looked everywhere, but this page seems to have gone on
            vacation without telling anyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-sky-500 hover:bg-sky-600 text-white"
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Homepage
              </Link>
            </Button>
          </div>

          <div className="p-6 rounded-lg bg-slate-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="h-6 w-6 text-sky-500" />
              <h3 className="text-xl font-semibold text-sky-700">
                Lost? Don&apos;t worry!
              </h3>
            </div>
            <p className="text-slate-600">
              Sometimes the best discoveries happen when you&apos;re lost. But
              if you&apos;d rather find your way, head back to our homepage with
              the button above.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
