import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getRepositoriesByUser, getUser } from "../api";
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