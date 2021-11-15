const SUM = {
    // address: "0x1b520D04F127cdb75446a895808469F5de509fb3",
    address: "0x00c6CD0c1EdfFBFBD1b9BB6cC96b0E8f261c0CB1",
    "sumABI": [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "b",
                    "type": "uint256"
                }
            ],
            "name": "sum",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "sum",
                    "type": "uint256"
                }
            ],
            "name": "Sum",
            "type": "event"
        }
    ],
};
export default SUM;
