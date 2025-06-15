const convertString = async function (data) {
  try {
    const response = await fetch(`http://localhost:3001/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! Error: ${response.status}`);
    }

    const convertedString = data;
    console.log(convertedString);
  } catch (error) {
    throw new Error(`Failed to convert: ${error.message}`);
  }
};

convertString("Random");
