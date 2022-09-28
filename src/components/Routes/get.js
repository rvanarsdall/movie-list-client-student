export async function Get(endpoint, callback, token) {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", token);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  try {
    const response = await fetch(endpoint, requestOptions);
    const data = await response.json();
    console.log(data.movie);
    callback(data);
  } catch (error) {
    console.error(error);
  }
}
