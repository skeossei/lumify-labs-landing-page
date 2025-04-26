"use client";

import { InlineWidget } from "react-calendly";

const CallPage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-6xl h-full">
        <InlineWidget
          url="https://calendly.com/sev-keoss/lumify-labs-intro-call"
          styles={{ height: "100%", width: "100%" }}
          pageSettings={{
            backgroundColor: "ffffff",
            hideGdprBanner: true,
          }}
        />
      </div>
    </div>
  );
};

export default CallPage;
