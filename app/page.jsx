import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="blue_gradient head_text text-center">
            Discover & Share     
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> AI-Powered Prompts</span>
            <p className="desc text-center">
                Promptedia is an open-source AI Powered tool for modern world to discover and share creative prompts.
            </p>
        </h1>

        <Feed />
    </section>
  )
}

export default Home