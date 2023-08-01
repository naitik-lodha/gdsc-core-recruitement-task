import React from "react";
import Head from "next/head";
import ThreeDText from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Naitik Lodha</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>
      <div className="h-screen">
        <ThreeDText />
      </div>
    </div>
  );
}
