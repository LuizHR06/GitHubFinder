import { MdOutlineStarBorder } from "react-icons/md";
import { RepoProps } from "../../types/user";
import classes from './Repositories.module.css'
import { FaEye } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface RepositoriesProps {
    repos: RepoProps[];
}

export const Repositories: React.FC<RepositoriesProps> = ({ repos }) => {
    return (
        <>
            <Link className={classes.backButton} to={'/'}>Back</Link>
            <div className={classes.repos}>
                {repos.map((repo, index) => (
                    <div className={classes.card} key={index}>
                        <p className={classes.name}>{repo.name}</p>
                        <p className={classes.language}>{repo.language}</p>
                        <div className={classes.infoContainer}>
                            <div className={classes.info}>
                                <span className={classes.icon}><MdOutlineStarBorder /></span>
                                <p>{repo.stargazers_count}</p>
                            </div>
                            <div className={classes.info}>
                                <span className={classes.icon}><FaEye /></span>
                                <p>{repo.watchers}</p>
                            </div>
                            <div className={classes.info}>
                                <span className={classes.icon}><FaCodeFork /></span>
                                <p>{repo.forks}</p>
                            </div>
                        </div>
                        <a className={classes.link} href={repo.url} target="_blank">View code</a>
                    </div>
                ))}
            </div>
        </>
    )
}