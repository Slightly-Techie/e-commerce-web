import { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";

const config: CodegenConfig = {
  overwrite: true,
  schema: import.meta.env.VITE_API_URL,
  documents: ["src/graphql/**/*.gql"],
  generates: {
    "./src/__generated__/gql.tsx": {
      // preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        {
          add: {
            content: "/* eslint-disable */",
          },
        },
      ],
      config: {
        withComponent: true,
      },
      presetConfig: {
        gqlTagName: "graphql",
      },
    },
  },
};

export default config;
