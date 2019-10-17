import React, { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import { toast } from "react-toastify";
import styles from "./Controls.module.css";

export default class Controls extends Component {
  static propTypes = {
    handleTransaction: PropTypes.func.isRequired,
    balance: PropTypes.number.isRequired
  };

  state = {
    value: ""
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      value
    });
  };

  handleClick = ({ target }) => {
    const { name } = target;
    const date = new Date().toLocaleString();
    const { value } = this.state;
    const { handleTransaction, balance } = this.props;

    const newTransaction = {
      id: shortid.generate(),
      type: name,
      amount: Number(value),
      date
    };

    if (name === "withdrawal" && value > balance) {
      toast.error("На счету недостаточно средств для проведения операции!");
      this.setState({ value: "" });
      return;
    }

    if (newTransaction.amount <= 0 || newTransaction.amount === "") {
      toast.warn("Введите сумму для проведения операции!");
      this.setState({ value: "" });
      return;
    }

    handleTransaction(newTransaction);
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;
    return (
      <section className={styles.controls}>
        <input
          className={styles.controlsInput}
          type="number"
          value={value}
          onChange={this.handleChange}
        />
        <button
          className={styles.controlsButton}
          type="button"
          name="deposit"
          onClick={this.handleClick}
        >
          Deposit
        </button>
        <button
          className={styles.controlsButton}
          type="button"
          name="withdrawal"
          onClick={this.handleClick}
        >
          Withdraw
        </button>
      </section>
    );
  }
}
