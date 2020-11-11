import React, { useCallback } from 'react';

import { MdCached, MdTrendingFlat } from 'react-icons/md';
import Switch from 'react-switch';
import useSWR from 'swr';

import DarkIcon from '../../components/DarkIcon';
import LightIcon from '../../components/LightIcon';
import Loading from '../../components/LoadingDots';
import Quote from '../../components/Quote';
import { useTheme } from '../../hooks/theme';
import { getRandom } from '../../services/api';
import { Author, Container, Contents, Header } from './styles';

const Home: React.FC = () => {
  const { data, mutate } = useSWR('random', getRandom, {
    refreshInterval: 0,
    revalidateOnFocus: false,
  });
  const { theme, toggleTheme } = useTheme();

  const getNewQuote = useCallback(() => {
    mutate();
  }, []);

  return (
    <Container>
      <Header>
        <Switch
          onChange={toggleTheme}
          checked={theme.title === 'light'}
          onHandleColor={theme.colors.primary}
          offHandleColor={theme.colors.primary}
          onColor={theme.colors.secondary}
          offColor={theme.colors.secondary}
          width={60}
          uncheckedIcon={<DarkIcon />}
          checkedIcon={<LightIcon />}
        />
        <button type="button" onClick={getNewQuote}>
          random
          <MdCached />
        </button>
      </Header>

      <Contents>
        {!data ? (
          <Loading />
        ) : (
          <>
            <Quote content={data.quote.quoteText} />

            <Author
              data-testid="author-button"
              to={`/authors/${data.quote.quoteAuthor}`}
            >
              <span>
                <h3>{data.quote.quoteAuthor}</h3>
                <span>{data.quote.quoteGenre}</span>
              </span>
              <MdTrendingFlat size="1.5em" />
            </Author>
          </>
        )}
      </Contents>
    </Container>
  );
};

export default Home;
