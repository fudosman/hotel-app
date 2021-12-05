const assistants = document.querySelectorAll(".assistants");

// the fetch_continental request
const fetch_continental = () => {
  axios("http://localhost:3000/api/orders/continental")
    .then((response) => {
      console.log(response);
      const neededData = response.data;
      console.log(neededData);
      let pricing = [];
      for (const property in neededData) {
        pricing.push(`${property} <br>  ${neededData[property]}`);
      }
      let i = 0;
      let end = pricing.length;
      assistants.forEach(function (assistant) {
        assistant.innerHTML = "";
      });
      assistants.forEach(function (assistant) {
        //   change the colors
        assistant.classList = null;
        assistant.classList.add("itemsAndPrice");
        assistant.classList.add("assistants");
        assistant.classList.add("fetch_continental");
        if (i < end) {
          assistant.innerHTML = pricing[i];
          i++;
        }
      });
    })
    .catch((error) => console.error(error));
};

// the fetch_hotSpicy request
const fetch_hotSpicy = () => {
  axios("http://localhost:3000/api/orders/hotSpicy")
    .then((response) => {
      console.log(response);
      const neededData = response.data;
      console.log(neededData);
      let pricing = [];
      for (const property in neededData) {
        pricing.push(`${property} <br>  ${neededData[property]}`);
      }
      let i = 0;
      let end = pricing.length;
      assistants.forEach(function (assistant) {
        assistant.innerHTML = "";
      });
      assistants.forEach(function (assistant) {
        //   change the colors
        assistant.classList = null;
        assistant.classList.add("itemsAndPrice");
        assistant.classList.add("assistants");
        assistant.classList.add("fetch_hotSpicy");
        if (i < end) {
          assistant.innerHTML = pricing[i];
          i++;
        }
      });
    })
    .catch((error) => console.error(error));
};

// the fetch_otherSelections request
const fetch_otherSelections = () => {
  axios("http://localhost:3000/api/orders/otherSelections")
    .then((response) => {
      console.log(response);
      const neededData = response.data;
      console.log(neededData);
      let pricing = [];
      for (const property in neededData) {
        pricing.push(`${property} <br>  ${neededData[property]}`);
      }
      let i = 0;
      let end = pricing.length;
      assistants.forEach(function (assistant) {
        assistant.innerHTML = "";
      });
      assistants.forEach(function (assistant) {
        //   change the colors
        assistant.classList = null;
        assistant.classList.add("itemsAndPrice");
        assistant.classList.add("assistants");
        assistant.classList.add("fetch_otherSelections");
        if (i < end) {
          assistant.innerHTML = pricing[i];
          i++;
        }
      });
    })
    .catch((error) => console.error(error));
};

// the fetch_localDishes request
const fetch_localDishes = () => {
  axios("http://localhost:3000/api/orders/localDishes")
    .then((response) => {
      console.log(response);
      const neededData = response.data;
      console.log(neededData);
      let pricing = [];
      for (const property in neededData) {
        pricing.push(`${property} <br>  ${neededData[property]}`);
      }
      let i = 0;
      let end = pricing.length;
      assistants.forEach(function (assistant) {
        assistant.innerHTML = "";
      });
      assistants.forEach(function (assistant) {
        //   change the colors
        assistant.classList = null;
        assistant.classList.add("itemsAndPrice");
        assistant.classList.add("assistants");
        assistant.classList.add("fetch_localDishes");
        if (i < end) {
          assistant.innerHTML = pricing[i];
          i++;
        }
      });
    })
    .catch((error) => console.error(error));
};

// the fetch_pastries request
const fetch_pastries = () => {
  axios("http://localhost:3000/api/orders/pastries")
    .then((response) => {
      console.log(response);
      const neededData = response.data;
      console.log(neededData);
      let pricing = [];
      for (const property in neededData) {
        pricing.push(`${property} <br>  ${neededData[property]}`);
      }
      let i = 0;
      let end = pricing.length;
      assistants.forEach(function (assistant) {
        assistant.innerHTML = "";
      });
      assistants.forEach(function (assistant) {
        //   change the colors
        assistant.classList = null;
        assistant.classList.add("itemsAndPrice");
        assistant.classList.add("assistants");
        assistant.classList.add("fetch_pastries");
        if (i < end) {
          assistant.innerHTML = pricing[i];
          i++;
        }
      });
    })
    .catch((error) => console.error(error));
};

// the fetch_specialBreakfast request
const fetch_specialBreakfast = () => {
  axios("http://localhost:3000/api/orders/specialBreakfast")
    .then((response) => {
      console.log(response);
      const neededData = response.data;
      console.log(neededData);
      let pricing = [];
      for (const property in neededData) {
        pricing.push(`${property} <br>  ${neededData[property]}`);
      }
      let i = 0;
      let end = pricing.length;
      assistants.forEach(function (assistant) {
        assistant.innerHTML = "";
      });
      assistants.forEach(function (assistant) {
        //   change the colors
        assistant.classList = null;
        assistant.classList.add("itemsAndPrice");
        assistant.classList.add("assistants");
        assistant.classList.add("fetch_specialBreakfast");
        if (i < end) {
          assistant.innerHTML = pricing[i];
          i++;
        }
      });
    })
    .catch((error) => console.error(error));
};
