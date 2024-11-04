// const blogs = [
//     {
//         id: 1,
//         title: "Blog 1",
//         content: "Content 1",
//         image: "/CardImg.png"
//     },
//     {
//         id: 2,
//         title: "Blog 2",
//         content: "Content 2",
//         image: "https://via.placeholder.com/150"
//     },
//     {
//         id: 3,
//         title: "Blog 3",
//         content: "Content 3",
//         image: "https://via.placeholder.com/150"
//     }
// ]

const blogs = [
    {
        id: 1,
        logo: "/Profilelogo.png",
        image: "/CardImg.png",
        title: "Blog 1",
        description: "Description of Blog 1",
        date: new Date("2024-11-01T10:00:00Z"),
        likes: 10,
        comments: [
            {
                user: "User1",
                comment: "Great post!",
                date: new Date("2024-11-01T11:00:00Z")
            },
            {
                user: "User2",
                comment: "Very informative.",
                date: new Date("2024-11-01T12:00:00Z")
            }
        ],
        author: "Author 1",
        category: "Category 1"
    },
    {
        id: 2,
        logo: "/Profilelogo.png",
        image: "/CardImg.png",
        title: "Blog 2",
        description: "Description of Blog 2",
        date: new Date("2024-11-02T10:00:00Z"),
        likes: 5,
        comments: [
            {
                user: "User3",
                comment: "Thanks for sharing!",
                date: new Date("2024-11-02T11:00:00Z")
            }
        ],
        author: "Author 2",
        category: "Category 2"
    },
    {
        id: 3,
        logo: "/Profilelogo.png",
        image: "/CardImg.png",
        title: "Blog 3",
        description: "Description of Blog 3",
        date: new Date("2024-11-03T10:00:00Z"),
        likes: 8,
        comments: [],
        author: "Author 3",
        category: "Category 3"
    }
];


export default blogs;