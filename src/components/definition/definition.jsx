import "./definition.scss";

export const Definition = ({ title, description }) => {
  return (
    <dl className="definition">
      <dt>{title}</dt>
      <dd>{description}</dd>
    </dl>
  );
};
