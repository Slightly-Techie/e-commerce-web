/*eslint-env node*/

import "dotenv/config";
import fs from "fs";

const url = process.env.VITE_API_URL;

export async function generateGraphQLConfig() {
  const colors = { red: "\x1b[31m", green: "\x1b[36m%s\x1b[0m" };

  const data = `schema: "${url}"\ndocuments:\n\t- "src/**/*{gql,tsx,ts,graphql}"`;

  try {
    if (!url) throw new Error();

    fs.writeFile("graphql.config.yml", data, () => {
      console.log(colors.green, "✅ Generated .yml config\n");
    });
  } catch (err) {
    console.log(
      colors.red,
      "❌ An error occured while generating .yml file. \nCheck your .env variables\n",
    );
  }
}

// schema: "https://ecommerce-api-st.fly.dev"
// documents:
//   - "src/**/*.{gql,tsx,ts,graphql}"

generateGraphQLConfig();
