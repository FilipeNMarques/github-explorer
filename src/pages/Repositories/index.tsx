import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

// Styles
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepoInfo, Issues } from './styles';
import geLogo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repositories: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={geLogo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepoInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/22108833?v=4"
            alt="Avatar"
          />
          <div>
            <strong>Repo title</strong>
            <p>Repo desc</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>Number</strong>
            <span>Starts</span>
          </li>
          <li>
            <strong>Number</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>Number</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepoInfo>

      <Issues>
        <Link to="xablau">
          <div>
            <strong>Issue title</strong>
            <p>Issue desc</p>
          </div>
          <FiChevronRight size={25} />
        </Link>
      </Issues>
    </>
  );
};

export default Repositories;
