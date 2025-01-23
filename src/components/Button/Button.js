import "./Button.css";

export const Button = (props) => {
  const { url, text, color } = props;
  // const dataSet = text.toLowerCase();
  
  // target="_blank" rel="noopener noreferrer"

  return `
  <a class="btn btn--${color}" href="${url}" data-page="${text}" >${text}</a>
  `;
};
