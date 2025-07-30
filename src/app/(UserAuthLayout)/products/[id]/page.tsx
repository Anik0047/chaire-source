import ProductDetails from "@/components/user/shared/ProductDetails";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);

  // const { page = 1, limit = 10 } = await searchParams

  return (
    <div className="container mx-auto max-w-[1190px] px-5 py-4 lg:py-12 xl:px-0 2xl:max-w-[1440px]">
      <ProductDetails id={id} />
    </div>
  );
}
