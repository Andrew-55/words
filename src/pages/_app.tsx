import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import { client } from "@/entities";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <ToastContainer position="bottom-right" />
    </>
  );
}
