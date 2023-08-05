import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";

import localFont from "@next/font/local";
import Navbar from "~/Containers/navbar.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />{" "}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
