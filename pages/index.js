import Head from 'next/head'
import Itinerary from "../components/Itinerary";
import {itinerary} from "../data/itinerary.json";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Major League Packing</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <h1 className="title">
                    Welcome to <a href="https://mlh.io">Major League Packing</a>!
                </h1>

                <Itinerary itinerary={itinerary} />
            </main>

            <footer>
          <span>
            Powered by{' '}<a href="https://robbie.dev" target="_blank" rel="noreferrer">Robbie from MLH</a>.
          </span>
            </footer>

            <style jsx>{`
                .container {
                    min-height: 100vh;
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }

                a {
                    color: #0070f3;
                    text-decoration: none;
                }

                a:hover,
                a:focus,
                a:active {
                    text-decoration: underline;
                }

                .title {
                    margin: 0;
                    line-height: 1.15;
                    font-size: 4rem;
                }

                .title,
                .description {
                    text-align: center;
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
