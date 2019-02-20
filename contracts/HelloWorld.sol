pragma solidity ^0.5.0;

contract HelloWorld {
    string public message;
    uint public number;

    constructor(string memory _message) public {
        message = _message;
    }

    function saveNumber(uint _number) public returns(bool) {
        number = _number;
        return true;
    }

    function getNumber() public view returns(uint){
        return number;
    }
}
