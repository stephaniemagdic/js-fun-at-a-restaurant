function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
    return deliveryOrders;
  }
}

function refundOrder(inputOrderNumber, deliveryOrders) {
  for (i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === inputOrderNumber) {
      deliveryOrders.splice(i, 1);
      return deliveryOrders;
    }
  }
}

function listItems(inputList) {
  var itemsStr = "";
  for(i = 0; i < inputList.length; i++) {
    if(i !== inputList.length - 1) {
      itemsStr += inputList[i].item + ", ";
    } else {
      itemsStr += inputList[i].item;
    }
  }
  return itemsStr;
}

function searchOrder(inputList, inputItem) {
  var itemList = []
  for(i = 0; i < inputList.length; i ++) {
    itemList.push(inputList[i].item);
  };
  if(itemList.includes(inputItem) === true) {
    return true;
  } else {return false};
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
