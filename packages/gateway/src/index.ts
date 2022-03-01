import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const gateway = new ApolloGateway({
    serviceList: [
        { name: 'Auth', url: 'http://localhost:4001' }
    ]
});
const server = new ApolloServer({
    gateway
});

server.listen(4000).then(({ url }) => {
    console.log(`Gateway is ready at ${url}`);
}).catch(error => console.error(error));