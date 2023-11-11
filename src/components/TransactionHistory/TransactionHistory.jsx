import styled from 'styled-components';
const { default: TransactionHistoryItem } = require('./TransactionHistoryItem');

const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionHistoryTable>
      <TransactionHistoryHeader>
        <TransactionHistoryRow>
          <TransactionHistoryHeaderCell>Type</TransactionHistoryHeaderCell>
          <TransactionHistoryHeaderCell>Amount</TransactionHistoryHeaderCell>
          <TransactionHistoryHeaderCell>Currency</TransactionHistoryHeaderCell>
        </TransactionHistoryRow>
      </TransactionHistoryHeader>

      <TransactionHistoryBody>
        {transactions.map(transaction => (
          <TransactionHistoryItem key={transaction.id} {...transaction} />
        ))}
      </TransactionHistoryBody>
    </TransactionHistoryTable>
  );
};

const TransactionHistoryTable = styled.table`
  width: 500px;
  border-collapse: collapse;
  margin-top: 20px;
  border: 1px solid black;
`;

const TransactionHistoryHeader = styled.thead`
  background-color: aquamarine;
  border: 1px solid black;
`;

const TransactionHistoryHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid black;
`;

const TransactionHistoryBody = styled.tbody`
border: 1px solid black;
tr:nth-child(odd) {
  background-color: grey;`;

export const TransactionHistoryRow = styled.tr`
  border: 1px solid black;
`;

export default TransactionHistory;
