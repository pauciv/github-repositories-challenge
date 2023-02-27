import { formatUpdatedAt, truncateString } from "../utils"
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai"
import { Repository } from "../interfaces"

const RepositoryCard = ({ name, description, language, forks_count, stargazers_count, updated_at, html_url }: Repository) => {
  return (
    <a href={html_url} target="_blank" rel="noreferrer">
      <div className={`flex flex-row p-4 rounded-[20px] mb-3 feature-card border-b border-slate-800 w-full`}>
        <div className="flex-1 flex flex-col ml-3">
          <p className="font-bold text-secondary text-[18px] sm:text-[20px] leading-[23.4px] pb-1">
            {truncateString(name, 30)}
          </p>
          <p className="font-normal text-dimWhite text-[14px] sm:text-[16px] leading-[24px]">
            {description}
          </p>
          <div className="flex text-dimWhite items-center">
            {language && <p className="mr-3">{language}</p>}
            {updated_at && <p>{formatUpdatedAt(updated_at)}</p>}
            {forks_count > 0 && <p className="flex items-center ml-4"><AiOutlineFork className="mr-[2px]" /> {forks_count}</p>}
            {stargazers_count > 0 && <p className="flex items-center ml-4"><AiOutlineStar className="mr-[2px]" /> {stargazers_count}</p>}
          </div>
        </div>
      </div>
    </a>
  )
}

export default RepositoryCard