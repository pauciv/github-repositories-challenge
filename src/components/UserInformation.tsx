import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api";

type UserInformationProps = {
  username: string
}

const UserInformation = ({ username }: UserInformationProps) => {

  const { data: user, status, error } = useQuery({
    queryKey: ['user', username],
    queryFn: () => getUser(username),
    enabled: !!username,
  })

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'error') {
    return <p>{JSON.stringify(error)}</p>
  }

  return (
    <>
      <div>UserInfo</div>
      {user && <p>{user.name}</p>}
    </>
  )
}

export default UserInformation