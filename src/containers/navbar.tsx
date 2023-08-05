import { FaFacebook } from "react-icons/fa";
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
        <div className="flex-1">
          <a
            className={`btn btn-ghost text-xl normal-case ${agustina.variable} font-sans `}
          >
            Ahmad Sofanati
          </a>
        </div>
        <div className=" flex-none">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <a>
                <FaFacebook className="md:h-5 md:w-5" />
              </a>
            </li>

            <li>
              <a>
                <FaInstagram className="md:h-5 md:w-5" />
              </a>
            </li>
            <li>
              <a>
                <FaGithub className="md:h-5 md:w-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
