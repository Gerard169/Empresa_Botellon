import { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem.jsx";

const DEFAULT_LINKS = [
  { text: "Nosotros", href: "/nosotros" },
  { text: "Programas", href: "/programas" },
  { text: "Eventos", href: "/eventos" },
  { text: "Blog", href: "/blog" },
  { text: "Galería", href: "/galeria" },
  { text: "Integración", href: "/integracion" },
  { text: "FAQ", href: "/faq" },
  { text: "Ayuda", href: "/help" },
  { text: "Contacto", href: "/contacto" },
  { text: "Donar", href: "/donacion" },
];

const Header = ({ links, logoText, logoHref }) => {
  const [open, setOpen] = useState(true);
  const items = links ?? DEFAULT_LINKS;
  const closeMenu = () => setOpen(false);

  return (
    <header>
      <Logo text={logoText} href={logoHref} />

      <button type="button" onClick={() => setOpen((prev) => !prev)} aria-expanded={open}>
        {open ? "Cerrar" : "Menú"}
      </button>

      <nav>
        <ul hidden={!open}>
          {items.map((item) => (
            <NavItem
              key={item.text}
              text={item.text}
              href={item.href}
              onClick={closeMenu}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;