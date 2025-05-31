import { Helmet } from "react-helmet-async";

const HelmetChanger = ({ title }) => {
  return (
    <Helmet>
      <title>Lewi - {title}</title>
    </Helmet>
  );
};

export default HelmetChanger;
