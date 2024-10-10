"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function TopNav() {
  const { data, status, loading } = useSession();
  console.log("11111111111111111111111111111");

  console.log(data);
  console.table({ data, status, loading });

  return (
    <nav className="nav shadow p-2 justify-content-between mb-3">
      <Link href="/" className="nav-link">
        🛒 NEXTECOM
      </Link>

      <div className="d-flex">
        <Link className="nav-link" href="/login">
          Login
        </Link>

        <Link className="nav-link" href="/register">
          Register
        </Link>
      </div>
    </nav>
  );
}
