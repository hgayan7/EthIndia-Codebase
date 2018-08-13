 if(typeof web3 !=='undefined')
        {
                web3 = new Web3(web3.currentProvider);
        }
        else{
                web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
        web3.eth.defaultAccount = web3.eth.accounts[7];

        var Contract = web3.eth.contract(
			[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_buyerAddress",
				"type": "address"
			},
			{
				"name": "_sellerAddress",
				"type": "address"
			},
			{
				"name": "_ethValue",
				"type": "uint256"
			}
		],
		"name": "buyTokens",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ownerAddress",
				"type": "address"
			},
			{
				"name": "_landPrice",
				"type": "uint256"
			}
		],
		"name": "forSale",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ownerAddress",
				"type": "address"
			}
		],
		"name": "notforSale",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ownerAddress",
				"type": "address"
			},
			{
				"name": "_buyerAddress",
				"type": "address"
			},
			{
				"name": "_landAddress",
				"type": "string"
			},
			{
				"name": "c1",
				"type": "uint256"
			},
			{
				"name": "c2",
				"type": "uint256"
			},
			{
				"name": "c3",
				"type": "uint256"
			},
			{
				"name": "c4",
				"type": "uint256"
			},
			{
				"name": "ethValue",
				"type": "uint256"
			}
		],
		"name": "processBuy",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_buyerAddress",
				"type": "address"
			},
			{
				"name": "_ownerAddress",
				"type": "address"
			},
			{
				"name": "hash1",
				"type": "string"
			},
			{
				"name": "hash2",
				"type": "string"
			}
		],
		"name": "processIpfs",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_sellerAddress",
				"type": "address"
			},
			{
				"name": "ethValue",
				"type": "uint256"
			}
		],
		"name": "processTransaction",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ownerAddress",
				"type": "address"
			},
			{
				"name": "_coordinate1",
				"type": "uint256"
			},
			{
				"name": "_coordinate2",
				"type": "uint256"
			},
			{
				"name": "_coordinate3",
				"type": "uint256"
			},
			{
				"name": "_coordinate4",
				"type": "uint256"
			},
			{
				"name": "_token",
				"type": "uint256"
			},
			{
				"name": "_landAddress",
				"type": "string"
			},
			{
				"name": "_area",
				"type": "uint256"
			},
			{
				"name": "hashV",
				"type": "string"
			}
		],
		"name": "registerData",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ownerAddress",
				"type": "address"
			},
			{
				"name": "c1",
				"type": "uint256"
			},
			{
				"name": "c2",
				"type": "uint256"
			},
			{
				"name": "c3",
				"type": "uint256"
			},
			{
				"name": "c4",
				"type": "uint256"
			},
			{
				"name": "area",
				"type": "uint256"
			}
		],
		"name": "saleData",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "area",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "area",
				"type": "uint256"
			}
		],
		"name": "calculateValue",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "checkEthBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "forSaleData",
		"outputs": [
			{
				"name": "coor1",
				"type": "uint256"
			},
			{
				"name": "coor2",
				"type": "uint256"
			},
			{
				"name": "coor3",
				"type": "uint256"
			},
			{
				"name": "coor4",
				"type": "uint256"
			},
			{
				"name": "area",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getcoordinate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getlanddata",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_ownerAddress",
				"type": "address"
			}
		],
		"name": "getLandPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMsgSender",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_ownerAddress",
				"type": "address"
			}
		],
		"name": "getSaleData",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_ownerAddress",
				"type": "address"
			}
		],
		"name": "getTokenInfo",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "hashValue",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "isForSale",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "isRegistered",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "isSaleData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "landData",
		"outputs": [
			{
				"name": "coordinate1",
				"type": "uint256"
			},
			{
				"name": "coordinate2",
				"type": "uint256"
			},
			{
				"name": "coordinate3",
				"type": "uint256"
			},
			{
				"name": "coordinate4",
				"type": "uint256"
			},
			{
				"name": "token",
				"type": "uint256"
			},
			{
				"name": "landAddress",
				"type": "string"
			},
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "area",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "landPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "readyForIpfsEntry",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);

var myContract =Contract.at('0x2edf9455e3336fb9745b028405a91ac88979ada0');

console.log(myContract);
var c1,c2,c3,c4,token,address,id,area;


var myaddress=web3.eth.defaultAccount;
   myContract.getcoordinate(myaddress, function(error,result){
             if(!error){
              
             c1=result[0];
             c2=result[1];
              c3=result[2];
              c4=result[3];

              console.log(result);

             }
             else{
                 alert("garbar");
             }
         })
   
		 myContract.getlanddata(myaddress, function(error,result){
             if(!error){
              
             
                token=result[0];
              address=result[1];
              id=result[2];
             area=result[3];
              console.log(result);

             }
             else{
                 alert("garbar");
             }
         })
   




function certi(){

var doc = new jsPDF('landscape')
doc.setFontSize(30)
doc.setFont('helvetica')
doc.setFontType('bold')
doc.text('Land Certificate', 120, 25)

doc.rect(10, 10, 277, 190)

doc.setLineWidth(1)
doc.line(210, 30, 110, 30)




doc.setFontSize(25)
doc.text("Address  :",30,120)

doc.setFontSize(22)
doc.text(address,82,120)

doc.setLineWidth(0.5)
doc.line(250, 120, 80, 122)

doc.setFontSize(25)
doc.text("Area        :",30,140)

doc.setFontSize(22)
doc.text(area+"  square feet",82,140)

doc.setLineWidth(0.5)
doc.line(250, 140, 80, 142)

doc.setFontSize(22)
doc.text("Coordinate:",30,160)

doc.setFontSize(22)
doc.text(c1 + " ,"+c2+","+c3 + " ,"+c4,82,160)

doc.setLineWidth(0.5)
doc.line(250, 160, 80, 162)
doc.save('Certificate.pdf')

}