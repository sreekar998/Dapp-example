// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Greeter {
    string private greeting;

    event Withdrawal(uint amount, uint when);

    constructor(string memory _greeting) payable {
        greeting = _greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    function greet() public view returns(string memory) {
        return greeting;
    }
}
