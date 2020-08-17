import React, { useState, useEffect, useCallback } from 'react';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { NavLink, useParams } from 'react-router-dom';

import { GoGraph } from 'react-icons/go';
import { AiFillFire } from 'react-icons/ai';
import { AiOutlineRise } from 'react-icons/ai';
import { GiSevenPointedStar } from 'react-icons/gi';

import PostDTO from '../../DTOs/PostDto';
import api from '../../services/api';

import GhostElement from '../../Components/GhostComponent';
import PostList from '../../Components/PostList';

import { Header, Navigation, LoadMore } from './styles';

interface Request {
  data: PostDTO;
}

interface ParamsProps {
  section: 'hot' | 'new' | 'top' | 'rising';
}

const Dashboard: React.FC = () => {
  const [posts, setPosts] = useState<PostDTO[]>([]);
  const [nextPage, setNextPage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { section } = useParams<ParamsProps>();

  useEffect(() => {
    async function loadPosts(): Promise<void> {
      try {
        const response = await api.get(
          section === 'hot' ? `/${section}?limit=5` : `/${section}?limit=7`,
        );
        setPosts(
          response.data.data.children.map((post: Request) => ({
            ...post.data,
            formattedDate: formatDistance(
              new Date(),
              post.data.created * 1000,
              {
                locale: ptBR,
              },
            ),
          })),
        );

        setNextPage(response.data.data.after);
      } catch (err) {
        setError('Desculpe, algo deu errado. Tente novamente mais tarde.');
      }
    }
    loadPosts();
  }, [section]);

  const handleLoadMorePosts = useCallback(async () => {
    if (!nextPage) {
      setError('Parece que acabaram os posts!');
      return;
    }
    setLoading(true);
    const response = await api.get(`/${section}?limit=5&after=${nextPage}`);
    setPosts([
      ...posts,
      ...response.data.data.children.map((post: Request) => ({
        ...post.data,
        formattedDate: formatDistance(new Date(), post.data.created * 1000, {
          locale: ptBR,
        }),
      })),
    ]);
    setNextPage(response.data.data.after);
    setLoading(false);
  }, [nextPage, section, posts]);

  return (
    <>
      <Header>
        <img
          src="https://styles.redditmedia.com/t5_2zldd/styles/communityIcon_fbblpo38vy941.png?width=256&s=13a87a036836ce95570a76feb53f27e61717ad1b"
          alt=""
        />
        <div>
          <h1>/r/ReactJS - The Front Page of React</h1>
          <p>/reactjs</p>
        </div>
      </Header>
      <Navigation>
        <NavLink
          activeStyle={{
            background: '#272729',
            fontWeight: 'bold',
          }}
          to="/hot"
        >
          <AiFillFire size={17} />
          Hot
        </NavLink>

        <NavLink
          activeStyle={{
            background: '#272729',
            fontWeight: 'bold',
          }}
          to="/new"
        >
          <GiSevenPointedStar size={17} />
          New
        </NavLink>

        <NavLink
          activeStyle={{
            background: '#272729',
            fontWeight: 'bold',
          }}
          to="/top"
        >
          <GoGraph size={17} />
          Top
        </NavLink>

        <NavLink
          activeStyle={{
            background: '#272729',
            fontWeight: 'bold',
          }}
          to="/rising"
        >
          <AiOutlineRise size={17} />
          Rising
        </NavLink>
      </Navigation>
      {posts.length ? (
        <>
          <PostList error={error} posts={posts} />
          {loading ? (
            <GhostElement error={error} numberOfRepetitions={2} />
          ) : (
            <>
              {nextPage && (
                <LoadMore>
                  <button onClick={handleLoadMorePosts} type="button">
                    Load more
                  </button>
                </LoadMore>
              )}
            </>
          )}
        </>
      ) : (
        <GhostElement error={error} numberOfRepetitions={7} />
      )}
    </>
  );
};

export default Dashboard;
