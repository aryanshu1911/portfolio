import { primaryNavigation, type NavigationItem } from "@/lib/navigation";

type SiteNavigationProps = {
  items?: readonly NavigationItem[];
};

export function SiteNavigation({ items = primaryNavigation }: SiteNavigationProps) {
  return (
    <nav className="site-navigation" aria-label="Primary navigation">
      <ul className="site-navigation__list">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              className="site-navigation__link"
              href={item.href}
              aria-current={item.href === "/" ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
import Link from "next/link";
