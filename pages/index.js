import Head from 'next/head'
import Link from 'next/link';

/* This page was created in order to have a homepage where you land on your first use */

export default function Home( ) {
  return (
    <div className="container">
      <Head>
        <title>Zippia</title>
        <link rel="icon" href="/zippia.ico" />
      </Head>

      <main>
        <div className='main-content'>
          <img className="header-logo" src="/zippia-logo.png" alt="Zippia Logo" />
          <h1>
            Hello! Let's go to the {' '}
            <Link href="/test/jobs">
              <a className='link'>main application</a>
            </Link>
          </h1>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .link {
          color: rgb(88, 142, 241);
        }

        @media (min-width: 600px) {
          .main-content {
            align-items: center;
            display: flex;
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .main-content {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
          }
        }


        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>

      <style jsx global>{`
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
      `}</style>
    </div>
    
  )
}