const getFollowers = async (username) => {
  const urlBase = `https://api.github.com/users/${username}/followers`;

  const request = await fetch(urlBase);
  const response = request.json();

  if (response) {
    return response;
  }
  return [];
};

export { getFollowers };
