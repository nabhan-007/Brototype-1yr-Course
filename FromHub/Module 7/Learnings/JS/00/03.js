try {
  console.log(a);
  let a = 0;
} catch (error) {
  console.error("🛑 ", error);
} finally {
  let b = 1;
  console.log(Boolean(b));
  console.log(b ? "not zero" : "zero");
}
