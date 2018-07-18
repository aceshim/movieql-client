import AppolloClient from "apollo-boost";

const client = new AppolloClient({
    uri: "https://movieql-osezlvyqsg.now.sh/" // Where is your graphql
})

export default client;