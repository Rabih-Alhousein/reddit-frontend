/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any };
};

export type Error = {
  __typename?: "Error";
  field: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  changePassword: UserResponse;
  createPost: Post;
  deletePost: Scalars["Boolean"]["output"];
  forgotPassword: Scalars["Boolean"]["output"];
  login: UserResponse;
  logout: Scalars["Boolean"]["output"];
  register: UserResponse;
  updatePost?: Maybe<Post>;
  vote: Scalars["Boolean"]["output"];
};

export type MutationChangePasswordArgs = {
  newPassword: Scalars["String"]["input"];
  token: Scalars["String"]["input"];
};

export type MutationCreatePostArgs = {
  input: PostInput;
};

export type MutationDeletePostArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"]["input"];
};

export type MutationLoginArgs = {
  password: Scalars["String"]["input"];
  usernameOrEmail: Scalars["String"]["input"];
};

export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};

export type MutationUpdatePostArgs = {
  id: Scalars["Int"]["input"];
  text: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type MutationVoteArgs = {
  postId: Scalars["Int"]["input"];
  value: Scalars["Int"]["input"];
};

export type PaginatedPosts = {
  __typename?: "PaginatedPosts";
  hasMore: Scalars["Boolean"]["output"];
  posts: Array<Post>;
};

export type Post = {
  __typename?: "Post";
  createdAt: Scalars["DateTime"]["output"];
  creator: User;
  creatorId: Scalars["Float"]["output"];
  id: Scalars["Float"]["output"];
  points: Scalars["Float"]["output"];
  text: Scalars["String"]["output"];
  textSnippet: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  upvotes: Array<Upvote>;
  voteStatus?: Maybe<Scalars["Int"]["output"]>;
};

export type PostInput = {
  text: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type Query = {
  __typename?: "Query";
  hello: Scalars["String"]["output"];
  me?: Maybe<User>;
  post?: Maybe<Post>;
  posts: PaginatedPosts;
};

export type QueryPostArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryPostsArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  limit: Scalars["Int"]["input"];
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type Upvote = {
  __typename?: "Upvote";
  createdAt: Scalars["DateTime"]["output"];
  post: Post;
  postId: Scalars["Float"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  user: User;
  userId: Scalars["Float"]["output"];
  value: Scalars["Float"]["output"];
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["Float"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  upvotes: Array<Upvote>;
  username: Scalars["String"]["output"];
};

export type UserResponse = {
  __typename?: "UserResponse";
  accessToken?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<Error>>;
  user?: Maybe<User>;
};

export type UsernamePasswordInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type PostSnippetFragment = {
  __typename?: "Post";
  id: number;
  title: string;
  text: string;
  textSnippet: string;
  points: number;
  creatorId: number;
  createdAt: any;
  updatedAt: any;
  creator: { __typename?: "User"; id: number; username: string };
} & { " $fragmentName"?: "PostSnippetFragment" };

export type RegularErrorFragment = {
  __typename?: "Error";
  field: string;
  message: string;
} & { " $fragmentName"?: "RegularErrorFragment" };

export type RegularUserFragment = {
  __typename?: "User";
  id: number;
  username: string;
  createdAt: any;
  updatedAt: any;
} & { " $fragmentName"?: "RegularUserFragment" };

export type RegularUserResponseFragment = {
  __typename?: "UserResponse";
  errors?: Array<
    { __typename?: "Error" } & {
      " $fragmentRefs"?: { RegularErrorFragment: RegularErrorFragment };
    }
  > | null;
  user?:
    | ({ __typename?: "User" } & {
        " $fragmentRefs"?: { RegularUserFragment: RegularUserFragment };
      })
    | null;
} & { " $fragmentName"?: "RegularUserResponseFragment" };

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars["String"]["input"];
  newPassword: Scalars["String"]["input"];
}>;

export type ChangePasswordMutation = {
  __typename?: "Mutation";
  changePassword: {
    __typename?: "UserResponse";
    errors?: Array<{
      __typename?: "Error";
      field: string;
      message: string;
    }> | null;
    user?: {
      __typename?: "User";
      id: number;
      username: string;
      createdAt: any;
      updatedAt: any;
    } | null;
  };
};

export type CreatePostMutationVariables = Exact<{
  input: PostInput;
}>;

export type CreatePostMutation = {
  __typename?: "Mutation";
  createPost: {
    __typename?: "Post";
    id: number;
    title: string;
    text: string;
    points: number;
    creatorId: number;
    createdAt: any;
    updatedAt: any;
  };
};

export type DeletePostMutationVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type DeletePostMutation = {
  __typename?: "Mutation";
  deletePost: boolean;
};

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars["String"]["input"];
}>;

export type ForgotPasswordMutation = {
  __typename?: "Mutation";
  forgotPassword: boolean;
};

export type LoginMutationVariables = Exact<{
  password: Scalars["String"]["input"];
  usernameOrEmail: Scalars["String"]["input"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "UserResponse";
    accessToken?: string | null;
    errors?: Array<{
      __typename?: "Error";
      field: string;
      message: string;
    }> | null;
    user?: {
      __typename?: "User";
      id: number;
      createdAt: any;
      updatedAt: any;
      username: string;
    } | null;
  };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: "Mutation"; logout: boolean };

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register: {
    __typename?: "UserResponse";
    errors?: Array<{
      __typename?: "Error";
      field: string;
      message: string;
    }> | null;
    user?: {
      __typename?: "User";
      id: number;
      createdAt: any;
      updatedAt: any;
      username: string;
    } | null;
  };
};

export type UpdatePostMutationVariables = Exact<{
  text: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
  id: Scalars["Int"]["input"];
}>;

export type UpdatePostMutation = {
  __typename?: "Mutation";
  updatePost?: {
    __typename?: "Post";
    id: number;
    title: string;
    text: string;
    points: number;
    creatorId: number;
    voteStatus?: number | null;
    createdAt: any;
    updatedAt: any;
    textSnippet: string;
    creator: { __typename?: "User"; id: number; username: string };
  } | null;
};

export type VoteMutationVariables = Exact<{
  postId: Scalars["Int"]["input"];
  value: Scalars["Int"]["input"];
}>;

export type VoteMutation = { __typename?: "Mutation"; vote: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me?: {
    __typename?: "User";
    id: number;
    createdAt: any;
    updatedAt: any;
    username: string;
  } | null;
};

export type PostQueryVariables = Exact<{
  postId: Scalars["Int"]["input"];
}>;

export type PostQuery = {
  __typename?: "Query";
  post?: {
    __typename?: "Post";
    id: number;
    title: string;
    text: string;
    points: number;
    creatorId: number;
    voteStatus?: number | null;
    createdAt: any;
    updatedAt: any;
    creator: { __typename?: "User"; id: number; username: string };
  } | null;
};

export type PostsQueryVariables = Exact<{
  limit: Scalars["Int"]["input"];
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type PostsQuery = {
  __typename?: "Query";
  posts: {
    __typename?: "PaginatedPosts";
    hasMore: boolean;
    posts: Array<{
      __typename?: "Post";
      id: number;
      title: string;
      text: string;
      textSnippet: string;
      points: number;
      voteStatus?: number | null;
      creatorId: number;
      createdAt: any;
      updatedAt: any;
      creator: { __typename?: "User"; id: number; username: string };
    }>;
  };
};

export const PostSnippetFragmentDoc = gql`
  fragment PostSnippet on Post {
    id
    title
    text
    textSnippet
    points
    creatorId
    creator {
      id
      username
    }
    createdAt
    updatedAt
  }
`;
export const RegularErrorFragmentDoc = gql`
  fragment RegularError on Error {
    field
    message
  }
`;
export const RegularUserFragmentDoc = gql`
  fragment RegularUser on User {
    id
    username
    createdAt
    updatedAt
  }
`;
export const RegularUserResponseFragmentDoc = gql`
  fragment RegularUserResponse on UserResponse {
    errors {
      ...RegularError
    }
    user {
      ...RegularUser
    }
  }
  ${RegularErrorFragmentDoc}
  ${RegularUserFragmentDoc}
`;
export const ChangePasswordDocument = gql`
  mutation changePassword($token: String!, $newPassword: String!) {
    changePassword(token: $token, newPassword: $newPassword) {
      errors {
        field
        message
      }
      user {
        id
        username
        createdAt
        updatedAt
      }
    }
  }
`;

export function useChangePasswordMutation() {
  return Urql.useMutation<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >(ChangePasswordDocument);
}
export const CreatePostDocument = gql`
  mutation CreatePost($input: PostInput!) {
    createPost(input: $input) {
      id
      title
      text
      points
      creatorId
      createdAt
      updatedAt
    }
  }
`;

export function useCreatePostMutation() {
  return Urql.useMutation<CreatePostMutation, CreatePostMutationVariables>(
    CreatePostDocument
  );
}
export const DeletePostDocument = gql`
  mutation deletePost($id: Int!) {
    deletePost(id: $id)
  }
`;

export function useDeletePostMutation() {
  return Urql.useMutation<DeletePostMutation, DeletePostMutationVariables>(
    DeletePostDocument
  );
}
export const ForgotPasswordDocument = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

export function useForgotPasswordMutation() {
  return Urql.useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument);
}
export const LoginDocument = gql`
  mutation login($password: String!, $usernameOrEmail: String!) {
    login(password: $password, usernameOrEmail: $usernameOrEmail) {
      errors {
        field
        message
      }
      user {
        id
        createdAt
        updatedAt
        username
      }
      accessToken
    }
  }
`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
}
export const LogoutDocument = gql`
  mutation logout {
    logout
  }
`;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument
  );
}
export const RegisterDocument = gql`
  mutation register($options: usernamePasswordInput!) {
    register(options: $options) {
      errors {
        field
        message
      }
      user {
        id
        createdAt
        updatedAt
        username
      }
    }
  }
`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument
  );
}
export const UpdatePostDocument = gql`
  mutation UpdatePost($text: String!, $title: String!, $id: Int!) {
    updatePost(text: $text, title: $title, id: $id) {
      id
      title
      text
      points
      creatorId
      voteStatus
      creator {
        id
        username
      }
      createdAt
      updatedAt
      textSnippet
    }
  }
`;

export function useUpdatePostMutation() {
  return Urql.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(
    UpdatePostDocument
  );
}
export const VoteDocument = gql`
  mutation vote($postId: Int!, $value: Int!) {
    vote(postId: $postId, value: $value)
  }
`;

export function useVoteMutation() {
  return Urql.useMutation<VoteMutation, VoteMutationVariables>(VoteDocument);
}
export const MeDocument = gql`
  query Me {
    me {
      id
      createdAt
      updatedAt
      username
    }
  }
`;

export function useMeQuery(
  options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, "query">
) {
  return Urql.useQuery<MeQuery, MeQueryVariables>({
    query: MeDocument,
    ...options,
  });
}
export const PostDocument = gql`
  query Post($postId: Int!) {
    post(id: $postId) {
      id
      title
      text
      points
      creatorId
      voteStatus
      creator {
        id
        username
      }
      createdAt
      updatedAt
    }
  }
`;

export function usePostQuery(
  options: Omit<Urql.UseQueryArgs<PostQueryVariables>, "query">
) {
  return Urql.useQuery<PostQuery, PostQueryVariables>({
    query: PostDocument,
    ...options,
  });
}
export const PostsDocument = gql`
  query Posts($limit: Int!, $cursor: String, $search: String) {
    posts(limit: $limit, cursor: $cursor, search: $search) {
      posts {
        id
        title
        text
        textSnippet
        points
        voteStatus
        creatorId
        creator {
          id
          username
        }
        createdAt
        updatedAt
      }
      hasMore
    }
  }
`;

export function usePostsQuery(
  options: Omit<Urql.UseQueryArgs<PostsQueryVariables>, "query">
) {
  return Urql.useQuery<PostsQuery, PostsQueryVariables>({
    query: PostsDocument,
    ...options,
  });
}
