import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Hydration} from "react-async-states"
import {myBackendContext} from "./becontext";

export default function App({ Component, pageProps }: AppProps) {
  return <Hydration context={myBackendContext}><Component {...pageProps} /></Hydration>
}
