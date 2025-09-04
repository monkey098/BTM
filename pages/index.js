import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Calculated Trade</title>
        <meta
          name="description"
          content="Unlock access to trading strategies and insights shared on The Calculated Trade YouTube channel."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to The Calculated Trade" />

        <p className="description">
          Unlock easy-to-use access to the trading strategies and insights shared on The Calculated Trade YouTube channel. <br />
          Purchase access below to start improving your trades today!
        </p>

        <div className="cta">
          <button className="purchase-button">Purchase Access</button>
        </div>

        <p className="disclaimer">
          <strong>Disclaimer:</strong> All content shared after purchase is based on mathematical methods and extensive historical backtesting. Results are not guaranteed, and any trading outcomes are at your own risk.
        </p>
      </main>

      <Footer />

      <style jsx>{`
        main {
          padding: 4rem 1rem;
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
        .disclaimer {
          margin-top: 2.5rem;
          font-size: 0.9rem;
          color: #555;
          line-height: 1.4;
        }
      `}</style>
    </div>
  )
}
