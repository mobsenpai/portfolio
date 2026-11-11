import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b-2 border-muted bg-surface-hard">
      <nav className="max-w-7xl mx-auto px-30 py-4 flex items-center justify-between text-foreground">
        <Link href="/" className="font-extrabold">
          Yash Raj
        </Link>
        <ul className="flex items-center gap-15">
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
