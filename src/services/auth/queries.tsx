import { gql } from "@apollo/client";

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
