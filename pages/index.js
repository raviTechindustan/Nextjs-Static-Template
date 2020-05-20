import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Link from 'next/link'
import Navbar from './Navbar'
import Header from './Header'
import Home from './Home'
import Footer from './Footer';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
// import '@fortawesome/fontawesome-free/css/all.css';


export default function Index() {

  return (
    <div className="container">
      <Head>
        <title>First App</title>
        <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet" />
  <link href="/your-path-to-fontawesome/css/brands.css" rel="stylesheet" />
  <link href="/your-path-to-fontawesome/css/solid.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Home />
      <Footer />
      <style jsx>{`
               .logo {
           height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      {/* <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          background-color: "red";
        }
        
        ul {
          display: inline-block;
          display: flex;
          justify-content: center;
      
        }
        li {
          list-style: none;
          margin: 10px;
          

        }
        li a {
          color: black;
          text-decoration:none;
        }
        .selected {
          color: blue;
        }
        
        
      `}</style> */}
    </div>
  )
}
