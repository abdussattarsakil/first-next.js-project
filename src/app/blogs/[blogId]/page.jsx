
const page = async({params}) => {
    const res=await params;
    console.log("show me params",res);
    return (
        <div>
            <h1 className="text-4xl text-orange-300">Blog details coming soon</h1>
        </div>
    );
};

export default page;