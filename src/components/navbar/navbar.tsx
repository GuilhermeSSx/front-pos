import Link from 'next/link';
import styles from './navbar.module.scss';

export default function Home() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link className={styles.link} href="/">Vendas</Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link}href="/pedidos">Lista de Pedidos</Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link}href="/comandas">Lista de Comandas</Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link}href="/estoque">Estoque</Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link}href="/despesas">Despesas</Link>
          </li>
        </ul>
      </nav>
    </header>

  );
};