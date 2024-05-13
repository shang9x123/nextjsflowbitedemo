
"use client";

import { Pagination } from "flowbite-react";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation'
import { useState } from "react";

interface ComPaginationProps {
    page: number;
    totalPages: number;
}

export function ComPagination({ page, totalPages }: ComPaginationProps) {
    const router = useRouter();

    const currentUrl = router; // Gets the current URL

    // Now you can use the currentUrl variable as needed
    console.log('Current URL:', router);

    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page: number) => {
        setCurrentPage(page);
        console.log(page);
        router.push(currentUrl + '/?page=' + page);
    };

    return (
        <div className="flex justify-center items-center">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} nextLabel="Sau" previousLabel="Trước" />
        </div>
    );
}
