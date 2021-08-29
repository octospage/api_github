import React from 'react';
import './repo.less'
import {NavLink} from "react-router-dom";

const Repo = (props) => {
    const repo = props.repo;
    return (
        <section className="repo">
            <div  className="repo__header">
                <h5 className="repo__name"><NavLink to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink></h5>
                <div className="repo__stars">Количество звезд: {repo.stargazers_count}</div>
            </div>
            <div className="repo__info">
                <div className="repo__last-commit">Последний комммит: {repo.updated_at}</div>
                <a href={repo.html_url} target='_blank' className="repo__link">ссылка на репозиторий</a>
            </div>
        </section>
    );
};

export default Repo;