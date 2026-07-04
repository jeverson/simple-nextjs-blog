import { posts } from "@/app/lib/placeholder-data"
import Post from "@/app/ui/components/posts/Post"
import Link from "next/link";

export default function Page () {
    return (
        <>
            <h1 className="text-4xl text-purple-700 font-bold mb-4">Posts</h1>

            { posts.map((post) => (
                <Post key={post.id} {...post} />
            ))}            
        </>
    );
}