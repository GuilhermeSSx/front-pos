import Link from 'next/link';
import styles from './navbar.module.css';

export default function Home() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/">Vendas</Link>
          </li>
          <li className={styles.li}>
            <Link href="/pedidos">Lista de Pedidos</Link>
          </li>
          <li className={styles.li}>
            <Link href="/comandas">Lista de Comandas</Link>
          </li>
          <li className={styles.li}>
            <Link href="/estoque">Estoque</Link>
          </li>
          <li className={styles.li}>
            <Link href="/despesas">Despesas</Link>
          </li>
        </ul>
      </nav>
    </header>

  );
};