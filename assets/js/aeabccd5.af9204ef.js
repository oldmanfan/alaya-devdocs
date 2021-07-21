(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[7566],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6719:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),o={id:"ARC721",title:"ARC721",sidebar_label:"ARC721"},l=void 0,s={unversionedId:"ARC721",id:"ARC721",isDocsHomePage:!1,title:"ARC721",description:"Abstact",source:"@site/docs/ARC721.md",sourceDirName:".",slug:"/ARC721",permalink:"/alaya-devdocs/ARC721",editUrl:"https://github.com/luo-dahui/alaya-devdocs/tree/v2/website/docs/ARC721.md",version:"current",frontMatter:{id:"ARC721",title:"ARC721",sidebar_label:"ARC721"},sidebar:"docs",previous:{title:"ARC20",permalink:"/alaya-devdocs/ARC20"},next:{title:"AlayScan",permalink:"/alaya-devdocs/AlayScan"}},d=[{value:"Abstact",id:"abstact",children:[]},{value:"ARC-721 Token Standard",id:"arc-721-token-standard",children:[{value:"ARC-721 &amp; ARC-165 Interfaces",id:"arc-721--arc-165-interfaces",children:[]},{value:"Required interfaces",id:"required-interfaces",children:[]},{value:"\u53ef\u9009\u5b9e\u73b0\u7684\u63a5\u53e3",id:"\u53ef\u9009\u5b9e\u73b0\u7684\u63a5\u53e3",children:[]},{value:"Event",id:"event",children:[]}]},{value:"Example",id:"example",children:[]},{value:"View Token",id:"view-token",children:[]},{value:"Contract Deployment",id:"contract-deployment",children:[]},{value:"Method call",id:"method-call",children:[{value:"Install the dependencies",id:"install-the-dependencies",children:[]},{value:"Instantiation",id:"instantiation",children:[]},{value:"Query Contract Information",id:"query-contract-information",children:[]},{value:"Sending a contract transaction",id:"sending-a-contract-transaction",children:[]},{value:"Get contract events",id:"get-contract-events",children:[]}]},{value:"Upload Metadata to IPFS network",id:"upload-metadata-to-ipfs-network",children:[{value:"1. Install IPFS",id:"1-install-ipfs",children:[]},{value:"2. Upload the File",id:"2-upload-the-file",children:[]},{value:"3. Verify that the picture can be downloaded",id:"3-verify-that-the-picture-can-be-downloaded",children:[]},{value:"4. Construct the NFT metadata file",id:"4-construct-the-nft-metadata-file",children:[]}]}],p={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"abstact"},"Abstact"),(0,i.kt)("p",null,"ARC-721 is a standard set of interfaces for issuing non-fungible tokens (NFT) on the Alaya network and is fully compatible with ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-721"},"ERC-721"),"."),(0,i.kt)("h2",{id:"arc-721-token-standard"},"ARC-721 Token Standard"),(0,i.kt)("p",null,"ARC-721-compliant smart contracts must all implement the ARC721 and ARC165 interface, and can implement other extended interfaces according to business needs."),(0,i.kt)("h3",{id:"arc-721--arc-165-interfaces"},"ARC-721 & ARC-165 Interfaces"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Solidity"},"interface ARC721 /* is ARC165 */ {\n    //events\n    event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);\n    event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);\n    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);\n\n    //required\n    function balanceOf(address _owner) external view returns (uint256);\n    function ownerOf(uint256 _tokenId) external view returns (address);\n    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable;\n    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable;\n    function transferFrom(address _from, address _to, uint256 _tokenId) external payable;\n    function approve(address _approved, uint256 _tokenId) external payable;\n    function setApprovalForAll(address _operator, bool _approved) external;\n    function getApproved(uint256 _tokenId) external view returns (address);\n    function isApprovedForAll(address _owner, address _operator) external view returns (bool);\n    interface ARC165 {\n        function supportsInterface(bytes4 interfaceID) external view returns (bool);\n    }\n\n    //optional\n    interface ARC721TokenReceiver {\n        function onERC721Received(address _operator, address _from, uint256 _tokenId, bytes _data) external returns(bytes4);\n    }\n\n    interface ARC721Metadata {\n        function name() external view returns (string _name);\n        function symbol() external view returns (string _symbol);\n        function tokenURI(uint256 _tokenId) external view returns (string);\n    }\n\n    interface ARC721Enumerable {\n        function totalSupply() external view returns (uint256);\n        function tokenByIndex(uint256 _index) external view returns (uint256);\n        function tokenOfOwnerByIndex(address _owner, uint256 _index) external view returns (uint256);\n    }\n}\n")),(0,i.kt)("h3",{id:"required-interfaces"},"Required interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"balanceOf"),": Count all NFTs assigned to an owner."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ownerOf"),"\uff1aFind the owner of an NFT."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"safeTransferFrom"),"\uff1aTransfers the ownership of an NFT from one address to another address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transferFrom"),"\uff1aTransfer ownership of an NFT -- THE CALLER IS RESPONSIBLE."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"approve"),"\uff1aChange or reaffirm the approved address for an NFT."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setApprovalForAll"),'\uff1aEnable or disable approval for a third party ("operator") to manage.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getApproved"),"\uff1aGet the approved address for a single NFT."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isApprovedForAll"),"\uff1aQuery if an address is an authorized operator for another address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"supportsInterface"),"\uff1aQuery if a contract implements an interface.")),(0,i.kt)("h3",{id:"\u53ef\u9009\u5b9e\u73b0\u7684\u63a5\u53e3"},"\u53ef\u9009\u5b9e\u73b0\u7684\u63a5\u53e3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onERC721Received"),"\uff1aHandle the receipt of an NFT. If you need to make a secure transfer inside the contract, you must implement the ARC721TokenReceiver interface."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),"\uff1aA descriptive name for a collection of NFTs in this contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"symbol"),"\uff1aAn abbreviated name for NFTs in this contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tokenURI"),'\uff1aA distinct Uniform Resource Identifier (URI) for a given asset. The URI may point to a JSON file that conforms to the "ERC721 Metadata JSON Schema". This is the \u201cERC721 Metadata JSON Schema\u201d referenced above.\uff1a',(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "title": "Asset Metadata",\n  "type": "object",\n  "properties": {\n      "name": {\n          "type": "string",\n          "description": "Identifies the asset to which this NFT represents"\n      },\n      "description": {\n          "type": "string",\n          "description": "Describes the asset to which this NFT represents"\n      },\n      "image": {\n          "type": "string",\n          "description": "A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive."\n      }\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"totalSupply"),"\uff1aCount NFTs tracked by this contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tokenByIndex"),"\uff1aEnumerate valid NFTs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tokenOfOwnerByIndex"),"\uff1aEnumerate NFTs assigned to an owner.")),(0,i.kt)("h3",{id:"event"},"Event"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Transfer\uff1aThis emits when ownership of any NFT changes by any mechanism."),(0,i.kt)("li",{parentName:"ul"},"Approval\uff1aThis emits when the approved address for an NFT is changed or."),(0,i.kt)("li",{parentName:"ul"},"ApprovalForAll\uff1aThis emits when an operator is enabled or disabled for an owner.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"ARC-721 standard is fully compatible with ERC-721, examples are available ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/0xcert/ethereum-erc721"},"here"),"."),(0,i.kt)("h2",{id:"view-token"},"View Token"),(0,i.kt)("p",null,"You can view ARC20 Token and transaction history in ",(0,i.kt)("a",{parentName:"p",href:"https://scan.alaya.network/tokens/tokensTranfer/arc721"},"Alaya Explorer")," and ",(0,i.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/ATON_user_manual/"},"ATON Wallet"),"."),(0,i.kt)("h2",{id:"contract-deployment"},"Contract Deployment"),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/Solidity_Getting_started"},"Solidity Getting started"),"."),(0,i.kt)("h2",{id:"method-call"},"Method call"),(0,i.kt)("p",null,"Here's an example of how to call a contract method using the Python SDK."),(0,i.kt)("h3",{id:"install-the-dependencies"},"Install the dependencies"),(0,i.kt)("p",null,"Use the following command to install the ",(0,i.kt)("inlineCode",{parentName:"p"},"python library"),", Python version 3.7.5+ is recommended:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pip install client-sdk-python\n")),(0,i.kt)("p",null,"During the installation process, some dependency packages will require ",(0,i.kt)("inlineCode",{parentName:"p"},"c++14")," compilation, please download ",(0,i.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkId=691126"},"cppbuildtools")," after you see the relevant prompt, use the default value to install it, and then re-execute the pip install command."),(0,i.kt)("h3",{id:"instantiation"},"Instantiation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from client_sdk_python import Web3, HTTPProvider\n\nrpc, chain_id, hrp = \'http://127.0.0.1:6789\', 201030, \'ATP\'\nw3 = Web3(HTTPProvider(rpc), chain_id=chain_id, hrp_type=hrp)\nabi = [\n  {\n    "inputs": [\n      {"internalType": "string", "name": "_name", "type": "string"},\n      {"internalType": "string", "name": "_symbol", "type": "string"}\n    ],\n    "stateMutability": "nonpayable",\n    "type": "constructor"\n  },\n  {\n    "inputs": [\n      {"internalType": "address", "name": "_to", "type": "address"},\n      {"internalType": "uint256", "name": "_tokenId", "type": "uint256"},\n      {"internalType": "string", "name": "_uri", "type": "string"}\n    ],\n    "name": "mint",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [{"internalType": "address", "name": "_owner", "type": "address"}],\n    "name": "balanceOf",\n    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [{"internalType": "uint256", "name": "_tokenId", "type": "uint256"}],\n    "name": "ownerOf",\n    "outputs": [{"internalType": "address", "name": "_owner", "type": "address"}],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {"internalType": "address", "name": "_from", "type": "address"},\n      {"internalType": "address", "name": "_to", "type": "address"},\n      {"internalType": "uint256", "name": "_tokenId", "type": "uint256"}\n    ],\n    "name": "safeTransferFrom",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "anonymous": false,\n    "inputs": [\n      {"indexed": true, "internalType": "address", "name": "_from", "type": "address"},\n      {"indexed": true, "internalType": "address", "name": "_to", "type": "address"},\n      {"indexed": true, "internalType": "uint256", "name": "_tokenId", "type": "uint256"}\n    ],\n    "name": "Transfer",\n    "type": "event"\n  },\n]\narc721 = w3.eth.contract(address=\'contract address\', abi=abi)\nprint([func for func in arc721.functions])\nprint([event for event in arc721.events])\n')),(0,i.kt)("h3",{id:"query-contract-information"},"Query Contract Information"),(0,i.kt)("p",null,"The following is an example of ",(0,i.kt)("inlineCode",{parentName:"p"},"totalSupply"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"balanceOf"),", other query methods are similar to this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Count all NFTs assigned to an owner\narc721.functions.balanceOf('your address').call()\n# Find the owner of an NFT\narc721.functions.ownerOf('your token id').call()\n")),(0,i.kt)("h3",{id:"sending-a-contract-transaction"},"Sending a contract transaction"),(0,i.kt)("p",null,"The following is an example of a ",(0,i.kt)("inlineCode",{parentName:"p"},"safeTransferFrom")," call."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Transferring ownership of NFT from one address to another\ntx = {\n    'chainId': w3.chain_id,\n    'nonce': w3.eth.getTransactionCount('your address'),\n    'gas': 4012388,\n    'value': 0,\n    'gasPrice': 1000000000,\n}\ntxn = arc721.functions.safeTransferFrom(_from='your address', _to='to address', _tokenId='your token id').buildTransaction(tx)\nsigned_txn = w3.eth.account.signTransaction(txn, private_key='your private key')\ntx_hash = w3.eth.sendRawTransaction(signed_txn.rawTransaction).hex()\nreceipt = w3.eth.waitForTransactionReceipt(tx_hash)\n")),(0,i.kt)("h3",{id:"get-contract-events"},"Get contract events"),(0,i.kt)("p",null,"As an example of a transfer transaction event."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"events = arc721.events.Transfer().processReceipt(receipt)\n")),(0,i.kt)("h2",{id:"upload-metadata-to-ipfs-network"},"Upload Metadata to IPFS network"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Metadata")," is the details of the NFT token, whis is stored under the chain. We usually need to specify a URI path as the Metadata data for an NFT token when we issue it."),(0,i.kt)("h3",{id:"1-install-ipfs"},"1. Install IPFS"),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ipfs.io/install/command-line/"},"IPFS documentation")," installation and startup."),(0,i.kt)("h3",{id:"2-upload-the-file"},"2. Upload the File"),(0,i.kt)("p",null,"Upload an picture with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"Alaya.jpeg")," to the ipfs node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ipfs add Alaya.jpeg\n")),(0,i.kt)("p",null,"If the above command runs successfully it will output the file ID, as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Text"},"added QmZtmD2qt6fJot32nabSP3CUjicnypEBz7bHVDhPQt9aAy Alaya.jpeg\n")),(0,i.kt)("h3",{id:"3-verify-that-the-picture-can-be-downloaded"},"3. Verify that the picture can be downloaded"),(0,i.kt)("p",null,"Open the following link of the picture in the browser, you can see the picture indicating that the picture can be downloaded successfully:\n",(0,i.kt)("a",{parentName:"p",href:"https://ipfs.io/ipfs/QmZtmD2qt6fJot32nabSP3CUjicnypEBz7bHVDhPQt9aAy?filename=Alaya.jpeg"},"https://ipfs.io/ipfs/QmZtmD2qt6fJot32nabSP3CUjicnypEBz7bHVDhPQt9aAy?filename=Alaya.jpeg")),(0,i.kt)("h3",{id:"4-construct-the-nft-metadata-file"},"4. Construct the NFT metadata file"),(0,i.kt)("p",null,"Next you can use the image link above to construct ",(0,i.kt)("inlineCode",{parentName:"p"},"Metadata")," for NFT."),(0,i.kt)("p",null,"Create a JSON file according to the metadata example in the ARC-721 document and name it alaya.json, and replace the description value in the image field with the BTFS download link of the image above, as shown in the figure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "name":"Alaya.jpg",\n    "author":"Alaya",\n    "description":"use for arc721",\n    "image":"https://ipfs.io/ipfs/QmZtmD2qt6fJot32nabSP3CUjicnypEBz7bHVDhPQt9aAy?filename=Alaya.jpeg"\n}\n')),(0,i.kt)("p",null,"Run the following command to upload alaya.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ipfs add alaya.json\n")),(0,i.kt)("p",null,"You can get the file ID after uploading, as follows\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"added QmQXqTVCb1w7CmdsYxHWR1T1qyaCHHgWwiPmoZDcQL39Px alaya.json\n")),(0,i.kt)("p",null,"Open the URI of the metadata file in the browser:\n",(0,i.kt)("a",{parentName:"p",href:"https://ipfs.io/ipfs/QmQXqTVCb1w7CmdsYxHWR1T1qyaCHHgWwiPmoZDcQL39Px?filename=alaya.json"},"https://ipfs.io/ipfs/QmQXqTVCb1w7CmdsYxHWR1T1qyaCHHgWwiPmoZDcQL39Px?filename=alaya.json")),(0,i.kt)("p",null,"If the Metadata information is displayed in the browser, it means the file was uploaded successfully."))}c.isMDXComponent=!0}}]);