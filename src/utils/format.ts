export const formatPrice = (amount: number, currency = "PKR") =>
  `${currency} ${amount.toLocaleString("en-PK")}`;

export const formatPriceRange = (from: number, to: number, currency = "PKR") =>
  from === to ? formatPrice(from, currency) : `${formatPrice(from, currency)} – ${to.toLocaleString("en-PK")}`;

export const todayISO = () => new Date().toISOString().slice(0, 10);
