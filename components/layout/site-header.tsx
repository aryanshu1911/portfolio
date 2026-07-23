import { Container } from "@/components/ui/container";
import { SiteNavigation } from "@/components/layout/site-navigation";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header id="site-header" className="site-header">
      <Container className="site-header__inner">
        <Link className="site-brand" href="/" aria-label={`${siteConfig.name} home`}>
          {siteConfig.name}
        </Link>
        <SiteNavigation />
        <div className="header-actions">
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
import Link from "next/link";
