import Link from "next/link";

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dashboard-container">
      <nav className="dashboard-navigation">
        <ul>
          <li>
            <Link href={"/dashboard/chemical"}>Chemical</Link>
          </li>
          <li>
            <Link href={"/dashboard/vaccination"}>Vaccination</Link>
          </li>
          <li>
            <Link href={"/dashboard/microscopy"}>Microscopy</Link>
          </li>
        </ul>
      </nav>
      <div className="dashboard-content">{children}</div>
    </div>
  );
}
