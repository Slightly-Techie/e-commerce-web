# ST Marketplace

## GraphQL

### Queries, Mutations & Fragments

Notice our GraphQL files have the extension, `.gql`

We keep all our GraphQL related files in `/src/graphql`

## Autocomplete for your GraphQL Queries

The project has been setup with autocomplete features for queries and mutations. To make use of this feature, make sure you install the GraphQL VS Code extensions and generate the .config.yml file

- [GraphQL: Language Feature Support](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)
- [GraphQL: Syntax Highlighting](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql-syntax)

Remember to have a value for the api url in an env file before running this code

```
npm run generate-gql-config
```

## GraphQL Codegen

We use GraphQL Codegen to generate types for all our queries, mutations and co.

Run the following code anytime you add a new query, fragment or mutation

```
npm run generate
```

You can also add a `--watch` or `-w` flag to keep the generator running while you make changes

```
npm run generate -w
```
