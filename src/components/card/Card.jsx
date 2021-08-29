import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import "./card.less"
import {getCurrentRepo, getCotributors} from "../actions/repos";


const Card = (props) => {
    const {username, reponame} = useParams()
    const [repo, setRepo] = useState({owner: {}})
    const [contributors, setContributors] = useState([])

    useEffect(()=>{
        getCurrentRepo(username, reponame, setRepo)
        getCotributors(username, reponame, setContributors)
    }, [])

    return (
        <div>
            <button onClick={() => props.history.goBack()} className="back-btn">BACK</button>
            <div>
                <div className="card">
                    <img className="card__image"src={repo.owner.avatar_url} alt=""/>
                    <div className="card__name">{repo.name}</div>
                    <div className="card__stars">{repo.stargazers_count}</div>
                </div>
                {contributors.map((c, index) =>
                    <div>{index+1}. {c.login}</div>
                )}
            </div>
        </div>
    );
};

export default Card;