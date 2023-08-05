import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";

import localFont from "@next/font/local";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../containers/navbar";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <NavBar />
      <Component {...pageProps} />{" "}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
