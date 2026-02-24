import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="footer"
      className="flex flex-row items-center justify-center mt-24 gap-8 py-16 px-4 bg-nexo-mint text-white rounded-t-3xl border"
    >
      <a
        href="https://wa.me/59895964325"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-2 text-2xl transition-all duration-200 bg-nexo-accent hover:bg-nexo-background py-3 px-6 rounded-full"
      >
        <FaWhatsapp />
        Contactar a <span className="font-bold">soporte</span>
      </a>
    </footer>
  );
}

export default Footer;