import PropTypes from "prop-types";

export default function Statistics({ stats, title }) {
  return (
    <section>
      {{ title } && <h2>{title}</h2>}

      <ul>
        {stats.map((stat) => (
          <li key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string,
};
