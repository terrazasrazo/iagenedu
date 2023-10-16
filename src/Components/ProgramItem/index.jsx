import PropTypes from 'prop-types';
//import './ProgramItem.css'

const workshopContent = (content) => {
  const htmlContent = { __html: content };
  return <div dangerouslySetInnerHTML={htmlContent}></div>;
}

const ProgramItem = ({ hour, title, description }) => {
  return (
    <div className="mb-6 xl:mb-4 border border-gray-400 p-2 grid gap-4 content-center grid-cols-3 md:grid-cols-5">
      <div className="grid content-center pl-10">
        <p>{hour}</p>
      </div>
      <div className="grid col-span-2 content-center text-center">
        <p>{title}</p>
      </div>
      <div className="col-span-3 md:col-span-2 border-t md:border-none border-gray-400 pt-2 md:pt-0 grid content-center">
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