import {ApolloProvider} from '@apollo/client'
import {useApollo} from '../apolloClient'
import {NextPage} from "next";
import '../styles/globals.css'


const App: NextPage<any> = ({Component, pageProps}) => {
    const apolloClient = useApollo(pageProps)


    return (
        <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default App