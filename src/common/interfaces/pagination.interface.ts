export interface IPagination {
    pageSize?: number;
    pageNumber?: number;
    total?: number;
    orderBy?: string;
    order?: 'ASC' | 'DESC';
}
