import styled from 'styled-components';

const FriendListItemContainer = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
  width: 200px;
`;

const Status = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  margin: 0 10px;
`;
const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 25%;
  background-color: gray;
`;

const Name = styled.p`
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
`;

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemContainer>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </FriendListItemContainer>
  );
};
