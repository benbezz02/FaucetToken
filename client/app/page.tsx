"use client"
import { ConnectButton } from "@/components/ConnectButton";
import Image from "next/image";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount()

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#1b1e36] text-white relative">
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <h1 className="text-lg font-semibold">Faucet</h1>
        {isConnected && <ConnectButton />}
      </div>

      {/* Center Card */}
      {!isConnected && (
        <div className="flex-grow flex items-center justify-center">
          <div className="bg-[#2a2d50] p-8 rounded-xl shadow-lg text-center w-96">
            <h2 className="text-xl font-bold">Choose a network to start</h2>
            <p className="text-gray-400 text-sm mt-2">
              Connect your wallet, then choose a network to view delegation data specific to that network.
            </p>
            <ConnectButton />
          </div>
        </div>
      )}

      {/* Footer with City Illustration */}
      <div className="absolute bottom-0 w-full flex justify-between px-8 pb-4">
      </div>
    </div>
  );
}