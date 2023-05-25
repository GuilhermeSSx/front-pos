import Image from 'next/image'
import styles from './page.module.scss'
import OrdersList from '@/components/ordersList/ordersList'
import Dados from './dadosTemporario'
import ProductList from '@/components/productMenu/productList'

export default function Home() {
  return (
    <div className={styles.containerPage}>
      <main className={styles.mainMenu}>

        <div className={styles.searchContainer}>
          <input className={styles.search} type="text" placeholder="Pesquisar Lista de Itens" />
          <button className={styles.buttonAdd}>Adicionar</button>
        </div>

        <div className={styles.menuContainer}>
          {Dados.products.map(( product ) => (
            <ProductList key={product.keynumber} product={product} />
          ))}
        </div>

      </main>
      
      <div className={styles.orderList}>
        {Dados.orders.map(( order ) => (
          <OrdersList key={order.orderId} order={order} />
        ))}
      </div>

      <aside className={styles.orderDetails}>LATERAL PAGAMENTO</aside>
    </div>
  )
}
