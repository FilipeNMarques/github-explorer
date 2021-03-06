import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

// Styles
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories, Error } from './styles';
import geLogo from '../../assets/logo.svg';

// Services
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepos = localStorage.getItem('@GitHubExplorer:repositories');

    if (storagedRepos) {
      return JSON.parse(storagedRepos);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GitHubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite author/repository para adicionar na lista');
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`);
      const repo = response.data;

      setRepositories([...repositories, repo]);
      setInputError('');
      setNewRepo('');
    } catch (err) {
      setInputError('Erro ao buscar repositório');
    }
  }

  return (
    <>
      <img src={geLogo} alt="Github explorer Logo" />
      <Title>Explore repositórios no Github.</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={25} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
