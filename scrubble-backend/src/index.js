const {GraphQLServer} = require('graphql-yoga');
const {Prisma} = require('prisma-binding');
// const fetch = require('node-fetch');

const URL = `http://api.urbandictionary.com/v0/define?term=`;

const resolvers = {
    Query: {
        feed(parent, args, ctx, info) {
            return ctx.db.query.posts({where: {isPublished: true}}, info)
        },
        drafts(parent, args, ctx, info) {
            return ctx.db.query.posts({where: {isPublished: false}}, info)
        },
        post(parent, {id}, ctx, info) {
            return ctx.db.query.post({where: {id}}, info)
        },
        async getTerm(parent, args) {
            const {term} = args;
            return await fetch(`${URL}${term}`).then(res => res.json())
        },
    },
    Mutation: {
        createDraft(parent, {title, text}, ctx, info) {
            return ctx.db.mutation.createPost(
                {
                    data: {
                        title,
                        text,
                    },
                },
                info,
            )
        },
        deletePost(parent, {id}, ctx, info) {
            return ctx.db.mutation.deletePost({where: {id}}, info)
        },
        publish(parent, {id}, ctx, info) {
            return ctx.db.mutation.updatePost(
                {
                    where: {id},
                    data: {isPublished: true},
                },
                info,
            )
        },
    },
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql', // the auto-generated GraphQL schema of the Prisma API
      endpoint: 'https://us1.prisma.sh/public-waxbird-130/scrubble-backend/dev', // the endpoint of the Prisma API
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      // secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
