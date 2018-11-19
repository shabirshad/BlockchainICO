pragma solidity ^0.4.2;

contract DappToken {
	//constractor  
	//set the total number token
	//read the total number oftoken
	uint256 public totalSupply;
	
	function DappToken() public {
		totalSupply = 1000000;
	}
	
}
