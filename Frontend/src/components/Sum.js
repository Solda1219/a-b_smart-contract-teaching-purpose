import React, { useState } from "react";
import detectEthereumProvider from '@metamask/detect-provider'
import Web3 from 'web3'
import SUM from "./contractABI"

function CreateTodo() {
    const [a, setA] = useState(1);
    const [b, setB] = useState(8);
    const [c, setC] = useState(8);

    const onChangeA = (event) => setA(event.target.value);
    const onChangeB = (event) => setB(event.target.value);
    const onChangeC = (event) => setC(event.target.value);

    const getContractAddress = (web3Data) => {
        return SUM.address;
    }

    async function onSubmit (event) {
        event.preventDefault();

        //connect wallet
        const currentProvider = await detectEthereumProvider();
        console.log("currentProvider", currentProvider);
        console.log('window.etherium', window.ethereum);
        console.log(currentProvider===window.ethereum)
        if (currentProvider) {
            let web3Instance = new Web3(currentProvider);
            console.log("window.ethereum.selectedAddress",window.ethereum.selectedAddress)
            if (!window.ethereum.selectedAddress) {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
            }
            let currentAddress = window.ethereum.selectedAddress;
            const chainId = await currentProvider.request({
                method: 'eth_chainId'
            })
            var web3 = {
                isInjected: true,
                ethProvider: window.ethereum,
                web3Instance: web3Instance,
                address: currentAddress,
                networkId: chainId,
            };
        } else {
            console.log("No currentProvider!");
        }

        if (web3.isInjected) {
            let address = getContractAddress(web3);
            if (address != "") {
                var contract = new web3.web3Instance.eth.Contract(SUM.sumABI, address);
            } else {
                console.log("no contract exist!");
            }
        }
        else {
            console.log("web3 is not injected!");
        }

        await contract.methods
        .sum(
            a,
            b
        )
        .send({
            from: web3.address,
        })
        .then((data) => {
            setC(data.events.Sum.returnValues.sum);
        })
    }
    return (
        <div class= "m-5" style={{ marginTop: 10 }}>
            <h3>Sniper</h3>
            <form onSubmit={(e) => onSubmit(e)}>
                <div calssName="form-group">
                    <label>Origin Coin:</label>
                    <input type="text"
                        className="form-control"
                        value={a}
                        onChange={(e) => onChangeA(e)}
                    />
                </div>
                <div calssName="form-group m-3">
                    <label>New Lunched Coin:</label>
                    <input type="text"
                        className="form-control"
                        value={b}
                        onChange={(e) => onChangeB(e)}
                    />
                </div>
                <div calssName="form-group m-3">
                    <label>Profit%?:</label>
                    <input type="text"
                        className="form-control"
                        value={c}
                        onChange={(e) => onChangeC(e)}
                    />
                </div>
                <div className="form-group m-3">
                    <input type="submit" value="Shut" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}

export default CreateTodo;