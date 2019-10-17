import React from "react";
import PropTypes from "prop-types";
import styles from "./Balance.module.css";

const Balance = ({ balance, transactions }) => {
  const handleTransaction = type => {
    const balanceUpdated = transactions
      .filter(newTransaction => newTransaction.type === type)
      .reduce((acc, value) => acc + value.amount, 0);
    return balanceUpdated;
  };

  return (
    <section className={styles.balance}>
      <span className={styles.balanceLine}>
        &#8593; {`${handleTransaction("deposit")}$`}
      </span>
      <span className={styles.balanceLine}>
        &#8595; {`${handleTransaction("withdrawal")}$`}
      </span>
      <span className={styles.balanceLine}>Balance: {`${balance}`}$</span>
    </section>
  );
};

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Balance;
