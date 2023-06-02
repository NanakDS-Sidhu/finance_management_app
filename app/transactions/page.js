import TransactionList from "../components/transactions/TransactionList";

const Transaction = () => {
  return (
    <div>
      <h1>Transaction</h1>
      <TransactionList />
      {/* {status === 'authenticated' && <TransactionList userId={data.user}/> } */}
    </div>
  )
}

export default Transaction;
