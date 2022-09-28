export async function Post(endpoint, body, callback, token) {
  let bodyObject = JSON.stringify(body);

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  if (token) {
    myHeaders.append("Authorization", token);
  }
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: bodyObject,
  };
  try {
    const response = await fetch(endpoint, requestOptions);
    const data = await response.json();
    console.log(data);
    callback(data);
  } catch (error) {
    console.error(error);
  }
}
