import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api";
import { formatNumber } from "../utils";

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
      <div className="">
        <div className="flex sm:flex-col">
          <div>
            <img src={user?.avatar_url} alt={`${user?.name} avatar`} className="rounded-full sm:h-[100%] w-[100%] p-2" />
          </div>

          <div className="min-w-[65%] flex items-center m-2">
              <div className="w-full flex justify-around">
                <div className="ml-2 mr-2 flex flex-col items-center">
                  <p className="font-bold mr-1">{formatNumber(user?.repos)}</p>
                  <p className="text-gray-400 text-sm sm:text-[16px]">Repositories</p>
                </div>
                <div className="ml-2 mr-2 flex flex-col items-center">
                  <p className="font-bold mr-1">{formatNumber(user?.followers)}</p>
                  <p className="text-gray-400 text-sm sm:text-[16px]">Followers</p>
                </div>
                <div className="ml-2 mr-2 flex flex-col items-center">
                  <p className="font-bold mr-1">{formatNumber(user?.following)}</p>
                  <p className="text-gray-400 text-sm sm:text-[16px]">Following</p>
                </div>
              </div>
          </div>
        </div>

        <div className="p-2 sm:mt-2">
              <p className="text-lg font-bold">{user?.name}</p>
              <p>{user?.login}</p>
              <p className={`${user?.bio && 'mt-4'}`}>{user?.bio}</p>
        </div>
      </div>
    </>
  )
}

export default UserInformation
