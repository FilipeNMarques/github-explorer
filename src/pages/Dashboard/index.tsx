import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import geLogo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={geLogo} alt="Github explorer Logo" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://camo.githubusercontent.com/ac31ac54c2013850b0fb8a3a4926f4718a398fb3/68747470733a2f2f7777772e6761747362796a732e6f72672f6d6f6e6f6772616d2e737667"
            alt="Avatar Repository"
          />
          <div>
            <strong>Gatsbyjs/gatsby</strong>
            <p>Build blazing fast, modern apps and websites with React</p>
          </div>
          <FiChevronRight size={25} />
        </a>

        <a href="test">
          <img
            src="https://camo.githubusercontent.com/ac31ac54c2013850b0fb8a3a4926f4718a398fb3/68747470733a2f2f7777772e6761747362796a732e6f72672f6d6f6e6f6772616d2e737667"
            alt="Avatar Repository"
          />
          <div>
            <strong>Gatsbyjs/gatsby</strong>
            <p>Build blazing fast, modern apps and websites with React</p>
          </div>
          <FiChevronRight size={25} />
        </a>

        <a href="test">
          <img
            src="https://camo.githubusercontent.com/ac31ac54c2013850b0fb8a3a4926f4718a398fb3/68747470733a2f2f7777772e6761747362796a732e6f72672f6d6f6e6f6772616d2e737667"
            alt="Avatar Repository"
          />
          <div>
            <strong>Gatsbyjs/gatsby</strong>
            <p>Build blazing fast, modern apps and websites with React</p>
          </div>
          <FiChevronRight size={25} />
        </a>

        <a href="test">
          <img
            src="https://camo.githubusercontent.com/ac31ac54c2013850b0fb8a3a4926f4718a398fb3/68747470733a2f2f7777772e6761747362796a732e6f72672f6d6f6e6f6772616d2e737667"
            alt="Avatar Repository"
          />
          <div>
            <strong>Gatsbyjs/gatsby</strong>
            <p>Build blazing fast, modern apps and websites with React</p>
          </div>
          <FiChevronRight size={25} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
