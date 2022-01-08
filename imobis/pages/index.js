import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Imobis - Eine Hausverwaltung die Ihre Immobilie versteht.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
      
      <div className='header'>
        <img src='logo.png'></img>
        <p>Eine Hausverwaltung die Ihre Immobilie versteht.</p>
      </div>

      <div className='vl'>
        <hr></hr>
      </div>

      <div className='main-body'>
        <div className='left-body'>
          <h1>Herzlich Willkommen!</h1>
          <hr></hr>
          <p className='p-work'>Zurzeit überarbeiten wir unsere Internetseite.</p>
        </div>
        <div className='right-body'>
          <h3>Sie möchten unsere Dienstleistung in Anspruch nehmen, haben Fragen zu Ihrer Immobilie oder möchten uns kontaktieren?</h3>
          <hr></hr>
          <p className='available'>Wir sind weiterhin für Sie erreichbar:</p>
          <p className='contact'>Telefon: +49 151 10321679 <br></br>
          E-Mail: info@imobis.de</p>
          <p className='p-team'>Ihr Imobis-Team</p>
        </div>

      </div>
      
      <div className='vl-footer'>
        <hr></hr>
      </div>


      <div className='footer'>
          Impressum
      </div>
        
      

        

        
      </body>

     
    </div>
  )
}
