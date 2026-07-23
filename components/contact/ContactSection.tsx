import ContactIcon from "./ContactIcon";
import { contactItems } from "@/data/contact";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-neutral-200 py-32 dark:border-white/10"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-400">
            Contact
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
            Let's Connect
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            Every great opportunity starts with a conversation. Whether you have
            a role in mind, an exciting project, or simply want to exchange
            ideas about software engineering, AI, or cybersecurity, I'd love to
            hear from you.
          </p>
        </div>

        {/* Icons */}

        <div className="mt-16 flex flex-wrap items-start justify-center">
          {contactItems.map((item) => (
            <ContactIcon key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}