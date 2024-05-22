import "./UnderConstructionPage.scss";
import { Link } from 'react-router-dom';
import ExternalLinkIcon from "../../components/ExternalLinkIcon/ExternalLinkIcon";
const UnderConstructionPage = () => {
  return (
    <div className="under-construction">
      <div className="under-construction__content">
        <h1 className="under-construction__title">Page Under Construction</h1>
        <p className="under-construction__text">I am working to bring you this page soon. Please stay tuned!</p>
        <p className="under-construction__signature">- Devin</p>
        <Link className="under-construction__link" to="/">Return Home<ExternalLinkIcon/></Link>

      </div>
    </div>
  );
};

export default UnderConstructionPage;
