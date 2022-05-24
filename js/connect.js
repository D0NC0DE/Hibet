// Get the modal
var modal = document.getElementById("wallpop");

var main = document.getElementById("main");

// Get the button that opens the modal
var btn = document.getElementById("conwal");

var btn2 = document.getElementById("connect");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  main.style.display = "none";
  btn.style.opacity="0.7";
}

btn2.onclick = function() {
    modal.style.display = "block";
    main.style.display = "none";
    btn.style.opacity="0.7";
    btn2.style.opacity = "0.7";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  main.style.display = "block";
  btn.style.opacity="1";
  btn2.style.opacity = "1";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    main.style.display = "block";
    btn2.style.opacity = "1";
  }
}

//web3 instances

// script for wallet connect

// 1. Create global userWalletAddress variable
window.userWalletAddress = null;

// 2. when the browser is ready
window.onload = async (event) => {

  // 2.1 check if ethereum extension is installed
  if (window.ethereum) {

    // 3. create web3 instance
    window.web3 = new Web3(window.ethereum);

  } else {

    // 4. prompt user to install Metamask
    alert("Please install MetaMask");
  }

  // 5. check if user is already logged in and update the global userWalletAddress variable
  window.userWalletAddress = window.localStorage.getItem("userWalletAddress");

  // 6. show the user dashboard
  showUserDashboard();
};

// 1. Web3 login function
const loginWithEth = async () => {
    // 1.1 check if there is global window.web3 instance
    if (window.web3) {
      try {
        // 2. get the user's ethereum account - prompts metamask to login
        const selectedAccount = await window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((accounts) => accounts[0])
          .catch(() => {
            // 2.1 if the user cancels the login prompt
            throw Error("Please select an account");
          });
  
        // 3. set the global userWalletAddress variable to selected account
        window.userWalletAddress = selectedAccount;
  
        // 4. store the user's wallet address in local storage
        window.localStorage.setItem("userWalletAddress", selectedAccount);
  
        // 5. show the user dashboard
        showUserDashboard();
  
      } catch (error) {
        alert(error);
      }
    } else {
      alert("wallet not found");
    }
  };
  
  // 6. when the user clicks the login button run the loginWithEth function
  document.querySelector(".metamask").addEventListener("click", loginWithEth);

// function to show the user dashboard
const showUserDashboard = async () => {

    // if the user is not logged in - userWalletAddress is null
    if (!window.userWalletAddress) {
  
      // change the page title
      document.title = "HiBet 🔐";
  
      // show the login section
      document.querySelector(".conwal").style.display = "block";
  
      // hide the user dashboard section
      document.querySelector(".connected").style.display = "none";

      document.querySelector(".enterapp").style.display = "none";
  
      // return from the function
      return false;
    }
  
    // change the page title
    document.title = "HiBet 🔓";
  
    // hide the login section
    document.querySelector(".connect").style.display = "none";

    document.querySelector(".walpopup").style.display = "none";

    document.querySelector(".conwal").style.display = "none";
  
    // show the dashboard section
    document.querySelector(".main").style.display = "block";

    document.querySelector(".connected").style.display = "block";

    document.querySelector(".enterapp").style.display = "block";
  
    // show the user's wallet address
     showUserWalletAddress();

     changeNetwork();
  };

// show the user's wallet address from the global userWalletAddress variable
const showUserWalletAddress = () => {
    const walletAddressEl = document.querySelector(".connected");
    walletAddressEl.innerHTML = window.userWalletAddress;
  };
  
const changeNetwork = async() => {
    if (window.userWalletAddress) {
      try {
        await window.ethereum
        .request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x315DB00000006' }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await window.ethereum
            .request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0x315DB00000006',
                  chainName: 'GodWoken',
                  rpcUrls: ['https://godwoken-testnet-web3-v1-rpc.ckbapp.dev'] /* ... */,
                  blockExplorerUrls: ['https://v1.aggron.gwscan.com/'],
                },
              ],
            });
          } catch (addError) {
            // handle "add" error
          }
        }
        // handle other "switch" errors
      }
    }
  }
