import { useState } from "react";
import { Radio, RadioChangeEvent } from "antd"; // Import RadioChangeEvent
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import CheckboxGroup from "../../Molecules/CheckboxGroup";
import ProductName from "../../Molecules/ProductName";
import Avatar from "@/src/assets/icons/navbar/avatar.svg";

function AddPromoIncludedProducts() {
  const [radioValue, setRadioValue] = useState<number>(0);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const productOptions = [
    {
      label: <ProductName text="Product Name A" AvatarImage={Avatar} />,
      value: "productA",
    },
    {
      label: <ProductName text="Product Name B" AvatarImage={Avatar} />,
      value: "productB",
    },
    {
      label: <ProductName text="Product Name C" AvatarImage={Avatar} />,
      value: "productC",
    },
    {
      label: <ProductName text="Product Name D" AvatarImage={Avatar} />,
      value: "productD",
    },
  ];

  const handleRadioChange = (e: RadioChangeEvent) => {
    const { value } = e.target;
    setRadioValue(value);

    if (value === 1) {
      setSelectedProducts(productOptions.map((product) => product.value));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleCheckboxChange = (selected: string[]) => {
    setSelectedProducts(selected);

    if (selected.length === productOptions.length) {
      setRadioValue(1);
    } else {
      setRadioValue(2);
    }
  };

  return (
    <CardWrapper title="Included Products">
      <Radio.Group
        className={styles.radioGroup}
        value={radioValue}
        onChange={handleRadioChange}
      >
        <Radio value={1} className={styles.radioBtns}>
          All Products
        </Radio>
        <Radio value={2} className={styles.radioBtns}>
          Selected Products
        </Radio>
      </Radio.Group>

      <CheckboxGroup
        title="Products in Promo"
        options={productOptions}
        value={selectedProducts}
        onChange={handleCheckboxChange}
      />
    </CardWrapper>
  );
}

export default AddPromoIncludedProducts;
