import React from 'react';

function ThankYouPage() {
  return (
    <div className="flex items-start justify-center h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="w-3/4 max-w-xl p-8 bg-white rounded-lg shadow-md mt-12">
        <h2 className="text-2xl font-semibold mb-4">Thank You for your Response!</h2>
        <p className="text-gray-600">You may close this tab now.</p>
      </div>
    </div>
  );
}

export default ThankYouPage;

