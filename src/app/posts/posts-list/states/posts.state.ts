import { Post } from 'src/app/models/posts.model';

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: [
    { id: 1, title: 'sample Title 1', description: 'sample Description 1' },
    { id: 1, title: 'sample Title 1', description: 'sample Description 1' },
  ],
};
