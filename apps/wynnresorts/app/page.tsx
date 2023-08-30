import Link from 'next/link';
import styles from './page.module.css';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className='container'>
          <h1>Wynn Resorts</h1>
          <br />
          <Link href="/ebh">Go to EBH</Link>
          <br />
          
          <Link href="/wlv">Go to WLV</Link>
          <br />

        </div>
      </div>
    </div>
  );
}
