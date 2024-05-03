const API_BASE_URL = "http://127.0.0.1:8000/api";

async function fetchData<T>(endpoint: string): Promise<T> {
	try {
		const response = await fetch(`${API_BASE_URL}${endpoint}`, {
			cache: "no-store",
		});
		if (!response.ok) {
			throw new Error(`API call failed with status: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		if (error instanceof Error) {
			console.error("Fetching error:", error.message);
			throw error;
		}
		throw new Error("An unknown error occurred");
	}
}

export const getBooks = () =>
	fetchData<{ title: string; author: string; owlId: string }[]>("/books");
export const getBooksByAuthor = (authorStartsWith: string) =>
	fetchData<{ title: string; author: string; owlId: string }[]>(
		`/books?author=${authorStartsWith}`
	);
export const borrowBook = (owlId: string) =>
	fetchData<{ message: string }>(`/borrow?owlId=${owlId}`);
export const returnBook = (owlId: string) =>
	fetchData<{ message: string }>(`/return?owlId=${owlId}`);
