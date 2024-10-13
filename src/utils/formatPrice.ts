export function formatPrice(price: number) {
  return Number(price).toLocaleString("es-AR", {
    style: "currency",
    currency: "USD",
  });
}
