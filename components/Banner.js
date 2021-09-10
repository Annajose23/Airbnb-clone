import Image from "next/image";

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:[500px] xl:[600px] 2xl:[700px]">
            <Image
            src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
            layout="fill"
            objectFit="cover"/>
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md
                 rounded-full font-bold my-3 hover:shadow-xl
                 active:scale-90 transistion-duration-150 ">I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner
