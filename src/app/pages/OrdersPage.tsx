import { NavBarThree } from "@/components/Global/UI";
import { Footer, ShoppingCart } from "@/components/Pages";

const OrdersPage = () => {
  return (
    <>
      <NavBarThree />
      <main className="min-h-screen pt-20">
        <ShoppingCart />
      </main>
      <Footer bgStyle="bg-[url('../media/images/footer.png')] bg-no-repeat bg-cover" />
    </>
  );
};

export default OrdersPage;
