import { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";

const config: CodegenConfig = {
  // Paste API URL
  schema: import.meta.env.VITE_API_URL,
  documents: ["src/**/*.gql"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
  overwrite: true,
};

export default config;
