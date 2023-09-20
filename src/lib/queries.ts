import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createAccount($input: CreateUserInput!) {
    createUser(input: $input) {
      errors {
        message
        property
      }
      token
      status
      user {
        accountType
        createdAt
        email
        emailConfirmed
        firstName
        id
        lastName
        phoneNumber
        socialLinks {
          github
        }
        updatedAt
        username
      }
    }
  }
`;

export const SET_ACCOUNT = gql`
  mutation setAccount($input: SetAccountInput!) {
    setAccount(input: $input) {
      errors {
        message
        property
      }
      status
      user {
        accountType
        createdAt
        email
        emailConfirmed
        firstName
        id
        lastName
        phoneNumber
        socialLinks {
          github
        }
        updatedAt
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updataUser($Input: UpdateUserInput!) {
    updateUser(input: $Input) {
      clientMutationId
      errors {
        message
        property
      }
      status
      user {
        accountType
        createdAt
        email
        emailConfirmed
        firstName
        id
        lastName
        phoneNumber
        socialLinks {
          github
        }
        updatedAt
        username
      }
    }
  }
`;
export const VERIFY_CODE = gql`
  mutation confirmEmail($input: ConfirmEmailInput!) {
    confirmEmail(input: $input) {
      errors {
        message
        property
      }
      status
      success
      token
    }
  }
`;
