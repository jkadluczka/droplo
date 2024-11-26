export interface Link {
    name: string;
    url: string;
    subLinks: Link[]
}

export type Links = Link[]