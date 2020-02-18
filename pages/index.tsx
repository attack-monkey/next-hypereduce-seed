import React from 'react'
import Head from 'next/head'

import { manageStateWithHypeReduce } from '../state/root'
import { dispatchAction } from 'hypereduce/lib/fns/state.api'
import { HypeReduce } from '../utils/connector.comp'

manageStateWithHypeReduce()

const Page = ({ connection }: { connection: any }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="title">Welcome to hypeReduce + Next.js</h1>
      <h2>{ connection }</h2>
      <button onClick={ () => dispatchAction({ type: 'INC' })}>push me</button>
    </div>
  </div >
)
const Home = () => <HypeReduce connectKey="counter" Component={Page}></HypeReduce>


export default Home
