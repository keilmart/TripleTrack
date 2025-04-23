// Fetch data from Google Sheets
export async function getGoogleSheetData() {
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbxuT9_j6fqKHtmh4ZrCVNvqVjp6fwHG9PXovBB4G-BVTQk_eC8fvA7tE9X-RFcj9EwBag/exec";

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
