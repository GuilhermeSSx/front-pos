"use client";
import Link from 'next/link';
import styles from './orderDetails.module.scss';
import { motion } from 'framer-motion';

export default function OrderDetails( { order }: any ) {
  return (
    <motion.div
      animate={{
        x: ["4px", "0px"],
        y: ["0px", "0px"],
      }}
      transition={{
        type: "spring",
        stiffness: 200,
      }}
    >
        order DETAILS
    </motion.div>

  );
};