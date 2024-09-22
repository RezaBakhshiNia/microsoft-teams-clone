"use client";
import Aside from "@/components/desktop/Aside";
import Body from "@/components/desktop/Body";
import TitleBar from "@/components/desktop/TitleBar";

const page = () => {
  return (
    <div className="min-h-screen">
      <TitleBar />
      <div className="flex items-center">
      <Aside />
      <Body />
      </div>
    </div>
  );
};

export default page;
