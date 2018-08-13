# Land Network

## Our Hack:
>Built a decentralised Land Title Ownership Dapp through which a land owner can sell his land to a peer without the involvement of government or any middlemen once registered.
The application is based on top of the Ethereum Blockchain.


## Objectives:

> 1.Solves the problem of land ownership transparency.

> 2.Preventing fraudulent selling/buying of land title ownership transfer.

> 3.On the go selling and buying of land.

## Token Information :

>Token name - LAND

>Token symbol - LND

>Token type - Asset token(Here asset is land).

>Tokens are distributed by the government at the time of registration based on the area of land owned by the owner. 
1 square metre = 1 token.

>The contract considers a total of 1000 tokens which can only be bouught or transferred in exchange for ether.


## Features:
The Dapp contains Admin page which can be accessed only by the Government initially after the creation of the Dapp.

**The Admin Dashboard contains**:
>a) PDF Generation and Upload to IPFS: the Governments needs to upload the Land Title Documents to IPFS.

>b) Register data: The Government initially uploads the details of land owners of the country including the hash of the documents
 that are uploaded to IPFS.
 
>c) Analysis: A Page to check the Land Details of the citizens and also the details of selling and buying land.

>d) Map: The Dapp contains a map in which the users can verify the Land details of every plot of land.

>![admin](https://user-images.githubusercontent.com/34987253/44001257-4a46796c-9e4c-11e8-9fe1-f07818c2f971.png)


**User Page contains**:

>a)User Details : Displays the land ownership details of the Users.

>b)Selling : Page to update necessary details related to Selling one's land.

>c)Buying : Page for Buying a land.

>d)Upload To IPFS : Buyer needs to upload downloaded Land Deeds to IPFS.

>e)Update IPFS details : The final step of buying where the user  updates his IPFS hash.


>![user](https://user-images.githubusercontent.com/34987253/44001258-4ab275b8-9e4c-11e8-8dbd-69dbe58eda51.png)


## Implementation:
### The Decentralised app:

>The app contains Admin panel in which the Government needs to upload the details of all the land owners.
The admin(Govt.) needs to do this once only during the time of creation of the app and doesnot need to take part in any of the 
land Selling or Buying Process thereafter.register
The land owner gets the details of his land in his dashboard.
He can put his land up for sale through his dashboard.
The potential buyer after browsing the land details in the dapp can buy the land
from the app itself.
He needs to pay the seller the displayed amount and the land deeds are  issued to the
user through the app itself,
His land record gets stored in the immutable blockcahin and also the hash of his documents gets stored in IPFS.
The seller account also gets updated to the latest changes of his land.
The area of land is made equivalent to a Liquidity Token that is not related to the outer market and can only be accessed for this purposre.

## Technologies Used:
>IPFS

>npm

>Infura

>Ganache-cli

>Remix IDE

## How to use

> npm install -g

> git clone https://github.com/SamujjalDas/EthIndia---Team-CryptoCoders-

> cd EthIndia---Team-CryptoCoders--master

> Run Ganache / ganache-cli

> Deploy the smart contract in Remix IDE

> Copy and place the ABI and address at required places 

## Team members 

> 1.Samujjal Das

> 2.Himshikhar Gayan

> 3.Pranjit Medhi
