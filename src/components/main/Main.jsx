import React, {useEffect, useState} from 'react';
import './main.less'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repo from "./repo/Repo";
import {setCurrentPage} from "../../reducers/reposReducer";
import {createPages} from "../utils/pagesCreator";

const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);
    const currentPage = useSelector(state => state.repos.currentPage);
    const totalCount = useSelector(state => state.repos.totalCount);
    const perPage = useSelector(state => state.repos.perPage);
    const isFetchError = useSelector(state => state.repos.isFetchError);
    const [searchValue, setSearchValue] = useState('');
    const pagesCount = Math.ceil(totalCount/perPage);
    const pages = [];

    createPages(pages, pagesCount, currentPage);

    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage))
        window.scrollTo(0,0)
    }, [currentPage])

     function searchHandler(){
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue, currentPage, perPage))
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
                repos.map((repo, index) =>
                    <Repo  key={index} repo={repo}/>
                )
                :
                <div className='fetching'/>
            }

            <div className="pages">
                {pages.map((page, index) =>
                    <span key={index}
                          onClick={() => dispatch(setCurrentPage(page))}
                          className={currentPage === page ? 'page page--current' : 'page'}
                    >{page}</span>
                )
                }
            </div>

        </div>
    );
};

export default Main;