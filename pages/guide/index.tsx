import React from 'react';

const GuidePage: React.FC = () => {
    return (
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
            <div className="container mx-auto p-20 bg-gray-100">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Guide to Connecting Your Wallet and Making Payments</h1>

                <p className="text-base mb-6">To start making payments, please connect your wallet to our system.</p>

                <div className="bg-white p-5 rounded shadow mb-4">
                    <h2 className="text-2xl font-semibold text-gray-700">Step 1: Set up Your Wallet</h2>
                    <p className="text-gray-600">First, you need to set up a supported wallet like Nami or Eternl. You can download it from their official website.</p>
                </div>

                <div className="m-5 ml-5 flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-2">Connect Nami Wallet</h2>
                        <p className="text-base mb-4">Please click the button below to connect your Nami wallet.</p>
                        <a
                            href="https://www.namiwallet.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Connect Nami Wallet
                        </a>
                    </div>

                    <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-2">Connect Eternl Wallet</h2>
                        <p className="text-base mb-4">Please click the button below to connect your Eternl wallet.</p>
                        <a
                            href="https://eternl.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Connect Eternl Wallet
                        </a>
                    </div>
                </div>

                <div className="bg-white p-5 rounded shadow mb-4">
                    <h2 className="text-2xl font-semibold text-gray-700">Step 2: Connect Your Wallet</h2>
                    <p className="text-gray-600">Open your wallet app and select the "Connect" option. When prompted, allow our website to connect to your wallet.</p>
                    <p className="text-gray-600">Choose the <span className='font-bold text-black'>Preprod</span> network.</p>
                </div>

                <div className="bg-white p-5 rounded shadow mb-4">
                    <h2 className="text-2xl font-semibold text-gray-700">Step 3: Confirm Connection</h2>
                    <p className="text-gray-600">When you connect, a notification will appear in your wallet to confirm the connection. Click "Confirm" to continue.</p>
                </div>

                <div className="bg-white p-5 rounded shadow mb-4">
                    <h2 className="text-2xl font-semibold text-gray-700">Step 4: Get Test ADA</h2>
                    <p className="text-gray-600">Get ADA from Cardano Faucet</p>
                    <p className="text-gray-600">Follow these steps to get ADA from Cardano faucet for testing purposes:</p>
                    <ol className="list-decimal mb-6 ml-20 font-16">
                        <li className="m-1">
                            <p>Go to the Cardano faucet website: <a className='text-red-700' href="https://docs.cardano.org/cardano-testnets/tools/faucet/" target="_blank" rel="noopener noreferrer">https://docs.cardano.org/cardano-testnets/tools/faucet/</a></p>
                        </li>
                        <li className="m-1">
                            <p>Enter your Cardano wallet address to receive ADA.</p>
                        </li>
                        <li className="m-1">
                            <p>Choose the <span className='font-bold'>Preprod Testnet</span> network.</p>
                        </li>
                        <li className="m-1">
                            <p>Click the "Get ADA" button to request ADA.</p>
                        </li>
                        <li className="m-1">
                            <p>Wait for the transaction to be confirmed on the Cardano testnet.</p>
                        </li>
                        <li className="m-1">
                            <p>Check your Cardano wallet to see if the ADA has been received successfully.</p>
                        </li>
                    </ol>

                    <p className="text-lg mt-2">
                        Note: Cardano faucet only works on the testnet, so make sure you are using a testnet wallet address. Also, please do not abuse the faucet!
                    </p>
                </div>

                <div className="bg-white p-5 rounded shadow mb-4">
                    <h2 className="text-2xl font-semibold text-gray-700">Step 5: Make a payment</h2>
                    <p className="text-gray-600">After connecting successfully, you can make a payment by selecting a product and clicking the "Buy Now" button.</p>
                    <p className="text-gray-600">We will automatically take your wallet address and process the transaction.</p>
                </div>

                <div className="bg-white p-5 rounded shadow mb-4">
                    <h2 className="text-2xl font-semibold text-gray-700">Step 6: Confirm transaction</h2>
                    <p className="text-gray-600">When the transaction is complete, you will receive a confirmation notification from your wallet.</p>
                </div>

                <p className="text-lg mt-10">
                    <span className='font-bold text-red-600'>Note:</span> If your account does not have sufficient funds, our system will automatically notify you of a payment error. Please check your account and try again.
                </p>
            </div>
        </div>
    );
};

export default GuidePage;