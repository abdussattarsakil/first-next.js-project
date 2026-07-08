import Image from "next/image";

const page = () => {
    return (
        <div>
            <h1>this is about page</h1>
           <Image src="/next.svg" alt="next.js logo image" width="300" height="300"></Image>
        </div>
    );
};

export default page;