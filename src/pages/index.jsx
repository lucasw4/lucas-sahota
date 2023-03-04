import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import About from "./about";
import Contact from "./contact";
import Portfolio from "./portfolio";
import Resume from "./resume";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Sahota Portfolio</title>
        <meta name='description' content='Lucas Sahota portfolio website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-gray-900 text-gray-100 overflow-hidden'>
        <div className='bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900'>
          <NavBar />
          <Header />
        </div>
        <About />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
