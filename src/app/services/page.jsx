import Link from "next/link";

const servicesData = [
    {
        "id": 1,
        "title": "Web Development",
        "category": "Development",
        "description": "Build responsive and modern websites using the latest web technologies.",
        "price": 500,
        "duration": "7 Days",
        "rating": 4.9,
        "image": "https://i.ibb.co/6R0Y6mK/web-development.jpg"
    },
    {
        "id": 2,
        "title": "UI/UX Design",
        "category": "Design",
        "description": "Create attractive and user-friendly interface designs for web and mobile apps.",
        "price": 350,
        "duration": "5 Days",
        "rating": 4.8,
        "image": "https://i.ibb.co/7kFQz8H/ui-ux.jpg"
    },
    {
        "id": 3,
        "title": "Mobile App Development",
        "category": "Development",
        "description": "Develop high-performance Android and iOS applications.",
        "price": 800,
        "duration": "14 Days",
        "rating": 4.9,
        "image": "https://i.ibb.co/qR5r8ZT/mobile-app.jpg"
    },
    {
        "id": 4,
        "title": "SEO Optimization",
        "category": "Marketing",
        "description": "Improve your website ranking on search engines with SEO best practices.",
        "price": 250,
        "duration": "3 Days",
        "rating": 4.7,
        "image": "https://i.ibb.co/z4q5r3B/seo.jpg"
    },
    {
        "id": 5,
        "title": "Graphic Design",
        "category": "Design",
        "description": "Design professional logos, banners, social media posts, and branding materials.",
        "price": 200,
        "duration": "2 Days",
        "rating": 4.8,
        "image": "https://i.ibb.co/MV7Hf6x/graphic-design.jpg"
    },
    {
        "id": 6,
        "title": "Content Writing",
        "category": "Writing",
        "description": "Write SEO-friendly blogs, articles, and website content.",
        "price": 150,
        "duration": "2 Days",
        "rating": 4.6,
        "image": "https://i.ibb.co/Bs8H8Zk/content-writing.jpg"
    },
    {
        "id": 7,
        "title": "Digital Marketing",
        "category": "Marketing",
        "description": "Grow your business through social media and online marketing campaigns.",
        "price": 450,
        "duration": "6 Days",
        "rating": 4.8,
        "image": "https://i.ibb.co/x6M2mRL/digital-marketing.jpg"
    },
    {
        "id": 8,
        "title": "WordPress Development",
        "category": "Development",
        "description": "Create custom WordPress websites with premium themes and plugins.",
        "price": 400,
        "duration": "5 Days",
        "rating": 4.7,
        "image": "https://i.ibb.co/RPNd2m8/wordpress.jpg"
    },
    {
        "id": 9,
        "title": "Video Editing",
        "category": "Media",
        "description": "Professional video editing for YouTube, Facebook, and promotional content.",
        "price": 300,
        "duration": "4 Days",
        "rating": 4.8,
        "image": "https://i.ibb.co/JvQ7Pqg/video-editing.jpg"
    },
    {
        "id": 10,
        "title": "Cloud Hosting Setup",
        "category": "Cloud",
        "description": "Deploy and manage websites on secure cloud hosting platforms.",
        "price": 600,
        "duration": "3 Days",
        "rating": 4.9,
        "image": "https://i.ibb.co/qxvZ3JY/cloud-hosting.jpg"
    }
]

const servicesPage = () => {
    return (
        <div className="grid grid-cols-3">
        {servicesData.map(serviceData=>
        <div className="border border-dashed m-10 p-4 text-center" key={serviceData.id}>
            <h1>Category :- {serviceData.category}</h1>
            <h1>service name :- {serviceData.title}</h1>
            <h1>Rating :- {serviceData.rating}</h1>
            <h1>Price :- {serviceData.price}</h1>
            <button className="btn btn-info">
                <Link href={`/services/${serviceData.id}`}>{serviceData.title} service details</Link>
            </button>
        </div>)}
        </div>
    );
};

export default servicesPage;