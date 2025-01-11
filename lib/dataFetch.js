// Fetch data from Google Sheets
export async function getGoogleSheetData() {
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycby1iUCs9AAGoja7fxQf_8sj7NBKQ5Y_p-yaZVaF4cbIzVTVgq6PPVYKVa7J481qBWZPsA/exec";

  try {
    const response = await fetch(scriptUrl);
    if (!response.ok) {
      throw new Error(`Error fetching Google Sheet data: ${response.statusText}`);
    }

    const data = await response.json();
    return data; // Return the fetched JSON data
  } catch (error) {
    console.error("Error fetching Google Sheet data:", error);
    return [];
  }
}
