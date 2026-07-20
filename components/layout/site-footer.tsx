import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <p>
          © {year} {siteConfig.name}
        </p>
        <a className="site-footer__link" href="#site-header">
          Back to Top
        </a>
      </Container>
    </footer>
  );
}
