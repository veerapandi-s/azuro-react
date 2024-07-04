import logo from './logo.svg';
import './App.css';
import { AzuroSDKProvider, useSports, Game_OrderBy } from '@azuro-org/sdk'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider, getDefaultWallets, getDefaultConfig } from '@rainbow-me/rainbowkit'
import { polygon } from 'viem/chains'
import { WagmiProvider } from 'wagmi'
import Test from './test';

const queryClient = new QueryClient()
const { wallets } = getDefaultWallets()

// const useData = () => {
//   const props = {
//     gameOrderBy: Game_OrderBy.Turnover,
//     filter: {
//       limit: 10,
//     }
//   }
//   const { loading, sports } = useSports({ ...props })

//   return {
//     sports,
//     loading,
//   }
// }

const chains = [
  polygon
]
 
const wagmiConfig = getDefaultConfig({
  appName: 'Azuro',
  appIcon: 'https://path-to-your-icon.com/icon.png',
  projectId: '2f82a1608c73932cfc64ff51aa38a87b', // get your own project ID - https://cloud.walletconnect.com/sign-in
  wallets,
  chains,
})

function App() {
  // const { loading, sports } = useData()

  // console.log("Loading", loading);
  // console.log("Spots", sports);

  return (
    <WagmiProvider config={wagmiConfig}>
    <QueryClientProvider client={queryClient}>
    <AzuroSDKProvider initialChainId={polygon.id}>
      <div className="App">
        <Test></Test>
      </div>
      
    </AzuroSDKProvider>
    </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
