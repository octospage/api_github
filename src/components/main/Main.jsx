import React, {useEffect, useState} from 'react';
import './main.less'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repo from "./repo/Repo";


const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);
    const [searchValue, setSearchValue] = useState('')


    useEffect(() => {
        dispatch(getRepos())
    }, [])

    function searchHandler(){
        dispatch(getRepos(searchValue))
    }

    return (
        <div className="container">
            <div className="search">
                <input className="search__input"
                       type="text"
                       value={searchValue}
                       onChange={(e) => setSearchValue(e.target.value)}
                />
                <button className="search__button" onClick={() => searchHandler()}>Search</button>
            </div>

            { isFetching === false
                ?
                repos.map(repo =>
                <Repo repo={repo}/>
            )
                :
                <div className='fetching'></div>
            }

        </div>
    );
};

export default Main;