import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
import { RequestAirdrop } from './Airdrop';
import { ShowSolBalance } from './ShowBal';

function App() {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/WW0BJ-QXGiF-wVMv85cwAmKhnz-p-XdN"}>
          <WalletProvider wallets={[]} autoConnect>
              <WalletModalProvider>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                  <WalletMultiButton />
                  <WalletDisconnectButton />
                </div>

                <RequestAirdrop />
                <ShowSolBalance />
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
}

export default App