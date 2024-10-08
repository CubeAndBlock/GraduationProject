import Banner from "@/components/Banner";
import Collections from "@/components/Collections";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductsList";
import { Separator } from "@/components/Separator";


export default function Home() {
  return (
    <>
      <Banner />
      <Collections />
      <Separator className="bg-grey-1 my-5" />
      <ProductList />
      <Footer />
    </>
  );
}

export const dynamic = "force-dynamic";