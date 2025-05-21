import Post from "@core/models/post";

export default class DEVService {
    static baseURL = new URL("https://dev.to/api/");

    static async getArticles(username: string, itemsPerPage: number = 8): Promise<Post[]> {
        let search = new URLSearchParams({ username, per_page: itemsPerPage.toString()});

        let url = new URL("articles", DEVService.baseURL);
        url.search = search.toString();

        let response = await fetch(url);

        return await response.json() as Post[];
    }
}