import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../../components/RepoCard';
import styles from '../../styles/GithubPage.module.css';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Github Projects Page",
  description: "View Github Projects Page.",
}


export const dynamic = 'force-dynamic'

const getGithubData = async () => {
  const response = await fetch(`${process.env.APP_URL}/api/github`).then(res => res.json());
  return response
};



const GithubPage = async () => {
  const { repos, user } = await getGithubData()

  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={process.env.NEXT_PUBLIC_GITHUB_USERNAME!}
          theme={{
            dark: Object.values(theme),
            light: Object.values(theme),
          }}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export default GithubPage;
