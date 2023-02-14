import axios from "axios";

const Tabs = (topics) => {
  // console.log(topics)
  const topicsHead = document.createElement("div");
  // const tabOne = document.createElement("div");
  // const tabTwo = document.createElement("div");
  // const tabThree = document.createElement("div");

  topicsHead.classList.add("topics");
  // tabOne.classList.add("tab");
  // tabTwo.classList.add("tab");
  // tabThree.classList.add("tab");

  // tabOne.textContent = topics[0];
  // tabTwo.textContent = topics[1];
  // tabThree.textContent = topics[2];
  
  // topicsHead.appendChild(tabOne);
  // topicsHead.appendChild(tabTwo);
  // topicsHead.appendChild(tabThree);

  topics.forEach(topic => {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = topic;
    topicsHead.appendChild(tab);
  })

  return topicsHead;
  
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}
// console.log(Tabs('javascript', 'bootstrap', 'technology'));


const tabsAppender = (selector) => {
  const axiosTopics = document.querySelector(selector);
  axios.get("http://localhost:5001/api/topics")
  .then((res) => {
    // res.data.topics.forEach((topic) => {
    //   console.log(topic)
    // })
    axiosTopics.appendChild(Tabs(res.data.topics))
  })
  .catch((err) => {
    console.log(err);
  })


  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
