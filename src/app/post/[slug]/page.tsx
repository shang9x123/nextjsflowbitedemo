import { ComPagination } from '@/component/Pagination';
import { GetServerSideProps } from 'next';
import { useParams } from 'next/navigation';
import React from 'react'

async function getdata(slug: string) {
    let data = await fetch('https://dummyjson.com/products')
    return data.json();
}
const PostslugPage = async ({ params }: { params: { slug: string } }) => {
    const data = await getdata(params.slug);
    return (
        <>
            <div>PostslugPage </div>
            {data.products.map((post: any, index: number) => (
                <div key={index}>
                    <h3>{post.title}</h3>
                </div>
            ))}

            <ComPagination page={2} totalPages={100} />
        </>
    )
}
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const data = await getdata(params.slug);
    return {
        title: 'xin chào',

    }
}

export default PostslugPage;