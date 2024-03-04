/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
};

export enum Account {
  /** Non ST Member */
  NonTechie = 'NON_TECHIE',
  /** Slightly Techie Member */
  Techie = 'TECHIE'
}

/** Autogenerated input type of AddToCart */
export type AddToCartInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['ID']['input'];
};

/** Autogenerated return type of AddToCart. */
export type AddToCartPayload = {
  __typename?: 'AddToCartPayload';
  cart?: Maybe<Cart>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  status: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

export type Cart = {
  __typename?: 'Cart';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  userId: Scalars['ID']['output'];
};

/** Autogenerated input type of ChangePassword */
export type ChangePasswordInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

/** Autogenerated return type of ChangePassword. */
export type ChangePasswordPayload = {
  __typename?: 'ChangePasswordPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  status: Scalars['Int']['output'];
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Autogenerated input type of ConfirmEmail */
export type ConfirmEmailInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

/** Autogenerated return type of ConfirmEmail. */
export type ConfirmEmailPayload = {
  __typename?: 'ConfirmEmailPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  status: Scalars['Int']['output'];
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of CreateProductView */
export type CreateProductViewInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['ID']['input'];
};

/** Autogenerated return type of CreateProductView. */
export type CreateProductViewPayload = {
  __typename?: 'CreateProductViewPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  status: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

/** Autogenerated input type of CreateReview */
export type CreateReviewInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['ID']['input'];
  rating: Scalars['Float']['input'];
};

/** Autogenerated return type of CreateReview. */
export type CreateReviewPayload = {
  __typename?: 'CreateReviewPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  status: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

/** Autogenerated input type of CreateUser */
export type CreateUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

/** Autogenerated return type of CreateUser. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  status: Scalars['Int']['output'];
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

/** Autogenerated input type of DeleteUser */
export type DeleteUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

/** Autogenerated return type of DeleteUser. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  status: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

export type Error = {
  __typename?: 'Error';
  message?: Maybe<Scalars['String']['output']>;
  property: Scalars['String']['output'];
};

/** Autogenerated input type of ForgotPassword */
export type ForgotPasswordInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

/** Autogenerated return type of ForgotPassword. */
export type ForgotPasswordPayload = {
  __typename?: 'ForgotPasswordPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  status: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

/** Autogenerated input type of Login */
export type LoginInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of Login. */
export type LoginPayload = {
  __typename?: 'LoginPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  status: Scalars['Int']['output'];
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addToCart?: Maybe<AddToCartPayload>;
  changePassword?: Maybe<ChangePasswordPayload>;
  confirmEmail?: Maybe<ConfirmEmailPayload>;
  createProductView?: Maybe<CreateProductViewPayload>;
  createReview?: Maybe<CreateReviewPayload>;
  createUser?: Maybe<CreateUserPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  forgotPassword?: Maybe<ForgotPasswordPayload>;
  login?: Maybe<LoginPayload>;
  resendConfirmationEmail?: Maybe<ResendConfirmationEmailPayload>;
  resetPassword?: Maybe<ResetPasswordPayload>;
  saveProduct?: Maybe<SaveProductPayload>;
  setAccountType?: Maybe<SetAccountPayload>;
  updateReview?: Maybe<UpdateReviewPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  verifyResetToken?: Maybe<VerifyResetTokenPayload>;
  viewProduct?: Maybe<CreateProductViewPayload>;
};


export type MutationAddToCartArgs = {
  input: AddToCartInput;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationConfirmEmailArgs = {
  input: ConfirmEmailInput;
};


export type MutationCreateProductViewArgs = {
  input: CreateProductViewInput;
};


export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationResendConfirmationEmailArgs = {
  input: ResendConfirmationEmailInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSaveProductArgs = {
  input: SaveProductInput;
};


export type MutationSetAccountTypeArgs = {
  input: SetAccountInput;
};


export type MutationUpdateReviewArgs = {
  input: UpdateReviewInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationVerifyResetTokenArgs = {
  input: VerifyResetTokenInput;
};


export type MutationViewProductArgs = {
  input: CreateProductViewInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  __typename?: 'Product';
  categories?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  discountPercentage?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  inStock?: Maybe<Scalars['Boolean']['output']>;
  isDiscounted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  ratings?: Maybe<Scalars['Float']['output']>;
  reviews?: Maybe<Array<Review>>;
  specification?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  viewsCount?: Maybe<Scalars['Int']['output']>;
};

/** The connection type for Product. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProductEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Product>;
};

export type Query = {
  __typename?: 'Query';
  fetchProduct: Product;
  fetchProductCategories: Array<Product>;
  fetchSavedProducts: ProductConnection;
  fetchSimilarProducts: ProductConnection;
  products: ProductConnection;
  profile?: Maybe<User>;
};


export type QueryFetchProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchSavedProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchSimilarProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Autogenerated input type of ResendConfirmationEmail */
export type ResendConfirmationEmailInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

/** Autogenerated return type of ResendConfirmationEmail. */
export type ResendConfirmationEmailPayload = {
  __typename?: 'ResendConfirmationEmailPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  status: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

/** Autogenerated input type of ResetPassword */
export type ResetPasswordInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newPassword: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
  resetToken: Scalars['String']['input'];
};

/** Autogenerated return type of ResetPassword. */
export type ResetPasswordPayload = {
  __typename?: 'ResetPasswordPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  status: Scalars['Int']['output'];
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Review = {
  __typename?: 'Review';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user: User;
};

/** Autogenerated input type of SaveProduct */
export type SaveProductInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['ID']['input'];
};

/** Autogenerated return type of SaveProduct. */
export type SaveProductPayload = {
  __typename?: 'SaveProductPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  product: Product;
  status: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

/** Autogenerated input type of SetAccount */
export type SetAccountInput = {
  accountType: Account;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of SetAccount. */
export type SetAccountPayload = {
  __typename?: 'SetAccountPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  status: Scalars['Int']['output'];
  user?: Maybe<User>;
};

export type SocialLinks = {
  __typename?: 'SocialLinks';
  github?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  linkedin?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
};

export type SocialLinksInput = {
  github?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  youtube?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of UpdateReview */
export type UpdateReviewInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['ID']['input'];
  rating: Scalars['Float']['input'];
};

/** Autogenerated return type of UpdateReview. */
export type UpdateReviewPayload = {
  __typename?: 'UpdateReviewPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  status: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

/** Autogenerated input type of UpdateUser */
export type UpdateUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userInput: UserInput;
};

/** Autogenerated return type of UpdateUser. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  status: Scalars['Int']['output'];
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  accountType?: Maybe<Account>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  email: Scalars['String']['output'];
  emailConfirmed?: Maybe<Scalars['Boolean']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  socialLinks?: Maybe<SocialLinks>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  username: Scalars['String']['output'];
};

export type UserInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  socialLinks?: InputMaybe<SocialLinksInput>;
};

/** Autogenerated input type of VerifyResetToken */
export type VerifyResetTokenInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  resetToken: Scalars['String']['input'];
};

/** Autogenerated return type of VerifyResetToken. */
export type VerifyResetTokenPayload = {
  __typename?: 'VerifyResetTokenPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Error>>;
  status: Scalars['Int']['output'];
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type LoginMutationVariables = Exact<{ [key: string]: never; }>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginPayload', clientMutationId?: string | null, status: number, token?: string | null, errors?: Array<{ __typename?: 'Error', message?: string | null, property: string }> | null, user?: { __typename?: 'User', accountType?: Account | null, createdAt: any, email: string, emailConfirmed?: boolean | null, firstName?: string | null, id: string, lastName?: string | null, phoneNumber?: string | null, updatedAt: any, username: string, socialLinks?: { __typename?: 'SocialLinks', github?: string | null, instagram?: string | null, linkedin?: string | null, twitter?: string | null, website?: string | null, youtube?: string | null } | null } | null } | null };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"StringValue","value":"string","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"property"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailConfirmed"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"socialLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"youtube"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;