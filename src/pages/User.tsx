import { useParams } from "react-router-dom";
import { UserInformation, UserRepositories } from "../components"

const User = () => {
  const { username } = useParams()

  if (!username) {
    throw new Error('No username provided')
  }
    
  return (
    <>  
        <h1>User Page</h1>
        <UserInformation username={username} />
        <UserRepositories username={username} />
    </>
  )
}

export default User