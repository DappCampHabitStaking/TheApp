import Layout from 'components/Layout/layout'
import Head from 'next/head'
import React from 'react'

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Layout>
        <div className="bg-black h-full w-full flex-grow relative">hello</div>
      </Layout>
    </>
  );
};

export default Dashboard;
