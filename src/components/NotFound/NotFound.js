import { Link } from "react-router-dom";
import "../../styles/sections.css";

export default function NotFound() {
  return (
    <div className="page404">
      <h3>Error 404, page not found!</h3>
      <p>
        Please use the navigation bar or click on the link below to return to
        the homepage!
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}
