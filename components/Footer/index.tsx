import {
  Container,
  Header,
  Logo,
  Content,
  InternsWrapper,
  Description,
  Intern,
  Profile,
  Social,
  Interns,
} from './styles';

import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaCopyright } from 'react-icons/fa';
import { interns } from '../../utils/mocks/interns';

const Footer = () => {
  return (
    <Container>
      <Header>
        <div className="container">
          <Logo>
            Masters <span>Donate</span>
          </Logo>
          <a
            href="https://github.com/app-masters/doar-computadores-frontend/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
        </div>
      </Header>
      <Content className="container">
        <InternsWrapper>
          <Interns>
            <span>Front-end</span>
            <div>
              {interns.map(
                intern =>
                  intern.develop === 'frontend' && (
                    <Intern key={intern.avatar}>
                      <Profile>
                        <img src={intern.avatar} alt="" />
                        <Social>
                          <span>{intern.name}</span>
                          <div>
                            {intern.social.map(({ name, url }) => (
                              <a
                                href={url}
                                target="_blank"
                                key={url}
                                rel="noopener noreferrer"
                              >
                                <img src={`./${name}.svg`} alt="" />
                              </a>
                            ))}
                          </div>
                        </Social>
                      </Profile>
                    </Intern>
                  ),
              )}
            </div>
          </Interns>

          <div className="line"></div>

          <Interns>
            <span>Back-end</span>
            <div>
              {interns.map(
                intern =>
                  intern.develop === 'backend' && (
                    <Intern key={intern.avatar}>
                      <Profile>
                        <img src={intern.avatar} alt="" />
                        <Social>
                          <span>{intern.name}</span>
                          <div>
                            {intern.social.map(({ name, url }) => (
                              <a
                                href={url}
                                target="_blank"
                                key={url}
                                rel="noopener noreferrer"
                              >
                                <img src={`./${name}.svg`} alt="" />
                              </a>
                            ))}
                          </div>
                        </Social>
                      </Profile>
                    </Intern>
                  ),
              )}
            </div>
          </Interns>
        </InternsWrapper>
        <Description>
          <p>
            Sistema de doação feito no processo de seleção para estagiário(a) da
            <a href="" target="_blank" rel="noopener noreferrer">
              App Masters
            </a>
            . O sistema é OpenSource e está disponível no github:
          </p>
          <a
            href="https://github.com/app-masters/doar-computadores-frontend/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/app-masters/doar-computadores-frontend/
          </a>
        </Description>
      </Content>

      <footer>
        App Masters All rights reserved <FaCopyright />
      </footer>
    </Container>
  );
};

export default Footer;
