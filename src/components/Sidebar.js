async function fetchInventory() {
  const response = await fetch("../../inventorySample.json");

  let data = await response.json();

  return data;
}

export default fetchInventory;
