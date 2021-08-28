import React from 'react';
import './repo.less'

const Repo = (props) => {
    const repo = props.repo;
    return (
        <section className="repo">
            <div  className="repo__header">
                <h5 className="repo__name">{repo.name}</h5>
                <div className="repo__stars">Количество звезд: {repo.stargazers_count}</div>
            </div>
            <div className="repo__last-commit">{repo.updated_at}</div>
            <a href={repo.html_url} target='_blank' className="repo__link">ссылка на репозиторий</a>
        </section>
    );
};

export default Repo;