import { SiHelpdesk } from "react-icons/si";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <SiHelpdesk className="text-3xl" />
      <h1>Radu Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
