pragma solidity ^0.4.23;

contract LandToken{

    string public name = "Land Token";
    string public symbol = "LAND";
    uint256 public totalSupply = 1000;

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 value 
    );

    mapping(address=>uint256) public balanceOf;
 

    constructor() public {
        balanceOf[msg.sender] = totalSupply;
    }

    //calling this on out own behalf
    //area is the value of actual area/100
    //100 sq. m = 1 token
    //used to distribute land initially by govt
    function transfer(address _to,uint256 area) public {

        require(balanceOf[msg.sender] >= area);
        balanceOf[msg.sender] -= area;
        balanceOf[_to] += area;

        emit Transfer(msg.sender,_to,area);

    }

    //need to be modified
    function calculateValue(uint256 area) public pure returns(uint256){
        uint256 value = area;
        return value;
    }

    //weiValue - Amount set by seller for land 
    //transfer ether and token
    

    //check ether balance 
    function checkEthBalance(address _address)public view returns(uint256){
        return _address.balance;
    }
    


}



contract LandEntry is LandToken{
    
    
    struct LandData{
        uint256 coordinate1;
        uint256 coordinate2;
        uint256 coordinate3;
        uint256 coordinate4;
        uint256 token;
        string landAddress;
        uint256 id;
        uint256 area;
    }

    //for ipsh hash storage
  //  struct Multihash {
    //    bytes32 digest;
      //  uint8 hashFunction;
      //  uint8 size;
  //  }


    struct ForSaleData{
        uint256 coor1;
        uint256 coor2;
        uint256 coor3;
        uint256 coor4;
        uint256 area;
    }

    mapping(address => bool)public isForSale;
    mapping(address => LandData)public landData;
    //mapping(address => Multihash)public ipfsHash;
    mapping(address=>string)public hashValue;
    mapping(address => uint256)public landPrice;
    mapping(address => ForSaleData)public forSaleData;
    mapping(address => bool)public isSaleData;  
    mapping(address => bool)public isRegistered;
    mapping(address => bool)public readyForIpfsEntry;

    uint idOriginal;
    uint idNewBuyer;

  //  uint256 public zeroEther = 0 ether;
    function registerData(
        address _ownerAddress,
        uint256 _coordinate1,
        uint256 _coordinate2,
        uint256 _coordinate3,
        uint256 _coordinate4,
        uint256 _token,
        string _landAddress,
        uint256 _area,
      //  bytes32 _digest,
       // uint8 _hashFunction,
     //   uint8 _size
        string hashV
        ) public {
        require(msg.sender == 0x390df036214b07e363f114af87faa5f3c1ebe162);
        idOriginal++;
        landData[_ownerAddress] = LandData(_coordinate1,_coordinate2,_coordinate3,_coordinate4,_token,_landAddress,idOriginal,_area);
        isForSale[_ownerAddress] = false;
        transfer(_ownerAddress, _area);
      //  ipfsHash[_ownerAddress] = Multihash(_digest,_hashFunction,_size);
        hashValue[_ownerAddress] = hashV;
        isRegistered[_ownerAddress] = true;
    }

    function getTokenInfo(address _ownerAddress)public view returns(uint256){
        return landData[_ownerAddress].token;
    }

    //available for sale only if saleData set by owner
    //_landPrice is in ether
    function forSale(address _ownerAddress,uint256 _landPrice)public {
        require(msg.sender == _ownerAddress);
        require(isForSale[_ownerAddress] == true);
        require(isSaleData[_ownerAddress] == true);
        landPrice[_ownerAddress] = _landPrice;
    }

    //set the area that is for sale
    function saleData(address _ownerAddress,uint256 c1,uint256 c2,uint256 c3,uint256 c4,uint256 area)public{
        require(_ownerAddress == msg.sender);
         require(isRegistered[_ownerAddress]==true);
        isForSale[_ownerAddress] = true;
        forSaleData[_ownerAddress] = ForSaleData(c1,c2,c3,c4,area);
        isSaleData[_ownerAddress] = true;

    }

    //function getSaleData()

    function getMsgSender()public view returns(address){
        return msg.sender;
    }

    //making land not available for sale
    function notforSale(address _ownerAddress)public {
        require(msg.sender == _ownerAddress);
        isForSale[msg.sender] = false;
    }

    function getLandPrice(address _ownerAddress)public view returns(uint256){
        return landPrice[_ownerAddress];
    }

    //function to buy a land which is up for sale
    //once ether in paid to owner ,ownership will be transferred automatically
    //c1,c2,c3,c4 are the coordinates which the original owner will hold after transfer
    function processBuy(
        address _ownerAddress,
        address _buyerAddress,string _landAddress,
        uint256 c1,uint256 c2,uint256 c3,uint256 c4,
        uint256 ethValue)public payable{
        require(isForSale[_ownerAddress] == true);
        require(isRegistered[_ownerAddress] == true);
        require(msg.sender == _buyerAddress);
        buyTokens(_buyerAddress,_ownerAddress,ethValue);
        
        //transfer ownership

        //tranfer owner to buyer
        if(isRegistered[_buyerAddress] == true){ //if the buyer info is  registered,his id is retained
            landData[_buyerAddress] = LandData(
                forSaleData[_ownerAddress].coor1,
                forSaleData[_ownerAddress].coor2,
                forSaleData[_ownerAddress].coor3,
                forSaleData[_ownerAddress].coor4,
                forSaleData[_ownerAddress].area,
                //calculateValue(forSaleData[_ownerAddress].area),
                _landAddress,
                landData[_buyerAddress].id,
                forSaleData[_ownerAddress].area);

        }else{  //if the buyer info is not registered,he gets a new id
            idNewBuyer++;
            landData[_buyerAddress] = LandData(
                forSaleData[_ownerAddress].coor1,
                forSaleData[_ownerAddress].coor2,
                forSaleData[_ownerAddress].coor3,
                forSaleData[_ownerAddress].coor4, forSaleData[_ownerAddress].area,
                //calculateValue(forSaleData[_ownerAddress].area),
                _landAddress,
                idNewBuyer,
                forSaleData[_ownerAddress].area);
            isRegistered[_buyerAddress] = true;
            isForSale[_buyerAddress] = false;
            
            
        }
        //update details of original owner's land
        landData[_ownerAddress] = LandData(
            c1,c2,c3,c4,
            balanceOf[_ownerAddress],
            _landAddress,
            landData[_ownerAddress].id,
            landData[_ownerAddress].area - forSaleData[_ownerAddress].area);
            
        isForSale[_buyerAddress] = false;
        readyForIpfsEntry[_buyerAddress] = true;
        readyForIpfsEntry[_ownerAddress] = true;
        isForSale[_ownerAddress] = false;
        landPrice[_ownerAddress] = 0;

    }

    function processIpfs(
        address _buyerAddress,
        address _ownerAddress,
      //  bytes32 _digest1,
      //  uint8 _hashFunction1,
       // uint8 _size1,
     //   bytes32 _digest2,
     //   uint8 _hashFunction2,
     //   uint8 _size2
        string hash1,
        string hash2
        )public{
        require(readyForIpfsEntry[_buyerAddress] == true);
        require(readyForIpfsEntry[_ownerAddress] == true);

      //  ipfsHash[_ownerAddress] = Multihash(_digest1,_hashFunction1,_size1);
      //  ipfsHash[_buyerAddress] = Multihash(_digest2,_hashFunction2,_size2);
        
        hashValue[_buyerAddress] = hash1;
        hashValue[_ownerAddress] = hash2;
        readyForIpfsEntry[_buyerAddress] = false;
        readyForIpfsEntry[_ownerAddress] = false;
    }

    function buyTokens(address _buyerAddress,address _sellerAddress,uint256 _ethValue)public payable returns(bool){
        require(checkEthBalance(_buyerAddress) >= landPrice[_sellerAddress]);
        require(balanceOf[_sellerAddress] >= forSaleData[_sellerAddress].area);
        processTransaction(_sellerAddress,_ethValue);
        balanceOf[msg.sender] += forSaleData[_sellerAddress].area;
        balanceOf[_sellerAddress] -= forSaleData[_sellerAddress].area;
        return true;
    }

    //transfer ether ... desired ether not gettting send
    function processTransaction(address _sellerAddress,uint256 ethValue)public payable{
     
        if(ethValue == landPrice[_sellerAddress]){
            //require(msg.sender.balance >= msg.value);
         //  require(msg.value == landPrice[_sellerAddress]);
            _sellerAddress.transfer(msg.value);
     }else{
            revert();
     }
    
    }


    
     function getcoordinate(address _address) public view returns(
         uint256, uint256, uint256, uint256){
             return(landData[_address].coordinate1 , 
             landData[_address].coordinate2,landData[_address].coordinate3
             ,landData[_address].coordinate4);
         }
     
   function getlanddata(address _address) public view returns(
         uint256, string, uint256, uint256){
             return(landData[_address].token , 
             landData[_address].landAddress,landData[_address].id
             ,landData[_address].area);
         }

        
    function getSaleData(address _ownerAddress) public view returns(uint256,uint256,uint256,uint256,uint256,uint256){
            return (forSaleData[_ownerAddress].coor1,forSaleData[_ownerAddress].coor2,forSaleData[_ownerAddress].coor3,
                    forSaleData[_ownerAddress].coor4, forSaleData[_ownerAddress].area,landPrice[_ownerAddress]);
    }


}


