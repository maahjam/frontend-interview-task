import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import useStore from '../store/useStore';
import PostCard from '../components/PostCard';

jest.mock('../store/useStore', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('PostCard Component', () => {
  const mockToggleLike = jest.fn();
  const mockToggleBookmark = jest.fn();

  const mockPost = {
    id: 1,
    author: 'John Doe',
    content: 'This is a sample post.',
    image: 'https://via.placeholder.com/600',
    liked: false,
    bookMarked: false,
  };

  beforeEach(() => {
    (useStore as unknown as jest.Mock).mockReturnValue({
      toggleLike: mockToggleLike,
      toggleBookmark: mockToggleBookmark,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the post content', () => {
    render(<PostCard {...mockPost} />);

    expect(screen.getByText(mockPost.author)).toBeInTheDocument();
    expect(screen.getByText(mockPost.content)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /post/i })).toHaveAttribute('src', mockPost.image);
  });

  it('should call toggleLike when like button is clicked', () => {
    render(<PostCard {...mockPost} />);

    const likeButton = screen.getByRole('button', { name: /Like this post/i });
    fireEvent.click(likeButton);

    expect(mockToggleLike).toHaveBeenCalledTimes(1);
    expect(mockToggleLike).toHaveBeenCalledWith(mockPost.id);
  });

  it('should call toggleBookmark when bookmark button is clicked', () => {
    render(<PostCard {...mockPost} />);

    const bookmarkButton = screen.getByRole('button', { name: /Bookmark this post/i });
    console.log(bookmarkButton);

    fireEvent.click(bookmarkButton);

    expect(mockToggleBookmark).toHaveBeenCalledTimes(1);
    expect(mockToggleBookmark).toHaveBeenCalledWith(mockPost.id);
  });

  it('should display "Unlike" when the post is liked', () => {
    render(<PostCard {...mockPost} liked={true} />);

    const unlikeButton = screen.getByRole('button', { name: /Unlike this post/i });
    expect(unlikeButton).toBeInTheDocument();
  });

  it('should display "Unbookmark" when the post is bookmarked', () => {
    render(<PostCard {...mockPost} bookMarked={true} />);

    const unbookmarkButton = screen.getByRole('button', { name: /Remove bookmark/i });
    expect(unbookmarkButton).toBeInTheDocument();
  });
});
