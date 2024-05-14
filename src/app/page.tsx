import { MyAccor } from "@/component/Myaccor";
import Mynavbar from "@/component/Mynavbar";
import { ComPagination } from "@/component/Pagination";
import Image from "next/image";

const Home = () => {

  return (
    <main className="container mx-auto pt-3 min-h-full gap-3">
      <Mynavbar />
      <MyAccor />
    </main>
  );
}
export default Home