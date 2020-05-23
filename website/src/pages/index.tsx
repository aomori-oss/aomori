import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Aomori</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">Welcome!</h1>
    </div>
  );
}
