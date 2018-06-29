console.clear();

const { createStore, combineReducers } = Redux;

// People dropping off forms (Action Creators)
const createClaim = (name, amountOfMoneyToCollect) => {
  return { // This is the form
    type: 'CREATE_CLAIM',
    payload: {
      name: name, 
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

const createPolicy = (name) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: 20
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
}

// Departments (reducers)
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    return [...oldListOfClaims, action.payload];
  }
  
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
      return bagOfMoney - action.payload.amountOfMoneyToCollect
    } else if (action.type === 'CREATE_POLICY') {
      return bagOfMoney + action.payload.amount;
    }
  
    return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(policy => policy != action.payload.name);
  }
  
  return listOfPolicies;
};

// Company setup
const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy('Alex'));
store.dispatch(createClaim('Alex', 100));
store.dispatch(deletePolicy('Alex'));

store.dispatch(createPolicy('Alex'));
store.dispatch(createClaim('Alex', 100));
store.dispatch(deletePolicy('Alex'));

store.dispatch(createPolicy('Alex'));
store.dispatch(createClaim('Alex', 100));
store.dispatch(deletePolicy('Alex'));

console.log(store.getState());

