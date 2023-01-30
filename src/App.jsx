import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function showModal() {
    setIsModalOpen(true);
  }

  function hideModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      {isModalOpen && <Cart onClose={hideModal} />}
      <Header onShowCart={showModal} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
