import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import api from '../services/api'

import DataSubmissionForm from '../components/DataSubmissionForm'
import Container from '../components/Container'

interface VerifyStatusServerResponse {
  alive: boolean
}

const Home: NextPage = () => {
  const [isServerRunning, setIsServerRunning] = useState<boolean | null>(null)

  // VERIFY THE SERVER STATUS
  function verifyServerStatus() {
    // API QUERY TO GET SERVER STATUS
    api.get<VerifyStatusServerResponse>('').then((response) => {
      
      setIsServerRunning(response.data.alive)

    }).catch((error) => {

      console.log(error)

    })
  }

  // RUN ONE TIME PER RENDER TO GET THE SERVER STATUS
  useEffect(() => {
    verifyServerStatus()
  },[])

  return (
    <div>
      <Head>
        <title>Doar computadores</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <Container bg="primary" h='100vh'>
        <h1>Doação de computadores usados</h1>
        {isServerRunning === null? 
        (<p></p>)
        :
        isServerRunning !== null && isServerRunning? (
          <p>API Online</p>
        ) : (
          <p>API Offline</p>
        )
      }
      <DataSubmissionForm/>
      </Container>
    </div>
  )
}

export default Home
