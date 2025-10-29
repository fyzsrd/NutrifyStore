import React from "react";

const CancellationAndRefund = () => (
  <div>
    <h1 className="text-2xl font-semibold mb-4">
      Cancellation & Refund Policy
    </h1>
    <p className="mb-3">
      We aim to ensure your satisfaction with every purchase. Please review our
      policy below:
    </p>
    <ul className="list-disc ml-6 space-y-2">
      <li>
        Orders can be cancelled within 2 hours of placing the order by
        contacting our support team.
      </li>
      <li>
        Refunds are applicable only for defective, damaged, or wrongly
        delivered products.
      </li>
      <li>
        Products must be returned in their original, sealed packaging within 7
        days of delivery.
      </li>
      <li>Refunds will be processed within 5–7 business days after approval.</li>
      <li>
        No refunds are issued for opened supplement containers or used items.
      </li>
    </ul>
  </div>
);

export default CancellationAndRefund;
