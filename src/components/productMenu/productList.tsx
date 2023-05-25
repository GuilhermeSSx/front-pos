"use client";
import Link from 'next/link';
import styles from './productList.module.scss';
import { motion } from 'framer-motion';

export default function ProductList( { product }: any ) {
  return (
    <motion.div
      className={styles.container}
      animate={{
        x: ["4px", "0px"],
        y: ["-1px", "0px"],
      }}
      transition={{
        type: "spring",
        stiffness: 200,
      }}
    >
        <img src={product.image} alt=""/>
        <h4>{product.name}</h4>
        <h4>{product.value}</h4>
    </motion.div>

  );
};