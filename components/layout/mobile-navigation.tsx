"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { primaryNavigation, type NavigationItem } from "@/lib/navigation";

type MobileNavigationProps = {
  items?: readonly NavigationItem[];
};

export function MobileNavigation({ items = primaryNavigation }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isOpen && !dialog.open) {
      dialog.showModal();
    }

    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="mobile-menu-trigger"
        aria-label="Open navigation menu"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <Menu aria-hidden="true" size={20} />
      </button>
      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        className="mobile-navigation"
        aria-labelledby="mobile-navigation-title"
        onCancel={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsOpen(false);
          }
        }}
      >
        <div className="mobile-navigation__content">
          <div className="mobile-navigation__topline">
            <strong id="mobile-navigation-title">Navigation</strong>
            <button
              type="button"
              className="mobile-navigation__close"
              aria-label="Close navigation menu"
              onClick={() => setIsOpen(false)}
            >
              <X aria-hidden="true" size={20} />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            <ul className="mobile-navigation__list">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    className="mobile-navigation__link"
                    href={item.href}
                    aria-current={item.href === "/" ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </dialog>
    </>
  );
}
