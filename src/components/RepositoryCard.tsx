import { formatUpdatedAt, truncateString } from "../utils"
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai"
import { Repository } from "../interfaces"

const RepositoryCard = ({ name, description, language, forksCount, stargazersCount, updatedAt, htmlUrl }: Repository) => {
  return (
    <a href={htmlUrl} target="_blank" rel="noreferrer">
      <div className={`flex flex-row p-4 rounded-[20px] mb-3 feature-card border-b border-slate-800 w-full`}>
        <div className="flex-1 flex flex-col ml-3">
          <p className="font-bold text-gradient sm:text-[20px] leading-[23.4px] pb-1">
            {truncateString(name, 30)}
          </p>
          <p className="font-normal text-dimWhite text-[14px] sm:text-[16px] leading-[24px]">
            {description}
          </p>
          <div className="flex text-dimWhite items-center">
            {language && <p className="mr-3">{language}</p>}
            {updatedAt && <p>{formatUpdatedAt(updatedAt)}</p>}
            {forksCount > 0 && <p className="flex items-center ml-4"><AiOutlineFork className="mr-[2px]" /> {forksCount}</p>}
            {stargazersCount > 0 && <p className="flex items-center ml-4"><AiOutlineStar className="mr-[2px]" /> {stargazersCount}</p>}
          </div>
        </div>
      </div>
    </a>
  )
}

export default RepositoryCard