import { ComPagination } from '@/component/Pagination';
import { GetServerSideProps } from 'next';
import React from 'react'

async function getdata(slug: string) {
    let data = await fetch('https://dummyjson.com/products')
    return data.json();
}
const PostslugPage = async ({ params }: { params: { slug: string } }) => {
    const data = await getdata(params.slug);
    console.log(data.total)
    return (
        <>
            <div>PostslugPage </div>
            <ComPagination page={2} totalPages={100} />
        </>
    )
}

export default PostslugPage;