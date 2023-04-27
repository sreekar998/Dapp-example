import React, { useState } from "react";
import { ethers } from "ethers";
import IncrementDecrement from "./artifacts/contracts/IncrementDecrement.sol/IncrementDecrement.json";

import "./App.css"

const contractAddress = "0x99E53E232ec2e3Ab14efE39d1E8C516D313f104E"; // Replace with the actual contract address

function App() {
  const [counter, setCounter] = useState(0);
  const [contract, setContract] = useState(null);
  const [error, setError] = useState(null);

  async function connectToContract() {
    try {
      // Connect to the Ethereum network using the MetaMask provider
      if (window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()

        // Load the contract using the ABI and address
        const contract = new ethers.Contract(
          contractAddress,
          IncrementDecrement.abi,
          signer
        );

        setContract(contract);
      } else {
        setError("Please install MetaMask to use this app");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to the contract");
    }
  }

  async function incrementCounter() {
    try {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()

        // Load the contract using the ABI and address
        
        const contract = new ethers.Contract(
          contractAddress,
          IncrementDecrement.abi, signer
        );

        setContract(contract);
      
      // Call the increment function on the contract
      await contract.increment();

      // Update the counter state
      const newCounter = await contract.counter();
      setCounter(newCounter.toNumber());
    } catch (err) {
      console.error(err);
      setError("Failed to increment the counter");
    }
  }

  async function decrementCounter() {
    try {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()

      // Load the contract using the ABI and address
      
      const contract = new ethers.Contract(
        contractAddress,
        IncrementDecrement.abi,
        signer
      );

      setContract(contract);
      // Call the decrement function on the contract
      await contract.decrement();

      // Update the counter state
      const newCounter = await contract.counter();
      setCounter(newCounter.toNumber());
    } catch (err) {
      console.error(err);
      setError("Failed to decrement the counter");
    }
  }

  async function resetCounter() {
    try {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()

      // Load the contract using the ABI and address
      
      const contract = new ethers.Contract(
        contractAddress,
        IncrementDecrement.abi,
        signer
      );

      setContract(contract);
      // Call the reset function on the contract
      await contract.reset();

      // Update the counter state
      const newCounter = await contract.counter();
      setCounter(newCounter.toNumber());
    } catch (err) {
      console.error(err);
      setError("Failed to reset the counter");
    }
  }

  return (
    <div>
      <h1>Increment-Decrement Contract</h1>
      {error && <p>{error}</p>}
      {!contract ? (
        <button onClick={connectToContract}>Connect to Contract</button>
      ) : (
        <div>
          <p>Counter: {counter}</p>
          <button onClick={incrementCounter}>Increment</button>
          <button onClick={decrementCounter}>Decrement</button>
          <button onClick={resetCounter}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default App;


