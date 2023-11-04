import './data.json';
import styled from 'styled-components';

const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper className="statistics">
      {title && <Title className="title">{title}</Title>}
      <StatList className="stat-list">
        {stats.map(stat => (
          <StatItem className="item" key={stat.id}>
            <Label className="label">{stat.label}</Label>
            <Percentage className="percentage">{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsWrapper>
  );
};

const StatisticsWrapper = styled.section`
  background-color: #f4f4f4;
  padding: 0;
  max-width: 350px;
`;

const Title = styled.h2`
  font-size: 25px;
  text-transform: uppercase;
  text-align: center;
  color: rgb(29, 40, 100);
`;

const StatList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  color: whitesmoke;
  font-size: 15px;
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(350px / 5);
  align-items: center;
  padding: 10px 0;
  background-color: ${generateRandomColor};
`;

const Label = styled.span`
  font-weight: bold;
`;

const Percentage = styled.span``;

export default Statistics;
