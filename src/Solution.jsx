function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

// function ProductTable({ products }) {
//   const rows = [];
//   let lastCategory = null;

//   products.forEach((product) => {
//     if (product.category !== lastCategory) {
//       rows.push(
//         <ProductCategoryRow
//           category={product.category}
//           key={product.category}
//         />
//       );
//     }
//     rows.push(<ProductRow product={product} key={product.name} />);
//     lastCategory = product.category;
//   });

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>{rows}</tbody>
//     </table>
//   );
// }

function ProductTable({ products }) {
  const categoryMap = new Map();

  products.forEach((product) => {
    if (!categoryMap.has(product.category)) {
      categoryMap.set(product.category, []);
    }

    categoryMap.get(product.category).push(product);
  });

  const rows = [];

  categoryMap.forEach((value, key) => {
    rows.push(<ProductCategoryRow category={key} key={key} />);

    value.forEach((product) => {
      rows.push(<ProductRow product={product} key={product.name} />);
    });
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },

  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function MyApp() {
  return <FilterableProductTable products={PRODUCTS} />;
}
