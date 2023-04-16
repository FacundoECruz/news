function client(endpoint, customConfig = {}) {
  const config = {
    method: "GET",
    headers: {
      Authorization: "15b9600598e84ed393d3b53268f305b2",
    },
    ...customConfig,
  };

  return window
    .fetch(`${endpoint}`, config)
    .then((response) => response.json());
}

export { client };
