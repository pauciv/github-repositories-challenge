import styles from "../style"

const Home = () => {
  return (
    <section className={`pt-[110px] ${styles.paddingX}`}>
      <div className="flex flex-row justify-between items-center w-full pt-[20px]">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Find any{" "}
          <span className="text-gradient">GitHub</span>
          {" "}user,
        </h1>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        discover their{" "}
        <span className="text-gradient">Repos.</span>
      </h1>
    </section>
  )
}

export default Home