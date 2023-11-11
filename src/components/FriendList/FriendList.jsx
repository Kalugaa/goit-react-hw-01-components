import styled from 'styled-components';
import { FriendListItem } from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </FriendListContainer>
  );
};

const FriendListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;
export default FriendList;
