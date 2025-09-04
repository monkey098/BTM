import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Calculated Trade</title>
        <meta name="description" content="Access exclusive trading strategies released on The Calculated Trade YouTube channel." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to The Calculated Trade" />
        <p className="description">
          Unlock exclusive trading strategies and insights shared on our YouTube channel. <br/>
          Purchase access below to start improving your trades today!
        </p>
        <div className="cta">
          <button className="purchase-button">
            Purchase Access
          </button>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        main {
          padding: 4rem 0;
          text-align: center;
        }
        .description {
          font-size: 1.25rem;
          margin: 2rem 0;
        }
        .cta {
          margin-top: 2rem;
        }
        .purchase-button {
          background-color: #0070f3;
          color: white;
          padding: 1rem 2rem;
          font-size: 1.2rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .purchase-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  )
}
