async function getData(userId) {
  const res = await fetch(`http://localhost:3000/api/expense?userId=${userId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
 
export default async function TransactionList(props) {
  console.log(props , "User")
  // const txnData = await getData(userId);
  // console.log(txnData);
  return <h1>Hi</h1>;
}