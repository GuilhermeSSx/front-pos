"use client";
import Link from 'next/link';
import styles from './ordersList.module.scss';
import { motion } from 'framer-motion';

export default function OrdersList( { order }: any ) {
  return (
    <motion.div
      className={styles.container}
      animate={{
        x: ["4px", "0px"],
        y: ["0px", "0px"],
      }}
      transition={{
        type: "spring",
        stiffness: 200,
      }}
    >
        <h4>{order.orderId}</h4>
        <h4>{order.valueTotal}</h4>
        <h4>{order.status}</h4>
    </motion.div>

  );
};