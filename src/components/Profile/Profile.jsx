import styled from 'styled-components';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Wrapper>
      <Description>
        <Image src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <Paragraph>@{tag}</Paragraph>
        <Paragraph>{location}</Paragraph>
      </Description>

      <List>
        <Li>
          <Label className="label">Followers</Label>
          <Quantity className="quantity"> {followers}</Quantity>
        </Li>
        <Li>
          <Label className="label">Views</Label>
          <Quantity className="quantity"> {views}</Quantity>
        </Li>
        <Li>
          <Label className="label">Likes</Label>
          <Quantity className="quantity"> {likes}</Quantity>
        </Li>
      </List>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  font-size: 27px;
  width: 300px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 2%;
  background-color: #f5f5f5;
`;
const Description = styled.div`
  text-align: center;
  font-weight: bold;
`;

const Image = styled.img`
  margin-top: 30px;
  max-height: 120px;
  border-radius: 50%;
  background-color: darkgray;
`;

const Paragraph = styled.p`
  font-weight: normal;
  color: grey;
  font-size: 23px;
`;

const List = styled.ul`
  background-color: #d8d8d8;
  list-style-type: none;
  display: flex;
  font-size: 23px;
  width: 100%;
  padding-left: 0;
  flex-basis: 50%;
  margin: 0;
`;

const Li = styled.li`
  width: 100px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
`;

const Label = styled.span`
  font-weight: normal;
  color: grey;
  font-size: 19px;
`;

const Quantity = styled.span`
  text-align: center;
  font-weight: bold;
  font-size: 19px;
`;
