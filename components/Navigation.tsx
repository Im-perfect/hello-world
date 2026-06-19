import Link from "next/link";

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/practice", label: "Practice" },
  { href: "/mistakes", label: "Mistake bank" },
  { href: "/progress", label: "Progress" },
];

export function Navigation() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        Dutch AI Tutor
      </Link>
      <nav aria-label="Main navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
