import PropTypes from "prop-types";

export default function Statistics({ stats, title }) {
  return (
    <section>
      <h2>{title}</h2>

      <ul>
        <li>
          <span>.docx</span>
          <span>4%</span>
        </li>
        <li>
          <span>.mp3</span>
          <span>14%</span>
        </li>
        <li>
          <span>.pdf</span>
          <span>41%</span>
        </li>
        <li>
          <span>.mp4</span>
          <span>12%</span>
        </li>
      </ul>
    </section>
  );
}

/* [
  { "id": "id-1", "label": ".docx", "percentage": 22 },
  { "id": "id-2", "label": ".pdf", "percentage": 4 },
  { "id": "id-3", "label": ".mp3", "percentage": 17 },
  { "id": "id-4", "label": ".psd", "percentage": 47 },
  { "id": "id-5", "label": ".pdf", "percentage": 10 }
] */
