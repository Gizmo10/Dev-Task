const convertString = async function (data) {
  try {
    const response = await fetch(`http://localhost:3001/convertString`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const result = await response.json();
    //console.log(result);
    return result;
  } catch (error) {
    throw new Error(`Failed to convert: ${error.message}`);
  }
};
const obj = {
  data: "String",
};

convertString(obj);
