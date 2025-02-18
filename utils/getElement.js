const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    console.log("the element selected is incorrect");
  }
};

export default getElement;
