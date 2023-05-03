import Link from 'next/link';
import styles from './navbar.module.css';

export default function Home() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Vendas</Link>
        </li>
        <li>
          <Link href="/pedidos">Lista de Pedidos</Link>
        </li>
        <li>
          <Link href="/comandas">Lista de Comandas</Link>
        </li>
        <li>
          <Link href="/estoque">Estoque</Link>
        </li>
        <li>
          <Link href="/despesas">Despesas</Link>
        </li>
      </ul>
    </nav>
  );
};