## Credit

This is based on the example frontend project for Codebrew 2023 hackathon by Kevin but extended to include a next.js and mongodb based backend. Feel free to use this as a template<br>

- Link to the original slides:
https://www.canva.com/design/DAFfsIE6uZM/IpnfMh__IyezI9wwlBI-eg/edit?utm_content=DAFfsIE6uZM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
- Link to original code (no backend):
https://github.com/Kevin-Zhouu/Codebrew2023-Frontend-workshop

## Getting Started

1. Create a MongoDB Atlas account to make a database in the cloud
2. Inside MongoDB, create a new database within a cluster.
3. Inside that database, create a collection.
4. Give the database the name “recipe-database” and the collection the name “recipes”
5. Copy a connection string from MongoDB Atlas. You can find it under the “Connect Instructions” button of MongoDB Atlas
6. The connection string should look like (don't copy this one):
```
MONGODB_URI="mongodb+srv://USERNAME:PASSWORD@cluster0.7cpxz.mongodb.net?retryWrites=true&w=majority"
```
7. Create a new file called .env.local in the top level directory of this project and paste the connection string
8. Change the connection string also in https://github.com/edward70/first-year-workshop/blob/main/flask-server/server.py (don't include the MONGODB_URI part!!)
9. Remember to change USERNAME and PASSWORD to your actual MongoDB username and password

Then, run the development server:

```bash
npm install
npm run dev
```

## how do i do this from scratch?
- create new nextjs project
- install material ui and mongodb
- create components
- create client code to access api in index.js
- mongodb setup instructions as listed above
- create lib/mongodb.js to establish connection
- create the api route for the backend
- misc: make sure mongodb username and password is correct, cluster name doesn't matter

Open [http://127.0.0.1:3000](http://127.0.0.1:3000) with your browser to see the result.
**!!! Note: using localhost may cause an error depending on your browser so use 127.0.0.1 instead !!!**

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://127.0.0.1:3000/api/recipes](http://127.0.0.1:3000/api/recipes). This endpoint can be edited in `pages/api/recipes.js`.

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
