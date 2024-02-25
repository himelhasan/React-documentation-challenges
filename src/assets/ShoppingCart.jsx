import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    const updatedProduct = [...products];
    updatedProduct.map((product) => {
      if (product.id === productId) {
        [...products, { ...product, count: product.count++ }];
      } else {
        return products;
      }
    });
    setProducts(updatedProduct);

    // setProducts(
    //   products.map((product) => {
    //     if (product.id === productId) {
    //       return { ...product, count: product.count + 1 };
    //     } else {
    //       return product;
    //     }
    //   })
    // );
  }

  return (
    <>
      <h1>Shopping Cart</h1>
      <p>
        Fill in the handleIncreaseClick logic so that pressing ”+” increases the
        corresponding number:
      </p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} (<b>{product.count}</b>)
            <button
              onClick={() => {
                handleIncreaseClick(product.id);
              }}
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
