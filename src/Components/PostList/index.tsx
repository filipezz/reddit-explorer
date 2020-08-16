import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { MdChat } from 'react-icons/md';
import { Posts, Label } from './styles';

import PostDTO from '../../DTOs/PostDto';

interface PostListProps {
  posts: PostDTO[];
  error?: string;
}
const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <Posts>
      {posts.map((post) => (
        <a
          target="_blank"
          rel="noopener noreferrer"
          key={post.id}
          href={post.url}
        >
          {post.thumbnail !== 'self' ? (
            <img src={post.thumbnail} alt="" />
          ) : (
            <picture>
              <MdChat size={24} color="#888" />
            </picture>
          )}
          <div>
            {post.link_flair_text && (
              <Label
                textColor={post.link_flair_text_color}
                style={{ background: post.link_flair_background_color }}
              >
                {post.link_flair_text}
              </Label>
            )}

            <strong>{post.title}</strong>
            <p>
              Postado por
              {'  '}
              u/
              {post.author}
              {'  '}
              há
              {'  '}
              {post.formattedDate}
            </p>
            <p>{post.domain}</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      ))}
    </Posts>
  );
};

export default PostList;
