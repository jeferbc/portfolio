import "../index.scss";
import NoSsr from "../utils/NoSsr";

const BaseCSS = ({ css = "*{box-sizing:border-box}body{margin:0}" }) => (
  <style
    dangerouslySetInnerHTML={{
      __html: css,
    }}
  />
);

const siteTitle = "Jefferson Bernal Cardona | Senior Ruby on Rails Developer";
const siteDescription = "Senior Full-Stack Developer with 8+ years building production web applications with Ruby on Rails, React, and TypeScript. Proven results across fintech, healthtech, and SaaS — 100% performance improvements, 45% faster response times, 90%+ test coverage. Available for remote work, US Eastern timezone.";
const siteUrl = "https://jeffersonbernal.dev";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Jefferson Bernal Cardona",
    jobTitle: "Senior Ruby on Rails Developer",
    description: siteDescription,
    url: siteUrl,
    email: "jeffe.bernal@gmail.com",
    telephone: "+573148112185",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellin",
      addressCountry: "CO"
    },
    sameAs: [
      "https://linkedin.com/in/jeffersonbernal",
      "https://github.com/jeferbc"
    ],
    knowsAbout: [
      "Ruby on Rails", "React", "TypeScript", "PostgreSQL", "Redis",
      "AWS", "Docker", "Sidekiq", "REST APIs", "GraphQL",
      "Twilio Video", "CI/CD", "TDD", "RSpec", "Performance Optimization"
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad de Antioquia"
    },
    worksFor: {
      "@type": "Organization",
      name: "Independent Contractor"
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content="Ruby on Rails developer, senior Rails developer, full-stack developer, React developer, TypeScript, remote developer, nearshore developer, Colombia, fintech developer, healthtech developer, SaaS developer, API development, PostgreSQL, AWS, performance optimization" />
        <meta name="author" content="Jefferson Bernal Cardona" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteUrl} />

        <meta property="og:type" content="profile" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="Jefferson Bernal Cardona" />
        <meta property="og:locale" content="en_US" />
        <meta property="profile:first_name" content="Jefferson" />
        <meta property="profile:last_name" content="Bernal Cardona" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <BaseCSS />
      </head>
      <body className="try">
        <NoSsr>{children}</NoSsr>
      </body>
    </html>
  );
}
