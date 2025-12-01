import React from "react";
import { Link } from "react-router-dom";
import "../styles/StaticPages.css";

const PrivacyPage: React.FC = () => {
  return (
    <div className="static-page-container">
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span className="breadcrumb-separator">»</span>
        <span className="breadcrumb-current">Privacy Policy</span>
      </div>

      <div className="static-content">
        <h1 className="static-title">Privacy Policy</h1>
        
        <div className="static-text">
          <p>ORAIMO Privacy Policy</p>
          <p>Effective date: 7/15/2020</p>
          
          <p>
            This Privacy Policy applies to certain information, as defined below, that ORAIMO Technology Ltd, and its affiliates ("ORAIMO," "our," "we" or "us") collects through our websites, products, and applications (the "Services").
          </p>
          
          <p><strong>YOUR PRIVACY IS IMPORTANT TO US. PLEASE READ THIS PRIVACY POLICY TO LEARN ABOUT THE INFORMATION THAT ORAIMO COLLECTS FROM YOU AND HOW ORAIMO USES THAT INFORMATION.</strong></p>
          
          <p><strong>BY USING THE SERVICES YOU CONSENT TO THE COLLECTION, USE, AND TRANSFER OF YOUR INFORMATION AS DESCRIBED IN THIS PRIVACY POLICY. IF YOU DO NOT AGREE WITH ANY PART OF THIS PRIVACY POLICY, THEN PLEASE DO NOT USE THE SERVICES.</strong></p>
          
          <br />
          <p>What information do we collect?</p>
          <br />
          
          <p>Information Provided by Users</p>
          
          <ul>
            <li>
              <strong>Your Account information:</strong> You provide your email, or log in for a third-party account (like Facebook), to create an online or application account ("Account") or subscribe to our communications. If you refuse to provide such information, you may not be able to use the Services properly. When creating your Account, you may be asked to enter certain information, such as: your name, avatar, age, gender, address, telephone number and email address.
            </li>
            <li>
              <strong>Payment information; Third-Party Payment Processor:</strong> We use a third-party payment processor (currently Paypal) to assist in securely processing your personally identifiable payment information. When you place an order through the Services, the credit card information that you provide is encrypted and transmitted directly to Paypal. We do not store your credit card information and do not control Paypal.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
