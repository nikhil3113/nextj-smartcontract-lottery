import Head from 'next/head'
// import ManualHeader from '../components/ManualHeader'
import Header from '../components/Header'
import LotteryEntrance from '../components/LotteryEntrance'


const index = () => {
  return (
    <div>
      <Head>
        <title>Smart Contract</title>
        <meta name="description" content="Our smart contract" key="title" />
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
      </Head>
      <Header />
      <LotteryEntrance />
    </div>
  )
}

export default index