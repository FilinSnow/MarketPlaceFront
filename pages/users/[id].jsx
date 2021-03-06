import { useRouter } from "next/dist/client/router"
import MainContainer from "../../components/MainContainer";



export default function ({user}) {

    return (
        <MainContainer>
            user {user.name}
        </MainContainer>
    )

}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return {
        props: { user }, // will be passed to the page component as props
    }
}