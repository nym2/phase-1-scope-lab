var customerName = 'bob'
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newCustomer) {
  bestCustomer = newCustomer;
}


const leastFavoriteCustomer = 'some initial value';


function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; 
}
