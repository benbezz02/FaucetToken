"use client"

import { CentreCard } from "@/components/CentreCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-800 text-white relative">

      <section>
        {/* Header */}
        <div className="flex justify-between items-center p-6">
          <h1 className="text-3xl font-semibold">Faucet</h1>
        </div>
      </section>

      <section>
        {/* Center Card */}
        <div className="flex-grow flex items-center justify-center">
          <CentreCard />
        </div>
      </section>

      <section>
        {/* Footer with City Illustration */}
        <div className="absolute bottom-0 w-full flex justify-between px-8 pb-4">
        </div>
      </section>
    </div>
  );
}