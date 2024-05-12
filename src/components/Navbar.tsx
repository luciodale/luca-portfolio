import classNames from "classnames";
import { useState } from "react";
import { navLinks, navbarHeight } from "../globals";
import { Logo } from "./Logo";

export default function Navbar({ currentHref }: { currentHref: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linkClasses = "items-center gap-8 uppercase tracking-widest text-xs";

  return (
    <nav
      style={{ height: `${navbarHeight}px` }}
      className="relative bg-dark z-50"
    >
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-4 py-1">
        <a
          href="/"
          className="flex items-center h-full py-1 justify-center space-x-3 rtl:space-x-reverse"
        >
          <Logo className="fill-white h-full" />
        </a>

        <button
          id="burger-button"
          onClick={() => {
            if (isMenuOpen) document.body.style.overflow = "auto";
            else document.body.style.overflow = "hidden";

            setIsMenuOpen(!isMenuOpen);
          }}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-lg p-2 text-sm text-white focus:outline-none lg:hidden"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            ></path>
          </svg>
        </button>
        <div className="gap-10 hidden lg:flex">
          {navLinks.map(({ href, name }) => (
            <a
              key={href}
              href={href}
              className={classNames(
                currentHref === href
                  ? "text-accent"
                  : "text-white hover:text-gray-200 transition-colors",
                "rounded text-center font-light uppercase",
              )}
            >
              {name}
            </a>
          ))}
        </div>
      </div>

      {/*  mobile! */}
      <div
        className={classNames(
          "fixed left-0 flex h-[100dvh] w-full flex-col overflow-hidden backdrop-blur-sm bg-dark/90 transition-all xl:hidden",
          linkClasses,
          {
            "max-h-0": !isMenuOpen,
            "max-h-screen pb-4": isMenuOpen,
          },
        )}
      >
        {navLinks.map(({ name, href }) => {
          const active = currentHref === href;
          return (
            <a
              key={href}
              className={classNames(
                "flex items-center text-xl transition-colors first-of-type:pt-8",
                active ? "font-bold text-accent" : "text-white ",
              )}
              href={href}
            >
              {name}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
