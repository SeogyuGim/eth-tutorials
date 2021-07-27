// SPDX-Liscence-Identifier: MIT
pragma solidity >=0.7.0;

contract Counter {
    uint256 public count = 0;

    function increment() public {
        count += 1;
    }

    function getCount() public view returns (uint256) {
        return count;
    }
}
