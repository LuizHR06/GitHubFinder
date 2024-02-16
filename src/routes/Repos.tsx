import { useEffect, useState } from "react"
import { GitHubRepo, RepoProps } from "../types/user"
import { useParams } from "react-router-dom"
import { Repositories } from "../components/Repos/Repositories"
import classes from '../components/Repos/Repositories.module.css'

export const Repos = () => {
    const {login} = useParams()

    const [repos, setRepos] = useState<RepoProps[]>([])

    useEffect(() => {
        const loadUser = async() => {
            const res = await fetch(`https://api.github.com/users/${login}/repos?per_page=10`)
            const data: GitHubRepo[] = await res.json();
            
            const userRepos: RepoProps[] = data.map((repo: GitHubRepo) => ({
                name: repo.name,
                language: repo.language,
                url: repo.html_url,
                stargazers_count: repo.stargazers_count,
                watchers: repo.watchers,
                forks: repo.forks
            }));
    
            setRepos(userRepos)
        }
        loadUser()
    }, [login])

    return (
        <div>
            <p className={classes.descriptionText}>Explore this user's repositories: {login}</p>
            <Repositories repos={repos} />
        </div>
    )
}