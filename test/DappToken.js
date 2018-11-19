var DappToken = artifacts.require("./DappToken.sol");
contract("Dapptoken", function(accounts){
	it("Set the total supply upon dployment",function(){
		return DappToken.deployed().then(function(instance){
			tokenInstance = instance;
			return tokenInstance.totalSupply();

		}).then(function(totalSupply) {
		assert.equal(totalSupply.toNumber(),1000000, "set total supply to 1000000")	
		})
	})
})