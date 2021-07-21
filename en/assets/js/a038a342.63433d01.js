(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[4302],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1679:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),o={id:"Solidity_Getting_started",title:"Getting started",sidebar_label:"Getting started"},i=void 0,c={unversionedId:"Solidity_Getting_started",id:"Solidity_Getting_started",isDocsHomePage:!1,title:"Getting started",description:"Introduction",source:"@site/docs/Solidity_Getting_started.md",sourceDirName:".",slug:"/Solidity_Getting_started",permalink:"/alaya-devdocs/en/Solidity_Getting_started",editUrl:"https://github.com/luo-dahui/alaya-devdocs/tree/v2/website/docs/Solidity_Getting_started.md",version:"current",frontMatter:{id:"Solidity_Getting_started",title:"Getting started",sidebar_label:"Getting started"},sidebar:"docs",previous:{title:"IDE",permalink:"/alaya-devdocs/en/IDE"},next:{title:"Migration tutorial",permalink:"/alaya-devdocs/en/Solidity_Migration_tutorial"}},d=[{value:"Introduction",id:"introduction",children:[]},{value:"alaya-truffle Introduction",id:"alaya-truffle-introduction",children:[]},{value:"Create HelloWorld Contract",id:"create-helloworld-contract",children:[]},{value:"Compile HelloWorld Contract",id:"compile-helloworld-contract",children:[]},{value:"Deploly HelloWorld Contract",id:"deploly-helloworld-contract",children:[]},{value:"Call HelloWorld Contract",id:"call-helloworld-contract",children:[]},{value:"Crowdfunding Contract",id:"crowdfunding-contract",children:[{value:"Introduction",id:"introduction-1",children:[]},{value:"Crowdfunding Process",id:"crowdfunding-process",children:[]},{value:"Crowdfunding Contract",id:"crowdfunding-contract-1",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"About Compile",id:"about-compile",children:[]}]}],p={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"This tutorial is mainly to guide users to create a simple HelloWorld smart contract using solidity language on Alaya, compile, deploy, and call this contract through alaya-truffle. If you want to use a richer API you can refer to ",(0,l.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/Java_SDK"},"Java SDK")," and  ",(0,l.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/JS_SDK"},"JS SDK")),(0,l.kt)("h3",{id:"alaya-truffle-introduction"},"alaya-truffle Introduction"),(0,l.kt)("p",null,"alaya-truffle is a tool provided by Alaya that can compile, deploy, and invoke smart contracts locally. For specific installation and usage manuals, refer to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"alaya-truffle develop tools ",(0,l.kt)("a",{parentName:"li",href:"https://platon-truffle.readthedocs.io/en/alaya/getting-started/installation.html"},"specific installation")),(0,l.kt)("li",{parentName:"ul"},"alaya-truffle develop tools ",(0,l.kt)("a",{parentName:"li",href:"https://platon-truffle.readthedocs.io/en/alaya/"},"usage manuals"))),(0,l.kt)("h3",{id:"create-helloworld-contract"},"Create HelloWorld Contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pragma solidity ^0.5.17;\n\ncontract HelloWorld {\n    \n    string name;\n    \n    function setName(string memory _name) public returns(string memory){\n        name = _name;\n        return name;\n    }\n    \n    function getName() public view returns(string memory){\n        return name;\n    }\n}\n")),(0,l.kt)("p",null,"Contract Files Description:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"pragma solidity ^0.5.17",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pragma solidity"),": solidity version description\n",(0,l.kt)("inlineCode",{parentName:"li"},"0.5.17"),"\uff1asolidity version\n",(0,l.kt)("inlineCode",{parentName:"li"},"^")," \uff1aIndicates upward compatibility, that is, it can be compiled with a compiler above 0.5.17"))),(0,l.kt)("li",{parentName:"ul"},"contract HelloWorld",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contract"),"\uff1acontract keyword\n",(0,l.kt)("inlineCode",{parentName:"li"},"HelloWorld"),"\uff1acontract name"))),(0,l.kt)("li",{parentName:"ul"},"string name",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),"\uff1acontract state variables\n",(0,l.kt)("inlineCode",{parentName:"li"},"string"),"\uff1athe type of contract state variables"))),(0,l.kt)("li",{parentName:"ul"},"function setName(string memory _name) public returns(string memory)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"function"),"\uff1afunction keyword\n",(0,l.kt)("inlineCode",{parentName:"li"},"setName"),"\uff1afunction name\n",(0,l.kt)("inlineCode",{parentName:"li"},"memory"),"\uff1adeclare the storage location of param name\uff08 function input parameters and output parameters  must be declared as memory when the parameters type is string\uff09\n",(0,l.kt)("inlineCode",{parentName:"li"},"_name"),"\uff1athe  local variables\n",(0,l.kt)("inlineCode",{parentName:"li"},"public"),"\uff1adeclare the visibility of the function\n",(0,l.kt)("inlineCode",{parentName:"li"},"name")," = _name\uff1aAssignment the local variable to state variable"))),(0,l.kt)("li",{parentName:"ul"},"function getName() public view returns(string memory)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"view"),": this keyword means the function cannot change the blockchain state, which mainly used for query")))),(0,l.kt)("h3",{id:"compile-helloworld-contract"},"Compile HelloWorld Contract"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step1."),"  Creat new directory for HelloWorld project"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mkdir HelloWorld && cd HelloWorld\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step2."),"  Init project"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alaya-truffle init\n")),(0,l.kt)("p",null,"After the command is executed, project directory structure is as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Contracts/"),": solidity contract directory")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Migrations/"),":  depoly file directory")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Test/"),": test script directory")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Truffle-config.js"),": alaya-truffle config"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step3."),"  Move HelloWorld contract compiled in to HelloWorld/contracts/"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ls contracts/\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HelloWorld.sol")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step4."),"  Fix compile version same as the version setted  in truffle-config.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vim truffle-config.js\n")),(0,l.kt)("p",null,"Truffle-config.js content is  as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'compilers: {\n      solc: {\n            version: "^0.5.17",    // same as the version declared in HelloWorld.sol\n      }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step5."),"  Compile contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alaya-truffle compile\n")),(0,l.kt)("p",null,"After the command is executed, project directory structure is as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Build/"),": solidity contract directory after compiled")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Build/contracts/HelloWorld.json"),":the compiled file corresponding with HelloWorld.sol"))),(0,l.kt)("h3",{id:"deploly-helloworld-contract"},"Deploly HelloWorld Contract"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step1.")," Create deploy script"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd migrations/ && touch 2_initial_helloworld.js\n")),(0,l.kt)("p",null,"Suggest replacing script  name  with contract name, for example the deploy script  of HelloWorld contract :2_initial_helloworld.js,content is as follows\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'const helloWorld = artifacts.require("HelloWorld"); //artifacts.require specify deployment contract\n    module.exports = function(deployer) {\n       deployer.deploy(helloWorld); //Failed to deploy contract with parameters, please refer to FAQ\n};\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step2.")," Setting config  information for blockchain in truffle-config.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vim truffle-config.js\n")),(0,l.kt)("p",null,"Set blockchain network  info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'networks: {\n    development: {\n       host: "10.1.1.6",     // blockchain server address\n       port: 8806,            // server port\n       network_id: "*",       // Any network (default: none)\n       from: "atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp", //the accout address of deploying contract\n       gas: 999999,\n       gasPrice: 50000000004,\n    },\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step3."),"  Unlock wallet account"),(0,l.kt)("p",null,"Enter the alaya-truffle console"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alaya-truffle console\n")),(0,l.kt)("p",null,"Import the private key (you can skip this step if you have already imported it)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'web3.platon.personal.importRawKey("Your wallet private key","Your wallet password");\n')),(0,l.kt)("p",null,"After importing successfully, you will see the address corresponding to the private key as follows\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"'atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp'\n")),(0,l.kt)("p",null,"Unlock wallet account"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," web3.platon.personal.unlockAccount('Your wallet address','Your wallet password',999999);\n")),(0,l.kt)("p",null,"After unlocking successfully, you will see the following information\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ture\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step4."),"  Deploy contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alaya-truffle migrate\n")),(0,l.kt)("p",null,"After deploying successfully, you will see log info as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"2_initial_helloworld.js\n======================\n\n   Deploying 'HelloWorld'\n   ----------------------\n   > transaction hash:    0x87cd48cc467f9bc943fd096c57c8a7e7b7fa941380538d9e59797800c6c4292c\n   > Blocks: 0            Seconds: 0\n   > contract address:    atp1c5xxup4au4pqkgkm6a3p6hj3x0vvekdj52z2la\n   > block number:        282520\n   > block timestamp:     1585535169200\n   > account:             atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp\n   > balance:             16447231233352977496646259638377769924557918764752765436645.336513079692286014\n   > gas used:            145569\n   > gas price:           1 gvon\n   > value sent:          0 ATP\n   > total cost:          0.000145569 ATP\n\n\n   > Saving migration to chain.\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:          0.000145569 ATP\n\nSummary\n=======\n> Total deployments:   2\n> Final cost:          0.000259892 ATP\n")),(0,l.kt)("h3",{id:"call-helloworld-contract"},"Call HelloWorld Contract"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step1."),"  Enter the alaya-truffle console"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alaya-truffle console\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You can execute command in alaya-truffle console")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step2."),"  Create contract object"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'var abi = [{"constant":false,"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"setName","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]; //you can refet to HelloWorld/build/contracts/HelloWorld.json\n\nvar contractAddr = \'atp1c5xxup4au4pqkgkm6a3p6hj3x0vvekdj52z2la\';//contract address\nvar helloWorld = new web3.platon.Contract(abi,contractAddr);  \n')),(0,l.kt)("p",null,"Description\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"abi")," the interface provided by the contract to external calls, the abi  in the file compiled \uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"HelloWorld/build/contracts/HelloWorld.json")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contractAddr")," contract address"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"helloWorld"),"  contract object created")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step3."),"  Call contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"helloWorld.methods.setName(\"hello world\").send({from: 'atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp'}).on('receipt', function(receipt) {console.log(receipt);}).on('error', console.error);\n\n")),(0,l.kt)("p",null,"Description\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"helloWorld")," the contract object created"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"methods"),"  specify the call method"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setName")," the function of the HelloWorld contract, which has a parameter as ",(0,l.kt)("inlineCode",{parentName:"li"},"hello world")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"from")," the address of caller"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"on")," listen to the result of the contract method executed. If failed, it will print the error info. If succeeds ,the console will print the receipt as belows:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{ \n  blockHash:'0x3ae287d1e745e30d0d6c95d5220cc7816cda955e7b2f013c6a531ed95028a794', //the hash of block the transaction located\n  blockNumber: 159726, \n  contractAddress: null,\n  cumulativeGasUsed: 44820,\n  from: 'atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp', //the address of caller\n  gasUsed: 44820, //gas cost\n  logsBloom:\n   '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n  status: true,\n  to: 'atp1c5xxup4au4pqkgkm6a3p6hj3x0vvekdj52z2la', //contract address\n  transactionHash:'0xb7a41f72d555d4a2d9f2954fbdc5bbbb4c5ce89c836f8704276419ed416b3866', \n  transactionIndex: 0,\n  events: {} \n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step4."),"  Query contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'helloWorld.methods.getName().call(null,function(error,result){console.log("name is:" + result);})  \n')),(0,l.kt)("p",null,"Description\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"helloWorld")," the contract object created"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"methods")," specify the call method"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getName")," the function of the HelloWorld contract, which has no  parameter"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"call")," specify query method"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"function")," callback result,we can use console.log to print info.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"crowdfunding-contract"},"Crowdfunding Contract"),(0,l.kt)("h3",{id:"introduction-1"},"Introduction"),(0,l.kt)("p",null,"In the following example, we will use smart contract for a crowdfunding campaign. The creator of the contract started crowdfunding, and initialized the number of tokens and the duration of the crowdfunding. If the crowdfunding is completed within a specified time, the crowdfunding will be successful. If the crowdfunding switch is turned off, a certain number of tokens based on a fixed exchange rate will be cast and credited to the name of the investor. Otherwise, the crowdfunding fails and the amount of the crowdfunding is returned to the investors."),(0,l.kt)("p",null,"There are two roles in the contract"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Crowdfunder"),(0,l.kt)("li",{parentName:"ul"},"Investor")),(0,l.kt)("h3",{id:"crowdfunding-process"},"Crowdfunding Process"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1.Creating a crowdfunding contract refers to the beneficiary."),(0,l.kt)("li",{parentName:"ul"},"2.Deployment crowdfunding contract initializes the number and duration of crowdfunding tokens."),(0,l.kt)("li",{parentName:"ul"},"3.Investors invest."),(0,l.kt)("li",{parentName:"ul"},"4.Determine if crowdfunding is over.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If the crowdfunding time is not up and the number of crowdfunding tokens has been completed, turn off the crowdfunding switch, investors will be allocated tokens in proportion. Crowdfunding success."),(0,l.kt)("li",{parentName:"ul"},"If the crowdfunding time is up and the amount of crowdfunding tokens has been completed, investors will be allocated tokens in proportion. Crowdfunding success."),(0,l.kt)("li",{parentName:"ul"},"If the crowdfunding time is up and the number of crowdfunding tokens is not completed, the investor tokens will be returned. Crowdfunding failure.")))),(0,l.kt)("h3",{id:"crowdfunding-contract-1"},"Crowdfunding Contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'pragma solidity ^0.5.17;\n\ncontract CrowdFunding {\n    address payable public beneficiaryAddress = address(0x0); //Beneficiary address, set as contract creator\n    uint256 public fundingGoal = 100 atp;  //Crowdfunding target, unit is ATP\n    uint256 public amountRaised = 0; //The amount of money raised,the unit is VON\n    uint256 public deadline; \n    uint256 public price;  //token price\n    bool public fundingGoalReached = false;  //Achieving crowdfunding goals flag\n    bool public crowdsaleClosed = false; //Crowdfunding closed\n\n    mapping(address => uint256) public balance; //Save the amount raised by the investor\n    \n    mapping(address => uint256) public tokenMap; //Save the number of tokens owned by the investor\n\n    //Record received ATP notifications\n    event GoalReached(address _beneficiaryAddress, uint _amountRaised);\n\n    //Transfer notice\n    event FundTransfer(address _backer, uint _amount, bool _isContribution);\n    \n    //Check if the address is empty\n    modifier validAddress(address _address) {\n        require(_address != address("atx1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq89qwkc") || _address != address("atp1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqdruy9j"));\n        _;\n    }\n\n    /**\n     * Initialization constructor\n     *\n     * @param _fundingGoalInlats: Total crowdfunding ATP coin\n     * @param _durationInMinutes: Crowdfunding deadline, unit is minute\n     */\n    constructor (\n        uint _fundingGoalInlats,\n        uint _durationInMinutes\n    )public {\n        beneficiaryAddress = msg.sender;\n        fundingGoal = _fundingGoalInlats * 1 atp;\n        deadline = now + _durationInMinutes * 1 minutes;\n        price = 500 finney; //1\u4e2aATP\u5e01\u53ef\u4ee5\u4e70 2 \u4e2a\u4ee3\u5e01\n    }\n\n\n    /**\n     * fallback functioin\n     *\n     * you can send money directly to the contract\n     */\n    function () payable external {\n\n        //check whether to close crowdfunding\n        require(!crowdsaleClosed);\n        uint amount = msg.value;\n\n        //investor amount accumulated\n        balance[msg.sender] += amount;\n\n        //Total invest accumulated\n        amountRaised += amount;\n\n        //Transfer operation, how many tokens are transferred to the investor\n        tokenMap[msg.sender]  += amount / price;\n        \n        emit FundTransfer(msg.sender, amount, true);\n    }\n\n    /**\n     * Determine if the crowdfunding deadline has passed\n     */\n    modifier afterDeadline() { if (now >= deadline) _; }\n\n    /**\n     * Check if the crowdfunding goal has been reached\n     */\n    function checkGoalReached() public afterDeadline payable{\n        if (amountRaised >= fundingGoal){\n            //crowdfunding goal has been reached\n            fundingGoalReached = true;\n            emit GoalReached(beneficiaryAddress, amountRaised);\n        }\n\n        //Closing crowdfunding\n        crowdsaleClosed = true;\n    }\n\n\n    /**\n     * Recover funds\n     *\n     * Check if the target or time limit has been reached, and if so, send the full amount to the beneficiary.\n     * If the goal is not reached, each investor can return the amount they invested\n     */\n    function safeWithdrawal() public afterDeadline {\n\n        //If the crowdfunding goal is not reached\n        if (!fundingGoalReached) {\n            //Get the contracted caller\'s donated balance\n            uint amount = balance[msg.sender];\n\n            if (amount > 0) {\n                //Returns all balances of the contract initiator\n                msg.sender.transfer(amount);\n                emit FundTransfer(msg.sender, amount, false);\n                balance[msg.sender] = 0;\n            }\n        }\n\n        //f the crowdfunding goal is achieved and the contract caller is the beneficiary\n        if (fundingGoalReached && beneficiaryAddress == msg.sender) {\n\n            //Give all donations from the contract to the beneficiary\n            beneficiaryAddress.transfer(amountRaised);\n            \n            emit FundTransfer(beneficiaryAddress, amountRaised, false);\n        }\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Compile Crowdfunding Contract")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step1.")," Create new directory for Crowdfunding project"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mkdir myCrowdFunding && cd myCrowdFunding\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The following commands are performed in the myCrowdFunding directory without special instructions.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step2.")," Init project"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alaya-truffle init\n")),(0,l.kt)("p",null,"After the command is executed, project directory structure is as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contracts/"),": solidity contract directory"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"migrations/"),": depoly file directory"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test/"),": test script directory"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"truffle-config.js"),": alaya-truffle config")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step3.")," Move crowdfunding contract compiled in to ",(0,l.kt)("inlineCode",{parentName:"p"},"myCrowdFunding/contracts/")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ls myCrowdFunding/contracts/\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Files in the directory: ",(0,l.kt)("inlineCode",{parentName:"p"},"crowdFunding.sol"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step4.")," Fix compile version same as the version setted  in truffle-config.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vim truffle-config.js\n")),(0,l.kt)("p",null,"Truffle-config.js content is  as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'compilers: {\n     solc: {\n        version: "0.5.17",    //same as the version declared in CrowdFunding.sol\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step5.")," Compile contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alaya-truffle compile\n")),(0,l.kt)("p",null,"After the command is executed, project directory structure is as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build/"),": solidity contract directory after compiled"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build/contracts/CrowdFunding.json"),": the compiled file corresponding with CrowdFunding.sol")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Deploly crowdfunding Contract")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step1.")," Create deploy script"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd migrations/ && touch 2_initial_CrowdFunding.js\n")),(0,l.kt)("p",null,"Deploy script 2_initial_crowdFunding.js,content is as follows\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'const CrowdFunding = artifacts.require("CrowdFunding"); //deployment contract class name\nmodule.exports = function(deployer) {\n      deployer.deploy(CrowdFunding,1000000,100);\n};\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step2.")," Setting config  information for blockchain in truffle-config.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vim truffle-config.js\n")),(0,l.kt)("p",null,"Set blockchain network  info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'networks: {\n    development: {\n       host: "10.1.1.6",     // blockchain server address\n       port: 8806,            // server port\n       network_id: "*",       // Any network (default: none)\n       from: "atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp", //the accout address of deploying contract\n       gas: 999999,\n       gasPrice: 50000000004,\n    },\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step3.")," Deploy contract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alaya-truffle migrate\n")),(0,l.kt)("p",null,"After deploying successfully, you will see log info as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Compiling your contracts...\n Everything is up to date, there is nothing to compile.\n 3_initial_CrowdFunding.js\n \n    Deploying 'CrowdFunding'\n     transaction hash:    0x3a6419cd4169d7cfb430a1fc5632239ac4a01845827f20df9b3229a334c5488b\n     Blocks: 0            Seconds: 0\n     contract address:    atp1crcjuu9uwa9aukmf5dr5tq4ym6cv2kre0042ya //contract address\n     block number:        280532\n     block timestamp:     1581751224032\n     account:             atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp\n     balance:             90000000.806077629992489796\n     gas used:            379154\n     gas price:           50.000000004 gVON\n     value sent:          0 ATP\n     total cost:          0.018957700001516616 ATP\n \n     Saving migration to chain.\n     Saving artifacts\n     Total cost:     0.018957700001516616 ATP\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Crowdfounding Query\uff1a")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step1."),"  Enter the alaya-truffle console"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alaya-truffle console\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can execute command in alaya-truffle console")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step2."),"  Create contract object"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"var abi = [...]; //ABI of CrowdFunding contract,can get from build/contracts/CrowdFunding.json\nvar contractAddr = 'atp1crcjuu9uwa9aukmf5dr5tq4ym6cv2kre0042ya'; //CrowdFundsing contract address\nvar crowdFunding = new web3.platon.Contract(abi,contractAddr);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step3."),"  Query the amount raised"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'crowdFunding.methods.amountRaised().call(null,function(error,result){console.log("result:" + result);}); //query the amount raised\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step4."),"  Crowdfunder judge the success of crowdfunding"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"crowdFunding.methods.safeWithdrawal().send({from:'atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp'}).on('data', function(event){ console.log(event);}).on('error', console.error); \n")),(0,l.kt)("p",null,"Call contract command description:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"crowdFunding")," is the contract object we built earlier"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"methods")," fixed syntax specifying that methods in the contract will be obtained"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"safeWithdrawal")," is a method in our crowdfunding contract to recover funds"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"from")," caller's wallet address"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"on")," listen for contract processing result events, and output error logs for failures")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"about-compile"},"About Compile"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"How many commands in alaya-truffle\uff1f"),(0,l.kt)("p",{parentName:"li"},"Refer to  alaya-truffle develop guide ",(0,l.kt)("a",{parentName:"p",href:"https://platon-truffle.readthedocs.io/en/alaya/"},"Reference here"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Why contract syntax cannot be verified?"),(0,l.kt)("p",{parentName:"li"},"Solidity 0.4.x has a great different with 0.5.x, detail info refer to ",(0,l.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/develop/"},"Reference here"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Why truffle doesn't compile?"),(0,l.kt)("p",{parentName:"li"},"Confirm the contract version same as the version specified in the truffle-config.js.\nContract syntax be writed in a wrong way.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Why the contract can not be deployed by truffle migrate?"),(0,l.kt)("p",{parentName:"li"},"Confrim the blockchain network info be configured correctly.\nConfirm the account address be configured correctly.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Deploying a contract with a parameter constructor using the command ",(0,l.kt)("inlineCode",{parentName:"p"},"truffle migrate")," failed."),(0,l.kt)("p",{parentName:"li"},"For example, A.sol"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"Constructor(uint256 a, string memory b, string memory c) public {}\n")),(0,l.kt)("p",{parentName:"li"},"2_initial_A.js configured as follow\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"const A = artifacts.require(\"A\");  \nmodule.exports = function(deployer) {\n        deployer.deploy(A,100,'PLA','PLAT');//pass the corresponding construction parameters\n};\n")))))}s.isMDXComponent=!0}}]);