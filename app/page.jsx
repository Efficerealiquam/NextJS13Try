import Feed from '@components/Feed'

const page = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text_center" >
                Discover & Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text_center">AI-Powered Prompts</span>
            </h1>
            <p className="desc text-center">
               Lorem ipsum, dolor sit amet consectetur 
               adipisicing elit. Voluptatum iste ab placeat 
               vitae, laborum, dicta nemo voluptatibus quisquam
            </p>
        <Feed/>
        </section>
    )
}

export default page