export type UserProps = {
    avatar_url: string,
    login: string,
    location: string,
    followers: number,
    following: number
}

export type RepoProps = {
    name: string,
    language: string,
    url: string,
    stargazers_count: number,
    watchers: number,
    forks: number
}

export interface GitHubRepo {
    name: string;
    language: string;
    html_url: string,
    stargazers_count: number;
    watchers: number;
    forks: number;
}