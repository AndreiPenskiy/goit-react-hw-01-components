import PropTypes from "prop-types";
import {
  StatSection,
  Title,
  List,
  ListItem,
  Label,
  Percent,
} from "./Statistics.styled";

export default function Statistics({ stats, title }) {
  return (
    <StatSection>
      {{ title } && <Title>{title}</Title>}

      <List>
        {stats.map((stat) => (
          <ListItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Percent>{stat.percentage}%</Percent>
          </ListItem>
        ))}
      </List>
    </StatSection>
  );
}

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
