import { Link } from "react-router-dom";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import { Close, Dashboard, LocalActivity, Person, Restore, Verified } from "@mui/icons-material";

export default function ConductorTerms(){
    return (
        <div className="page pass-page">
            <Header />
            <div className="pass-page-title">
                <div className="pass-page-title-left">
                    <h2 className="text-subhead">Terms and Conditions</h2>
                    <p className="text-normal">Terms for the user clarity</p>
                </div>
                <Link to="/conductor/home"><Close className="terms" /></Link>
            </div>
            <div className="pass-history-details-cont">
            <p>These Terms and Conditions govern your use of the QLine SaaS Platform for Public Transport Pass Renewal ("Platform"), provided by We Define Net ("Provider"). By accessing or using the Platform, you agree to be bound by these Terms and Conditions.</p>
<br /><br />
  <h2>1. Acceptance of Terms</h2>
  <p>By accessing or using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as any additional guidelines, rules, and policies referenced herein. If you do not agree with these Terms and Conditions, you must not use the Platform.</p>
  <br /><br />
  <h2>2. Description of Service</h2>
  <p>QLine is a SaaS platform designed to modernize public transport pass renewal processes. It provides a digital solution for commuters, conductors, and administrators to manage passes online. Key features include online registration and renewal, QR code-based digital passes, real-time validation, and centralized data management.</p>
  <br /><br />
  <h2>3. User Accounts</h2>
  <h3>3.1 Account Registration</h3>
  <p>To use certain features of the Platform, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
  <br />
  <h3>3.2 Account Security</h3>
  <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access to or use of your account.</p>
  <br />
  <h3>3.3 Account Types</h3>
  <p>The platform defines clear roles: Commuters, Conductors, and Admins, each having tailored functionalities to streamline their tasks.</p>
  <br /><br />
  <h2>4. Use of the Platform</h2>
  <h3>4.1 Permitted Use</h3>
  <p>You may use the Platform only for lawful purposes and in accordance with these Terms and Conditions. You agree not to use the Platform in any way that violates any applicable laws or regulations.</p>
  <br />
  <h3>4.2 Prohibited Conduct</h3>
  <ul>
    <li>Use the Platform in any way that could damage, disable, overburden, or impair our servers or networks.</li>
    <li>Attempt to gain unauthorized access to any portion of the Platform.</li>
    <li>Transmit any viruses, malware, or other harmful code.</li>
    <li>Engage in any activity that interferes with or disrupts the Platform.</li>
    <li>Use this platform to conduct fraudulent activities.</li>
  </ul>
  <br /><br />
  <h2>5. QR Code-Based Digital Passes</h2>
  <h3>5.1 Pass Validity</h3>
  <p>Digital passes are valid only for the period specified and are subject to the terms and conditions of the relevant transport authority (e.g., MTC in Chennai).</p>
  <br />
  <h3>5.2 Pass Security</h3>
  <p>You are responsible for maintaining the security of your digital pass. Do not share your QR code with unauthorized individuals.</p>
  <br />
  <h3>5.3 Pass Verification</h3>
  <p>Conductors will verify the validity of your pass using QR code scanning. You must present a valid digital pass for verification upon request.</p>
  <br /><br />
  <h2>6. Data Security and Privacy</h2>
  <h3>6.1 Data Security</h3>
  <p>We employ security measures to protect your data, including AES encryption for sensitive pass data and secure authentication using Firebase Authentication.</p>
  <br />
  <h3>6.2 Privacy Policy</h3>
  <p>Your use of the Platform is also governed by our Privacy Policy, which is incorporated herein by reference.</p>
  <br /><br />
  <h2>7. Fees and Payments</h2>
  <p>We Define Net uses the freemium model. You get basic features for free but need to pay a fee to get access to premium features.</p>
  <br /><br />
  <h2>8. Intellectual Property</h2>
  <h3>8.1 Ownership</h3>
  <p>The Platform and its content, including but not limited to text, graphics, logos, and software, are owned by or licensed to We Define Net and are protected by copyright and other intellectual property laws.</p>
  <br />
  <h3>8.2 Limited License</h3>
  <p>We grant you a limited, non-exclusive, non-transferable license to access and use the Platform for your personal or internal business purposes.</p>
  <br /><br />
  <h2>9. Disclaimer of Warranties</h2>
  <p>The platform is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the platform's accuracy, reliability, or suitability for any particular purpose.</p>
  <br /><br />
  <h2>10. Limitation of Liability</h2>
  <p>To the fullest extent permitted by law, We Define Net shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising from your use of the Platform.</p>
  <br /><br />
  <h2>11. Modifications to the Platform</h2>
  <p>We reserve the right to modify, suspend, or discontinue the Platform at any time, with or without notice.</p>
  <br /><br />
  <h2>12. Governing Law</h2>
  <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.</p>
  <br /><br />
  <h2>13. Changes to These Terms and Conditions</h2>
  <p>We may update these Terms and Conditions from time to time. We will notify you of any material changes by posting the updated Terms and Conditions on the Platform. Your continued use of the Platform after the effective date of the updated Terms and Conditions constitutes your acceptance of the changes.</p>
  <br /><br />
  <h2>14. Contact Information</h2>
  <p>If you have any questions about these Terms and Conditions, please contact us at: <a href="mailto:support@qline.com">support@qline.com</a>.</p>
  <br /><br />
  
      </div>
      <BottomNav
                        navPaths={["/conductor/home", "/conductor/passverify", "/conductor/history", "/conductor/profile"]}
                        navLabels={["Home", "Verify", "History", "Profile"]}
                        navIcons = {[<Dashboard/>, <Verified/>,<Restore/>, <Person/>]}
                    />
        </div>
    );
}