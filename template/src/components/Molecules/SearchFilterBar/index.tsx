import { useSearchParams } from "react-router-dom";
import { ChangeEvent } from "react";
import styles from "./styles.module.scss";
import SearchIcon from "@/src/assets/icons/home/search-orange-icon.svg";
import SelectionInput from "../../Atoms/SelectionInput";
import TextInput from "../../Atoms/TextInput";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

function SearchFilterBar() {
  const { t } = useAutoCompleteTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const dummyOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("search", e.target.value);
      return newParams;
    });
  };

  const handleCategoryChange = (value: string) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("category", value);
      return newParams;
    });
  };

  const handleDateCreatedChange = (value: string) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("dateCreated", value);
      return newParams;
    });
  };

  const handleDatePublishedChange = (value: string) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("datePublished", value);
      return newParams;
    });
  };

  return (
    <section className={styles.container}>
      <TextInput
        inputStyle={styles.searchInput}
        prefixIcon={SearchIcon}
        placeholder={t("Search")}
        onChange={handleSearchChange}
        value={searchParams.get("search") || ""}
      />

      <SelectionInput
        containerStyle={styles.selectionContainerInput}
        options={dummyOptions}
        placeholder={t("category_column")}
        onChange={handleCategoryChange}
        value={searchParams.get("category")}
      />
      <SelectionInput
        containerStyle={styles.selectionContainerInput}
        options={dummyOptions}
        placeholder={t("Date Created")}
        onChange={handleDateCreatedChange}
        value={searchParams.get("dateCreated")}
      />
      <SelectionInput
        containerStyle={styles.selectionContainerInput}
        options={dummyOptions}
        placeholder={t("Date Published")}
        onChange={handleDatePublishedChange}
        value={searchParams.get("datePublished")}
      />
    </section>
  );
}

export default SearchFilterBar;
