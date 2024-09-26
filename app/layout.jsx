import Footer from "@components/Footer";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "Hindustan's Jngr",
  description: "Discover & Share AI Prompts",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Link to the favicon */}
        <link rel="icon" href="/assets/images/logo.jpeg" />
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
            <Footer/>
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
