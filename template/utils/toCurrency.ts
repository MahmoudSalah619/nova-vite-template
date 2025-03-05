import i18n from "@/i18n";

export default function toCurrency(price: number | null | undefined) {
  return price ? `${i18n.t("main")} ${price.toLocaleString()}` : "";
}
