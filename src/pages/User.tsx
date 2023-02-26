import { useParams } from "react-router-dom";
import { UserInformation, UserRepositories } from "../components"
import styles from "../style";

const User = () => {
  const { username } = useParams()

  if (!username) {
    throw new Error('No username provided')
  }
    
  return (
    <>  
        <section className={`flex md:flex-row pt-[110px] ${styles.paddingX}`}>
          <div className={`sm:flex flex-1`}>
            <div className={`text-white mr-6`}>
              <UserInformation username={username} />
            </div>

            <div className="flex flex-col w-full">
              <UserRepositories username={username} />
            </div>
          </div>
        </section>

    </>
  )
}

export default User