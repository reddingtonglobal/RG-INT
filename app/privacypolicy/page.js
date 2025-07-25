import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-4 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8 md:p-10 text-blue-900">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6 tracking-wide">
          Privacy Policy
        </h1>
        
        <p className="text-lg leading-relaxed mb-6">
          This Privacy Policy explains how Reddington Global Consultancy ("we", "us", or "our") 
          collects, uses, shares, and protects your information when you interact with our 
          website (<a href="https://www.reddingtonglobal.com" className="text-blue-600 hover:text-blue-800 font-medium underline">www.reddingtonglobal.com</a>), 
          services, or representatives.
        </p>
        
        <hr className="my-8 border-t border-blue-200" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4 pb-2 border-b border-blue-100">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>
              <strong className="font-semibold">Personal Information:</strong> Name, phone number, email address, 
              mailing address, and other contact details you provide.
            </li>
            <li>
              <strong className="font-semibold">Professional Information:</strong> Company name, job title, industry, 
              and other business-related information for service inquiries.
            </li>
            <li>
              <strong className="font-semibold">Usage Information:</strong> Browser type, IP address, device type, 
              pages visited, and interaction patterns on our website.
            </li>
            <li>
              <strong className="font-semibold">Communications Data:</strong> Emails, call recordings, chat transcripts, 
              and other service interactions.
            </li>
            <li>
              <strong className="font-semibold">Third-Party Data:</strong> Information from partners or service providers 
              with your authorization.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4 pb-2 border-b border-blue-100">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>Provide and improve our consultancy services</li>
            <li>Respond to your inquiries and service requests</li>
            <li>Communicate important updates and service information</li>
            <li>Enhance our website functionality and user experience</li>
            <li>Comply with legal obligations and protect our business</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4 pb-2 border-b border-blue-100">
            3. TCPA & Consent to Contact
          </h2>
          <p className="leading-relaxed mb-4">
            By providing your contact information, you consent to receive communications from 
            Reddington Global Consultancy, including phone calls, text messages (SMS/MMS), 
            and emails regarding our services. You may opt-out at any time by replying "STOP" 
            to text messages, clicking "unsubscribe" in emails, or contacting us directly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4 pb-2 border-b border-blue-100">
            4. Data Sharing & Disclosure
          </h2>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>
              With trusted service providers who assist in delivering our services
            </li>
            <li>
              When required by law or to protect our legal rights
            </li>
            <li>
              With affiliates or partners only with your explicit consent
            </li>
            <li>
              We do not sell your personal information to third parties
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4 pb-2 border-b border-blue-100">
            5. Your Privacy Rights
          </h2>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-6">
            <li><strong className="font-semibold">Access:</strong> Request a copy of your personal data</li>
            <li><strong className="font-semibold">Correction:</strong> Update inaccurate information</li>
            <li><strong className="font-semibold">Deletion:</strong> Request removal of your data (where applicable)</li>
            <li><strong className="font-semibold">Objection:</strong> Restrict certain uses of your data</li>
            <li><strong className="font-semibold">Withdraw Consent:</strong> Opt-out of communications</li>
          </ul>
          <div className="bg-blue-50 rounded-lg p-6 mt-6">
            <p className="leading-relaxed">
              To exercise your rights, please contact us at:<br />
              <span className="inline-block mt-2">
                📧 <a href="mailto:privacy@reddingtonglobal.com" className="text-blue-600 hover:text-blue-800 font-medium underline">privacy@reddingtonglobal.com</a>
              </span>
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4 pb-2 border-b border-blue-100">
            6. Cookies & Tracking
          </h2>
          <p className="leading-relaxed mb-4">
            Our website uses cookies to:
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
            <li>Analyze website traffic and usage patterns</li>
            <li>Improve website performance and functionality</li>
            <li>Personalize your browsing experience</li>
          </ul>
          <p className="leading-relaxed">
            You can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4 pb-2 border-b border-blue-100">
            7. Security Measures
          </h2>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>Industry-standard encryption protocols</li>
            <li>Secure access controls and authentication</li>
            <li>Regular security assessments</li>
            <li>Data minimization principles</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4 pb-2 border-b border-blue-100">
            8. Data Retention
          </h2>
          <p className="leading-relaxed">
            We retain your information only as long as necessary to provide services, 
            fulfill legal obligations, or resolve disputes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4 pb-2 border-b border-blue-100">
            9. International Data Transfers
          </h2>
          <p className="leading-relaxed">
            As a global consultancy, your data may be transferred to and processed in 
            countries outside your residence. We ensure appropriate safeguards are in place.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4 pb-2 border-b border-blue-100">
            10. Changes to This Policy
          </h2>
          <p className="leading-relaxed">
            We may update this policy periodically. The effective date at the top will 
            indicate the most recent version. We encourage you to review this policy 
            regularly.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4 pb-2 border-b border-blue-100">
            11. Contact Us
          </h2>
          <div className="bg-blue-50 rounded-lg p-6 mt-4">
            <p className="leading-relaxed">
              For any privacy-related questions or concerns:<br />
              <span className="inline-block mt-2">
                📧 <a href="mailto:privacy@reddingtonglobal.com" className="text-blue-600 hover:text-blue-800 font-medium underline">privacy@reddingtonglobal.com</a>
              </span><br />
              <span className="inline-block mt-2">
                📍 Reddington Global Consultancy
              </span><br />
              <span className="inline-block mt-2">
                📞 +91 9818224495
              </span><br />
              <span className="inline-block mt-2">
                🌐 <a href="https://www.reddingtonglobal.com" className="text-blue-600 hover:text-blue-800 font-medium underline">www.reddingtonglobal.com</a>
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;