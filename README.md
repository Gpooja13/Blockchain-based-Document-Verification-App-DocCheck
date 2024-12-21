![Logo](https://cdn-icons-png.flaticon.com/128/9881/9881807.png)

# DocCheck

DocCheck is a decentralized application (DApp) for secure document validation and verification, utilizing blockchain technology to prevent fraud. Built using smart contracts, DocCheck allows users to upload, view, and verify various documents like certificates and degrees with enhanced transparency and security.

DocCheck ensures transparency and prevents fraud by providing a tamper-proof record for every document. Each document uploaded is immutably recorded on the blockchain, allowing for reliable verification and traceability. Whether you're a student, professional, or organization, DocCheck safeguards the authenticity and integrity of your documents, offering a seamless solution for secure document storage and verification. Powered by smart contracts, DocCheck guarantees that your documents remain protected and fraud-proof throughout their lifecycle. Experience the future of document management with blockchain-powered verification. Join us in redefining trust with DocCheck!

## Table of Contents
- [Features](#features)
- [Usage](#usage)
- [Demo](#Demo)
- [Screenshots](#Screenshot)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Contract Deployment](#contract-deployment)
- [Contributing](#contributing)
- [Contact](#Contact)

---

## Features
- **Decentralized Document Storage**: Store document metadata on the blockchain for enhanced security.
- **Secure Verification**: Verify document authenticity with a blockchain-based ledger to prevent tampering or unauthorized modifications.
- **Transparent Access**: Publicly accessible validation records, ensuring transparency and reliability in the verification process.
- **User-Friendly Interface**: A React-based UI for an intuitive experience.


## Usage

1. **Admin Panel**:
   - Accessible only by the owner’s address (set in the environment configuration).
   - Allows adding and deleting document issuers (authorities).

2. **Add Document Issuer**:
   - Admin can add new authorities responsible for issuing documents.
   - Authority information is stored on the blockchain for transparency.

3. **View Logs**:
   - Track all registered authorities and changes, including the timestamp for each action.

4. **Verify Document**:
   - Users can verify the validity of a document by searching for its issuer and corresponding data on the blockchain.

5. **View Issued Document**:
   - View or find specific issued documents by entering the credentials used at issuance (such as user ID and email).
   - This feature helps users or authorities quickly locate and verify document details on the blockchain for validation purposes.

**Note: Viewing documents does not require a Metamask account. However, a Metamask account is necessary for performing other operations, such as document issuance or verification.**

## Demo

The E-commerce demo can be viewed online here:
https://shopping-hyo8rc365-gpooja13s-projects.vercel.app/

Check out video here: [Demo video](https://res.cloudinary.com/cloudtrial/video/upload/v1715411758/InShot_20240511_120219589_hzauey.mp4)

## Screenshots

- Login Page
![Login](https://res.cloudinary.com/cloudtrial/image/upload/v1715412750/Screenshot_242_qrmt58.png)

- Home Page
![Home](https://res.cloudinary.com/cloudtrial/image/upload/v1715412752/Screenshot_237_l5zjtv.png)


## Tech Stack
- **Frontend**: React.js
- **Backend**: Smart contracts (using Solidity)
- **Blockchain**: Ethereum (Sepolia testnet for testing)
- **Libraries/Frameworks**: 
  - Web3.js for interacting with the blockchain
  - Context API for state management
  - Tailwind CSS for styling

## Prerequisites
1. **Node.js** (>= 14.0.0)
2. **npm** (or **yarn**)
3. **Metamask** browser extension (or any other Ethereum wallet)
4. Access to the **Sepolia Ethereum Testnet**

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/docchain.git
cd docchain
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the project root and configure the following variables:
```plaintext
REACT_APP_INFURA_API_KEY=<Your Infura Project ID>
REACT_APP_CONTRACT_ADDRESS=<Your Deployed Smart Contract Address>
REACT_APP_OWNER_ADDRESS=<Owner's Wallet Address for Admin Privileges>
```

### 4. Start the Development Server
```bash
npm start
```

### 5. Connect to Metamask
Make sure your Metamask is connected to the **Sepolia testnet**. Import test ETH from a faucet if necessary for transaction testing.

## Contract Deployment

### Compile and Deploy the Smart Contract
1. **Compile** the contract using a tool like [Remix IDE](https://remix.ethereum.org/) or Hardhat.
2. **Deploy** the contract on the Sepolia testnet.
3. Note down the contract address and update the `.env` file with the `REACT_APP_CONTRACT_ADDRESS`.

### Update Contract ABI
Ensure that the compiled contract ABI is imported into your application to facilitate blockchain interactions.

## Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

### Steps to Contribute
1. Fork the project.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.


## Contact

For any questions or feedback, please contact: pooja13gupta09@gmail.com.


## Additional Information

Admin login credentials:
gpooja@yahoo.com
pooja13

User login credentials:
jane@gmail.com
Jane123



---

