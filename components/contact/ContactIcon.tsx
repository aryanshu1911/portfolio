"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactItem } from "@/data/contact";

interface ContactIconProps {
  item: ContactItem;
}

function BrandIcon({ name }: { name: ContactItem["icon"] }) {
  switch (name) {
    case "github":
      return (
        <svg
          viewBox="0 0 24 24"
          width={35}
          height={35}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 .297a12 12 0 0 0-3.794 23.39c.6.111.82-.258.82-.577v-2.256c-3.338.726-4.042-1.416-4.042-1.416-.547-1.387-1.336-1.757-1.336-1.757-1.091-.746.082-.731.082-.731 1.205.084 1.839 1.236 1.839 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.333-5.467-5.93 0-1.311.469-2.382 1.236-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 6.004 0c2.291-1.552 3.297-1.23 3.297-1.23.654 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.222 0 4.609-2.807 5.623-5.479 5.921.43.371.814 1.103.814 2.222v3.293c0 .322.216.694.825.576A12.003 12.003 0 0 0 12 .297Z" />
        </svg>
      );

    case "linkedin":
      return (
        <svg
          viewBox="0 0 24 24"
          width={35}
          height={35}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.344V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.27 2.372 4.27 5.456v6.285zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.119 20.452H3.555V9h3.564v11.452z" />
        </svg>
      );

    case "gmail":
      return (
        <svg
          viewBox="0 0 24 24"
          width={35}
          height={35}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M1.5 4.5v15h3V8.25L12 13.5l7.5-5.25V19.5h3v-15h-2.25L12 10.5 3.75 4.5H1.5z" />
        </svg>
      );
  }
}

export default function ContactIcon({ item }: ContactIconProps) {
  return (
    <Link
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className="group flex w-52 flex-col items-center text-center"
    >
      <div
        className={`
          flex h-16 w-16 items-center justify-center
          text-neutral-500
          transition-all
          duration-300
          group-hover:-translate-y-2
          group-hover:scale-110
          ${item.hoverColor}
        `}
      >
        <BrandIcon name={item.icon} />
      </div>

      <div className="mt-5 h-14">
        <h3
          className="
            translate-y-2
            opacity-0
            transition-all
            duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
            text-lg
            font-semibold
            text-neutral-900
            dark:text-white
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-1
            translate-y-2
            opacity-0
            transition-all
            delay-75
            duration-300
            text-sm
            text-neutral-500
            dark:text-neutral-400
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          {item.subtitle}
        </p>
      </div>

      <ArrowUpRight
        size={18}
        className="
          mt-3
          opacity-0
          transition-all
          duration-300
          group-hover:translate-x-1
          group-hover:opacity-100
          text-neutral-500
        "
      />
    </Link>
  );
}