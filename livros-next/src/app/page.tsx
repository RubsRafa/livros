import Head from 'next/head';
import { Menu } from '../../componentes/Menu';
import style from './page.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <main className={style.main}>
        <h1 className={style.title}>Página Inicial</h1>
      </main>
    </div>
  );
}
