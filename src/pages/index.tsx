import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "reactstrap";
import { ContactUs } from "~/components/ContactUs";
import Seo from "../components/SEO";

import { Education } from "~/containers/Education";
import { Proficiency } from "~/containers/Proficiency";
import Projects from "~/containers/Projects";
import { Feedbacks } from "~/containers/feedbacks";
import { Greetings } from "~/containers/greetings";
import Skills from "~/containers/skills";
import { api } from "~/utils/api";

export default function Home() {
  return (
    <>
      <Seo />

      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Feedbacks />
      <Projects />
      <ContactUs />
    </>
  );
}
