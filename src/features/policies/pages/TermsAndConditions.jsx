import React from "react";

const TermsAndConditions = () => (
  <div>
    <h1 className="text-2xl font-semibold mb-4">Terms and Conditions</h1>
    <p className="mb-3">
      Welcome to Nutraline. By accessing or purchasing from our website, you
      agree to comply with our terms and policies.
    </p>
    <ul className="list-disc ml-6 space-y-2">
      <li>All products are for personal use and not for resale.</li>
      <li>Prices and availability are subject to change without notice.</li>
      <li>
        Nutraline reserves the right to cancel any order due to pricing errors
        or stock unavailability.
      </li>
      <li>
        Product descriptions and images are for reference only. Please read
        labels carefully before use.
      </li>
      <li>
        Users must be 18+ or have parental consent to make a purchase.
      </li>
    </ul>
  </div>
);

export default TermsAndConditions;
