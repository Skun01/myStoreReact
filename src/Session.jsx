const account = {
  name: '',
  password: '',
  productCarts: [],
  isLogin: false,
}

function setName(userName){
  account.name = userName
}

function checkLogin(login){
  account.isLogin = login
}

function setPassword(userPassword){
  account.password = userPassword
}

function addToCarts(product, number){
  let isExist = false;
  for(let record of account.productCarts){
    if(record.productDetail.id === product.id){
      record.number = number
      isExist = true;
      break;
    }
  }
  if(!isExist){
    account.productCarts.push({
      productDetail: product,
      number: number,
    })
  }
  console.log(account.productCarts);
}

function deleteCartItem(productId){
  for(let i in account.productCarts){
    if(account.productCarts[i].productDetail.id === productId){
      console.log(account.productCarts[i])
      account.productCarts.splice(i, 1);
      break;
    }
  }
}

function getCartsList(){
  return account.productCarts
}

export {setName, checkLogin, setPassword, addToCarts, getCartsList, deleteCartItem}