import React from "react";
import { VirtuosoGrid } from "react-virtuoso";
import { ProductCard } from "../productCard/ProductCard";
import styles from "./product-grid.module.scss";

export const ProductGrid = ({ products }) => {
  return (
    <main className={styles.container}>
      <VirtuosoGrid
        totalCount={products.length}
        overscan={200}
        useWindowScroll={true}
        style={{ height: "auto" }}
        listClassName={styles.grid}
        itemClassName={styles.gridItem}
        itemContent={(index) => (
          <div
            className={styles.item}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <ProductCard product={products[index]} />
          </div>
        )}
        components={{
          List: React.forwardRef(({ style, children }, ref) => (
            <div
              ref={ref}
              style={{
                ...style,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "16px",
              }}
              className={styles.gridInner}
            >
              {children}
            </div>
          )),
        }}
      />
    </main>
  );
};
