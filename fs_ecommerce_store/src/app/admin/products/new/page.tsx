import React from "react";
import { PageHeader } from "../../_components/PageHeader";
import ProductForm from "../_components/ProductForm";

export default function NewPageProduct() {
  return (
    <>
      <PageHeader>Add Product</PageHeader>
      <ProductForm />
    </>
  );
}