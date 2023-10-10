import PropTypes from 'prop-types';
import './ProgramItem.css'

const workshopContent = (content) => {
  const htmlContent = { __html: content };
  return <div dangerouslySetInnerHTML={htmlContent}></div>;
}

const ProgramItem = ({ hour, title, description }) => {
  return (
    <div className="program-item">
      <div className="w-1/5">
        <p>{hour}</p>
      </div>
      <div className="w-2/5">
        <p>{title}</p>
      </div>
      <div className="w-2/5">
        {workshopContent(description)}
      </div>
    </div>
  );
};

ProgramItem.propTypes = {
  hour: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProgramItem;