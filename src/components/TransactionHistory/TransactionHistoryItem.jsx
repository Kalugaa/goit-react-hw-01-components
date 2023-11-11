import styled from 'styled-components';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <TransactionHistoryTd>{type}</TransactionHistoryTd>
      <TransactionHistoryTd>{amount}</TransactionHistoryTd>
      <TransactionHistoryTd>{currency}</TransactionHistoryTd>
    </tr>
  );
};

const TransactionHistoryTd = styled.td`
  border: 1px solid black;
`;

export default TransactionHistoryItem;
