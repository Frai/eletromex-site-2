import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import Head from 'next/head';

export const metadata = {
  description: 'Eletromex - Atacadão de produtos eletrônicos',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Eletromex - Atacadão de produtos eletrônicos</title>
        <meta name="description" content="Eletromex - Atacadão de produtos eletrônicos" />
      </Head>
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
