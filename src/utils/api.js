const baseUrl = "https://blackthorn11.pythonanywhere.com";

const handleServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export const API = async (userInput, target) => {
  const res = await fetch(`${baseUrl}/${target}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userInput: userInput }),
  });
  return handleServerResponse(res);
};
