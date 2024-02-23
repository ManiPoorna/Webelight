import axios from "axios";

const SearchRepos = async (page) => {
  let response = await axios.get(
    `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`
  );
  return await response.data;
};

export default SearchRepos;
