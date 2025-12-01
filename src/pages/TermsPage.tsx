import React from "react";
import { Link } from "react-router-dom";
import "../styles/StaticPages.css";

const TermsPage: React.FC = () => {
  return (
    <div className="static-page-container">
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span className="breadcrumb-separator">»</span>
        <span className="breadcrumb-current">Terms of service</span>
      </div>

      <div className="static-content">
        <h1 className="static-title">Terms of service</h1>
        <p className="static-date">Last Updated: May 10, 2021</p>

        <div className="static-text">
          <p>
            Welcome to ng.oraimo.com. We provide services to you subject to the notices, terms, and conditions set forth in this agreement (the "Agreement"). In addition, when you use any ng.oraimo.com service (e.g. placing an order or writing a customer review), you will be subject to the rules, guidelines, policies, terms, and conditions applicable to such services, and they are incorporated into this Agreement by this reference. ng.oraimo.com reserves the right to change this site and these terms and conditions at any time.
          </p>
          <p>
            Accessing, browsing, or otherwise using the site indicates your agreement to all the terms and conditions in this Agreement. Please read this Agreement carefully before proceeding.
          </p>
          <p>
            You represent and warrant that you are at least 18 years old or visiting the Site under the supervision of a parent or guardian. Subject to the terms and conditions of this Agreement, ng.oraimo.com hereby grants you a limited, revocable, non-transferable and non-exclusive license to access and use the Site by displaying it on your internet browser only for the purpose of shopping for personal items sold on the Site and not for any commercial use or use on behalf of any third party, except as explicitly permitted by ng.oraimo.com in advance. Any breach of this Agreement shall result in the immediate revocation of the license granted in this paragraph without notice to you.
          </p>
          <p>
            Except as permitted in the paragraph above, you may not reproduce, distribute, display, sell, lease, transmit, create derivative works from, translate, modify, reverse-engineer, disassemble, decompile or otherwise exploit this Site or any portion of it unless expressly permitted by ng.oraimo.com in writing. You may not make any commercial use of any of the information provided on the Site or make any use of the Site for the benefit of another business unless explicitly permitted by ng.oraimo.com in advance. ng.oraimo.com reserves the right to refuse service, terminate accounts, and/or cancel orders in its discretion, including, without limitation, if ng.oraimo.com believes that customer conduct violates applicable law or is harmful to ng.oraimo.com's interests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
