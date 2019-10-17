import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => (
  <table className={styles.history}>
    <thead className={styles.trHead}>
      <tr className={styles.transaction}>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody className={styles.trBody}>
      {transactions.map(transaction => (
        <tr className={styles.transaction} key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}$</td>
          <td>4/17/{transaction.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired
    })
  ).isRequired
};
export default TransactionHistory;
