import { FooterLink } from "./FooterLink.jsx";
 
const QUICK_LINKS = [
  { text: "Nosotros", href: "/nosotros" },
  { text: "Programas", href: "/programas" },
  { text: "Eventos", href: "/eventos" },
  { text: "Blog", href: "/blog" },
  { text: "Contacto", href: "/contacto" },
];
 
const SUPPORT_LINKS = [
  { text: "FAQ", href: "/faq" },
  { text: "Ayuda", href: "/help" },
  { text: "Galería", href: "/galeria" },
  { text: "Integración", href: "/integracion" },
  { text: "Donar", href: "/donacion" },
];
 
export const Footer = ({ orgName = "Fundación", email = "contacto@fundacion.org" }) => {
  const year = new Date().getFullYear();
 
  return (
    <footer>
      <div>
        <p>{orgName}</p>
        <p>{email}</p>
      </div>
 
      <nav>
        <p>Enlaces</p>
        <ul>
          {QUICK_LINKS.map((link) => (
            <FooterLink key={link.text} text={link.text} href={link.href} />
          ))}
        </ul>
      </nav>
 
      <nav>
        <p>Soporte</p>
        <ul>
          {SUPPORT_LINKS.map((link) => (
            <FooterLink key={link.text} text={link.text} href={link.href} />
          ))}
        </ul>
      </nav>
 
      <p>
        © {year} {orgName}. Todos los derechos reservados.
      </p>
    </footer>
  );
};
