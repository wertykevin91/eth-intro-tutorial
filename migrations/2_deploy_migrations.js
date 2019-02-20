const HelloWorld = artifacts.require("HelloWorld");

module.exports = function(deployer, network, accounts){
    const message = "Hello world.";
    deployer.deploy(HelloWorld, message)
    .then(function(helloWorldInstance){
        return helloWorldInstance.message.call();
    }).then(function(messageFromSmartContract){
        console.log(messageFromSmartContract);
    });
};