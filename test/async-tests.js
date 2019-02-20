const BigNumber = require("bignumber.js");
const HelloWorld = artifacts.require("HelloWorld");

// Deploy contract
contract("HelloWorld Contract", async(accounts)=>{
    // Test 1
    it("Get hello world message from contract", async()=>{
        // 1. Wait until the contract is deployed
        let helloWorldContract = await HelloWorld.deployed();

        // 2. Get message from contract
        let message = await helloWorldContract.message.call();

        // 3. Check if the message is the same as the input
        assert.strictEqual("Hello world.", message, "Hello world message is incorrect");
    });

    // Test 2
    it("test number", async()=>{
        // 1. Wait until the contract is deployed
        let helloWorldContract = await HelloWorld.deployed();

        // 2. Create bignumber
        let hugeNumber = new BigNumber("18000000000000000000"); // 18 million.

        // 3. Write number to contract
        let receipt = await helloWorldContract.saveNumber(web3.utils.toBN(hugeNumber));

        // 4. Check
        let number = await helloWorldContract.getNumber.call();
        // Similarly, below achieves the same result.
        //let number = await helloWorldContract.number.call();

        // the toString method MIGHT generate different outputs since they are from the same library. 
        // safest way is still to convert to a single library type
        assert.strictEqual(number.toString(), web3.utils.toBN(hugeNumber).toString(), "Number is not the same.");
    });
});

