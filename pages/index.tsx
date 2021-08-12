import {NextPage, GetStaticProps, GetStaticPropsContext, GetStaticPropsResult} from "next";
import {initializeApollo, isLoggedInVar} from "../apolloClient";
import {ApolloQueryResult, gql, useReactiveVar} from '@apollo/client'
import {hello} from "../__generated__/hello";
import {Header} from "../component/Header";


export const HELLO = gql`
    query hello {
        hello
    }
`


interface IIndex {
    id: number
}


const Index: NextPage<IIndex> = () => {


    const isLoggedIn = useReactiveVar(isLoggedInVar);
    return (
        <>
            <div className={'mx-auto'} style={{'maxWidth':'1150px'}}>
                <Header/>
                <span>{isLoggedIn ? "로그인됌" : "로그인 안됌"}</span>
            </div>

        </>
    )

}


export default Index


// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext): Promise<GetStaticPropsResult<IHomeProps>> => {
//
//     const apolloClient = initializeApollo()
//
//     const { data } : ApolloQueryResult<hello> = await apolloClient.query({
//         query: HELLO,
//     })
//
//
//
//     return {
//         props: {
//             id: 1
//         },
//         revalidate: 10000000 //주기 몇초로 할거임 ?
//     }
// }