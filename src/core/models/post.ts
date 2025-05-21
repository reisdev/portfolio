export default class Post {
    id!: number;
    canonical_url!: string;
    cover_image!: string;
    published_at!: string;
    description!: string;
    slug!: string;
    tag_list!: string[];
    title!: string;
    type_of!: string;
    url!: string;
    public_reactions_count!: number;

    get tags() {
        return this.tag_list.sort();
    }
}