import React, { useSyncExternalStore } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
function NavBar() {
  const { data: session } = useSession();

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid fw-light">
        <Link href="/">
          <a className="navbar-brand">CloudE-BUS PLATFORM</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Operator
              </a>
              <ul className="dropdown-menu  rounded-0  ">
                {!session && (
                  <div>
                    <Link href="/operator/auth/login">
                      <a className="dropdown-item text-muted">Login</a>
                    </Link>
                    <Link href="/operator/auth/register">
                      <a className="dropdown-item text-muted">Register</a>
                    </Link>
                  </div>
                )}
                {session && (
                  <div>
                    <Link href="/operator">
                      <a className="dropdown-item text-muted">Management</a>
                    </Link>
                    <Link href="/operator/trip">
                      <a className="dropdown-item text-muted">
                        Trip Management
                      </a>
                    </Link>
                    <Link href="/operator/route">
                      <a className="dropdown-item text-muted">
                        Route Management
                      </a>
                    </Link>
                    <Link href="/operator/bus">
                      <a className="dropdown-item text-muted">Bus Management</a>
                    </Link>
                    <hr />
                    <div
                      className="dropdown-item text-muted text-center"
                      onClick={() => signOut()}
                    >
                      signout
                    </div>
                  </div>
                )}
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Passenger
              </a>
              <ul className="dropdown-menu  rounded-0">
                <Link href="/passenger/register">
                  <a className="dropdown-item text-muted">Register</a>
                </Link>
              </ul>
            </li>

            <li className="nav-item">
              <Link href="https://ebus-api.herokuapp.com/documentation/">
                <a target="_blank" className="nav-link">
                  Developer
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
