import Link from "next/link";

const users = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return (
        <div>
            {users.map(user =>
                <div key={user.id}>
                    <div className="aura aura-silver">
                        <div className="card bg-base-100">
                            <div className="card-body">
                                <p>{user.name}</p>
                            </div>
                        </div>
                        <Link href={`users/${user.id}`}><button className="btn btn-accent">Details</button></Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default users;