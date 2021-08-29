import axios from "axios";
import {setIsFetching, setRepos} from "../../reducers/reposReducer";

export const getRepos = (searchQuery = "stars", currentPage, perPage) => {
    return async (dispatch) => {
        searchQuery = searchQuery.length ? searchQuery : "stars";
        dispatch(setIsFetching(true))
        const url = `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`;
        const response = await axios.get(url);
        dispatch(setRepos(response.data))
    }
}