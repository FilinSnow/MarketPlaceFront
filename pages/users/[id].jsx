import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react";
import MainContainer from "../../components/MainContainer";


export default function ({ user: serverUser }) {
  const [user, setUser] = useState(serverUser);
  const router = useRouter();
  useEffect(() => {
    async function load() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${serverUser.id}`);
      const user = await response.json();
      setUser(user);
    }
    if (!serverUser) {
      load();
    }

  }, [])

  if (!user) {
    return (<MainContainer>
      <p>Loading...</p>
    </MainContainer>)
  }

  return (
    <MainContainer>
      user {user.name}
    </MainContainer>
  )

}

export async function getStaticPaths() {

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const posts = await res.json()
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))


  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await res.json()

  return { props: { user } }
}
