import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="flex justify-center my-2 text-xl">
        <a
          href="https://github.com/nikita-jare"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/JareNikita"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          <FaXTwitter />
        </a>
        <a href="mailto:nikita@example.com" className="mx-4">
          <MdEmail />
        </a>
        <a
          href="https://linkedin.com/nikita-jare"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          <FaLinkedin />
        </a>
      </div>
    </>
  );
};

export default Contact;
