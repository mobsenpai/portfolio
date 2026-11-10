import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-neutral-800">
      <nav className="mx-4">
        <Link href="/">~Portfolio</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
