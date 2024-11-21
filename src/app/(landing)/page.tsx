import Header from '../../components/Header';
import Heading from './Heading';
import About from './About';
import Schedule from './Schedule';
import Prizes from './Prizes';
import Judges from './Judges';
import FAQ from './FAQ';
import Sponsors from './Sponsors';
import Footer from '../../components/Footer';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>GunnHacks 11.0</title>
                <meta name="description" content="Make, Build, Create & Learn. It’s GunnHacks 11.0, Gunn’s 24‑hour high school hackathon." />
            </Head>
            <div>
                {/* <Header /> */}
                <Heading />
                <About />
                <FAQ />
                <Schedule />
                <Prizes />
                {/* <Judges /> */}
                <Sponsors />
                <Footer />
            </div>
        </>
    );
}
