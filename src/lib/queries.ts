import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      errors {
        message
        property
      }
      status
      token
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

export const RESEND_VERFICATION = gql`
  mutation resendOTP($input: ResendConfirmationEmailInput!) {
    resendEmailOtp(input: $input) {
      errors {
        message
        property
      }
      status
      success
    }
  }
`;

export const FORGOT_PASSWORD = gql(`
mutation forgottenPasswordMutation($input:ForgotPasswordInput! ) {
  forgotPassword(input: $input){
      clientMutationId
      errors{message}
      status
      success
    }
  }
  `);

export const RESET_PASSWORD = gql(`
    mutation resetPassword($input: ResetPasswordInput!) {
        resetPassword(input: $input){
            clientMutationId
            errors{message}
            status
            success
          }
        }
  `);

export const VERIFY_PASSWORD_RESET_TOKEN = gql(`
    mutation resetPAsswordToken($input: VerifyResetTokenInput!) {
      verifyResetToken(input: $input){
            clientMutationId
            errors{message}
            status
            success
          }
        }
  `);

