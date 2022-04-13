import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ZIGEN - XR Windowing System</title>
        <meta name="description" content="ZIGEN: A windowing system for XR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4 mt-4">
        <h1 className="text-5xl">ZIGEN: Windowing System for XR</h1>
      </div>
    </div>
  )
}
