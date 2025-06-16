const urlElement = document.getElementById("url");
const emailElement = document.getElementById("email");
const resultElement = document.getElementById("result");
const submitButton = document.getElementById("submit");

submitButton.onclick = async () => {
  const urlValue = urlElement.value;
  const emailValue = emailElement.value;
  console.log(urlValue);
  console.log(emailValue);
};

const convertString = async function (data) {
  try {
    const response = await fetch(
      `https://dev-task-79hh.onrender.com/convertString`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    //return result;
  } catch (error) {
    throw new Error(`Failed to convert: ${error.message}`);
  }
};
/*const obj = {
  data: "String",
};*/

//convertString(obj);
