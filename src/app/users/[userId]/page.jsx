

const page = async ({ params }) => {
    const { userId } = await params;
    console.log(userId);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    return (
        <div>

            <h1 className="text-yellow-400 text-4xl">{user.name}</h1>
            <h1 className="font-bold">{user.email}</h1>

        </div>
    );
};

export default page;