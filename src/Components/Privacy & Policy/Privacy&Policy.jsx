import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 border-b pb-2">Privacy Policy</h1>
      <p className="mb-4 text-sm text-gray-600">Last updated: July 23, 2025</p>

      {/* ...previous content... */}

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Retention of Your Personal Data
      </h3>
      <p className="mb-4">
        We will retain Your Personal Data only as long as necessary to fulfill
        the purposes outlined in this Privacy Policy. This includes complying
        with legal obligations, resolving disputes, and enforcing agreements and
        policies.
      </p>
      <p className="mb-4">
        Usage Data is generally retained for a shorter period, unless it is used
        to improve service functionality or is legally required to be retained
        longer.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Transfer of Your Personal Data
      </h3>
      <p className="mb-4">
        Your information may be transferred to — and maintained on — computers
        outside Your jurisdiction where data protection laws may differ. Your
        consent to this Privacy Policy and submission of such information
        represents agreement to that transfer.
      </p>
      <p className="mb-4">
        We take all steps reasonably necessary to ensure Your data is treated
        securely in accordance with this Privacy Policy.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Delete Your Personal Data
      </h3>
      <p className="mb-4">
        You have the right to delete or request the deletion of Your Personal
        Data. You can do this by logging into Your account or by contacting Us
        directly.
      </p>
      <p className="mb-4">
        Note: We may retain certain data if required to do so by law or for
        legitimate purposes.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Disclosure of Your Personal Data
      </h3>
      <h4 className="text-lg font-medium mb-2">Business Transactions</h4>
      <p className="mb-4">
        If the Company is involved in a merger or acquisition, Your data may be
        transferred. We will notify You before such transfer and any new Privacy
        Policy becomes effective.
      </p>

      <h4 className="text-lg font-medium mb-2">Law Enforcement</h4>
      <p className="mb-4">
        We may disclose Your Personal Data if required by law or valid public
        authority requests.
      </p>

      <h4 className="text-lg font-medium mb-2">Other Legal Requirements</h4>
      <p className="mb-4">We may disclose Your data in good faith to:</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Comply with a legal obligation</li>
        <li>Protect the rights or property of the Company</li>
        <li>Prevent or investigate wrongdoing related to the Service</li>
        <li>Protect the personal safety of users or the public</li>
        <li>Protect against legal liability</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Security of Your Personal Data
      </h3>
      <p className="mb-4">
        We prioritize Your data security but note that no method of online
        transmission or storage is 100% secure. We use commercially acceptable
        means to protect Personal Data but cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 border-b pb-1">
        Children's Privacy
      </h2>
      <p className="mb-4">
        Our Service does not address anyone under the age of 13. We do not
        knowingly collect data from children under 13. If we become aware of
        such collection, we take steps to delete that information.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 border-b pb-1">
        Links to Other Websites
      </h2>
      <p className="mb-4">
        Our Service may link to external websites not operated by Us. We advise
        reviewing the Privacy Policy of each third-party site. We assume no
        responsibility for their content or practices.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 border-b pb-1">
        Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update Our Privacy Policy periodically. Any changes will be
        posted on this page with a new effective date. We may notify You via
        email or a prominent notice on our website.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 border-b pb-1">
        Contact Us
      </h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, contact us at:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Email:{" "}
          <span className="text-blue-600">im.computer.engineeer@gmail.com</span>
        </li>
        <li>
          Address:{" "}
          <span className="text-blue-600">
            {" "}
            315, 5 E Nakhalpara Rd, Dhaka 1215
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
