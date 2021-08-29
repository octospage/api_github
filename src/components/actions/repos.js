import axios from "axios";
import {setIsFetching, setRepos} from "../../reducers/reposReducer";

export const getRepos = (searchQuery = "stars") => {
    return async (dispatch) => {
        searchQuery = searchQuery.length ? searchQuery : "stars";

        dispatch(setIsFetching(true))
        const url = `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`;
        const response = await axios.get(url);
        dispatch(setRepos(response.data))

    }
}