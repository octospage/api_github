import axios from "axios";
import {setFetchError, setIsFetching, setRepos} from "../../reducers/reposReducer";

export const getRepos = (searchQuery = "stars", currentPage, perPage) => {
    searchQuery = searchQuery.length ? searchQuery : "stars";

    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            const url = `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`;
            const response = await axios.get(url);
            dispatch(setRepos(response.data))
        } catch (e) {
            dispatch(setFetchError(true))
            dispatch(setIsFetching(false))
            setTimeout(()=> {
                dispatch(setFetchError(false))
            }, 2000)
        }

    }
}

export const getCurrentRepo = async (username, repoName, setRepo) => {
    const url = `https://api.github.com/repos/${username}/${repoName}`;
    const response = await axios.get(url);
    setRepo(response.data)
}

export const getCotributors = async (username, repoName, setContributors) => {
    const url = `https://api.github.com/repos/${username}/${repoName}/contributors?page=1&per_page=10`;
    const response = await axios.get(url)
    setContributors(response.data)
}