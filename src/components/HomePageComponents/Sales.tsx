import SaleItem from "@components/ReuseableMaterials/SaleItem";

export default function Sales() {
  return (
    <section className="my-10 grid grid-cols-4 gap-4 lg:grid-cols-2">
      <SaleItem img="/assets/home/sale1.png" name="Greys Vage" hour="6" />
      <SaleItem img="/assets/home/sale1.png" name="Greys Vage" hour="6" />
      <SaleItem img="/assets/home/sale1.png" name="Greys Vage" hour="6" />
      <SaleItem img="/assets/home/sale1.png" name="Greys Vage" hour="6" />
    </section>
  );
}
