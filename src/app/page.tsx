import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import HeadLine from "@/components/HeadLine";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Services from "@/components/Services";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <main>
        <HeadLine />
        <Services />
        <Process />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
