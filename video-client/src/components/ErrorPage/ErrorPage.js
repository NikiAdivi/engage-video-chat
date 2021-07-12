import { Link } from "react-router-dom";
import "./ErrorPage.scss";
import Header from "../Utilities/HeaderHomePage/HeaderHomePage";

const ErrorPage = () => {
  return (
    <div className="no-match">
      <Header />
      <div className="no-match__content">
        <h2>Invalid video call name.</h2>
        <div className="action-btn">
          <Link className="btn green" to="/">
            Go back to home screen
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
