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
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id}>
            <Label>{label}</Label>
            <Percent>{percentage}%</Percent>
          </ListItem>
        ))}
      </List>
    </StatSection>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
