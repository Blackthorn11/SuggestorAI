import "./style.css";
import HeaderLogo from "../../images/SuggestorAILogo.jpg";

export default function Header() {
  return (
    <div class="header">
      <div class="logo-container">
        <img
          src={HeaderLogo}
          class="card-img-top main-logo"
          alt="SuggestorAILogo"
        />
      </div>
      <div class="header_text">
        <p>
          Welcome to SuggestorAI! designed to simplify your decision-making
          process. With our intuitive platform, you can harness the power of
          artificial intelligence to obtain valuable suggestions tailored to
          your specific needs.
        </p>
      </div>
    </div>
  );
}

// <div className="header">
//       <img
//         src={HeaderLogo}
//         className="card-img-top main-logo"
//         alt="SuggestorAILogo"
//       />
//       <p className="header_text">
//         Welcome to SuggestorAI! designed to simplify your decision-making
//         process. With our intuitive platform, you can harness the power of
//         artificial intelligence to obtain valuable suggestions tailored to your
//         specific needs.
//       </p>
//     </div>
