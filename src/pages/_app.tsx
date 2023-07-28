import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { NavBar } from "~/components/NavBar";
import localFont from "@next/font/local";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className="m4-52 container ml-52">
        <NavBar />
        <Component {...pageProps} />{" "}
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
