import { FaFacebook, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import localFont from "@next/font/local";
import { Container } from "reactstrap";
const agustina = localFont({
  src: [
    {
      path: "../../public/fonts/Agustina.otf",
    },
  ],
  variable: "--font-agustina",
});
export default function NavBar() {
  return (
    <Container className="mx-32">
      <div className="navbar bg-base-100">
        <div className={`flex-1 ${agustina.variable} font-sans text-3xl`}>
          <a href="/" className="text-black no-underline opacity-80">
            Ahmad Sofanati
          </a>
        </div>
        <div className=" flex-none">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <a
                href="https://www.linkedin.com/in/ahmad-sofanati-81536b20a/"
                target="_blank"
                className="text-black opacity-90"
              >
                <FaLinkedinIn className="md:h-5 md:w-5" />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/ahmadsofanati/"
                target="_blank"
                className="text-black opacity-90"
              >
                <FaInstagram className="md:h-5 md:w-5" />
              </a>
            </li>
            <li>
              <a
                className="text-black opacity-90"
                target="_blank"
                href="https://github.com/ahmadsofanati56"
              >
                <FaGithub className="md:h-5 md:w-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
