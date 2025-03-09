import { useAppKitAccount } from "@reown/appkit/react";

export default function useAddress() {
    const { address, isConnected, caipAddress, status, embeddedWalletInfo } = useAppKitAccount();

    return address;
}