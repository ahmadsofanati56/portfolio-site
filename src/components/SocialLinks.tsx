import { Button } from "reactstrap";
import { socialLinks } from "../portfolio";
import { VscGithub } from "react-icons/vsc";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
export const SocialLinks = () => {
  return (
    <div className="btn-wrapper my-6 ">
      {socialLinks.github && (
        <Button
          className="rounded-circle w-12"
          color="dark"
          rel="noopener"
          aria-label="Github"
          href={socialLinks.url}
          target="_blank"
        >
          <i className="felx-col flex h-full  items-center justify-center align-middle">
            <VscGithub />{" "}
          </i>
        </Button>
      )}
      {socialLinks.linkedin && (
        <Button
          className="rounded-circle  ml-1 w-12 "
          color="primary"
          rel="noopener"
          aria-label="Linkedin"
          href={socialLinks.linkedin}
          target="_blank"
        >
          <i className="felx-col flex h-full  items-center justify-center align-middle">
            <FaLinkedinIn className="" />
          </i>
        </Button>
      )}
      {socialLinks.instagram && (
        <Button
          className="rounded-circle  ml-1 w-12 "
          color="danger"
          rel="noopener"
          aria-label="Instagram"
          href={socialLinks.instagram}
          target="_blank"
        >
          <i className="felx-col flex h-full  items-center justify-center align-middle">
            <FaInstagram className="" />
          </i>
        </Button>
      )}
    </div>
  );
};
