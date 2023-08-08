This is based on the example frontend project for Codebrew 2023 hackathon. Feel free to use this as a template<br>
Link to the original slides:
https://www.canva.com/design/DAFfsIE6uZM/IpnfMh__IyezI9wwlBI-eg/edit?utm_content=DAFfsIE6uZM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## Getting Started

1. Create a MongoDB Atlas account to make a database in the cloud
2. Inside MongoDB, create a new database within a cluster.
3. Inside that database, create a collection.
4. Give the database the name “recipe-database” and the collection the name “recipes”
5. Copy a connection string from MongoDB Atlas. You can find it under the “Connect Instructions” button of MongoDB Atlas
The connection string should look like (don't copy this one):
```
MONGODB_URI= "mongodb+srv://USERNAME:PASSWORD@cluster0.7cpxz.mongodb.net?retryWrites=true&w=majority"
```
6. Create a new file called .env.local in the top level directory of this project and paste the connection string
7. Remember to change USERNAME and PASSWORD to your actual MongoDB username and password

Then, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/recipes](http://localhost:3000/api/recipes). This endpoint can be edited in `pages/api/recipes.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
