import Link from "next/link";

const page = () => {

    const blogs = [
        {
            "id": 1,
            "name": "Aiden Markram",
            "picture": "https://i.pravatar.cc/400?img=54",
            "email": "aiden.markram@example.com",
            "days_since_contact": 9,
            "status": "almost due",
            "tags": ["colleague"],
            "bio": "Met during a collaborative project.",
            "goal": 9,
            "next_due_date": "Jul 20, 2025"
        },
        {
            "id": 2,
            "name": "Pat Cummins",
            "picture": "https://i.pravatar.cc/400?img=11",
            "email": "pat.cummins@example.com",
            "days_since_contact": 5,
            "status": "on-track",
            "tags": ["mentor"],
            "bio": "Guided me in career growth.",
            "goal": 10,
            "next_due_date": "Jul 18, 2025"
        },
        {
            "id": 3,
            "name": "Mustafizur Rahman",
            "picture": "https://i.pravatar.cc/400?img=12",
            "email": "mustafizur.rahman@example.com",
            "days_since_contact": 15,
            "status": "overdue",
            "tags": ["friend", "school"],
            "bio": "Friend from school days.",
            "goal": 10,
            "next_due_date": "Jul 15, 2025"
        },
        {
            "id": 4,
            "name": "Quinton de Kock",
            "picture": "https://i.pravatar.cc/400?img=13",
            "email": "quinton.kock@example.com",
            "days_since_contact": 7,
            "status": "almost due",
            "tags": ["friend"],
            "bio": "Workout partner from gym.",
            "goal": 8,
            "next_due_date": "Jul 19, 2025"
        },
        {
            "id": 5,
            "name": "David Warner",
            "picture": "https://i.pravatar.cc/400?img=14",
            "email": "david.warner@example.com",
            "days_since_contact": 11,
            "status": "overdue",
            "tags": ["friend", "college"],
            "bio": "Best friend from university.",
            "goal": 9,
            "next_due_date": "Jul 17, 2025"
        },
        {
            "id": 6,
            "name": "Shakib Al Hasan",
            "picture": "https://i.pravatar.cc/400?img=15",
            "email": "shakib.hasan@example.com",
            "days_since_contact": 6,
            "status": "on-track",
            "tags": ["family"],
            "bio": "Close cousin, meet often.",
            "goal": 10,
            "next_due_date": "Jul 18, 2025"
        },
        {
            "id": 7,
            "name": "Jason Holder",
            "picture": "https://i.pravatar.cc/400?img=55",
            "email": "jason.holder@example.com",
            "days_since_contact": 13,
            "status": "overdue",
            "tags": ["partner"],
            "bio": "Business partner and collaborator.",
            "goal": 9,
            "next_due_date": "Jul 16, 2025"
        },
    ]

    return (
        <div>
            <h1 className="font-bold text-3xl text-center">Blogs</h1>

            {blogs.map(blog => <div key={blog.id}>
                <div className="border-2 border-solid m-2">
                    <h1>{blog.name}</h1>
                    <h1>{blog.bio}</h1>
                    <button className="btn btn-success">
                        <Link href={`/blogs/${blog.id}`}>{blog.id} - blog details...</Link>
                    </button>
                </div>
            </div>)}
        </div>
    );
};

export default page;