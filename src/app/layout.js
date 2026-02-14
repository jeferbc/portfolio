import "../index.scss";
import NoSsr from "../utils/NoSsr";
const BaseCSS = ({ css = "*{box-sizing:border-box}body{margin:0}" }) => (
  <style
    dangerouslySetInnerHTML={{
      __html: css,
    }}
  />
);


export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="mdx-docs" />
        <title>Jefferson Bernal Cardona | Senior Rails Developer</title>
        <link rel="icon" href="/assets/images/logo/favicon.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/assets/images/logo/favicon.png" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <BaseCSS />
      </head>
      <body className="try">
        <NoSsr>{children}</NoSsr>
      </body>
    </html>
  );
}
