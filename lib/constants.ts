export type SortKey = 'name' | 'lastUpdated' | 'price';

export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: SortKey;
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Nome',
  slug: null,
  sortKey: 'name',
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Últimos chegados', slug: 'latest-desc', sortKey: 'lastUpdated', reverse: true },
  { title: 'Preço: Menor para maior', slug: 'price-asc', sortKey: 'price', reverse: false }, // asc
  { title: 'Preço: Maior para menor', slug: 'price-desc', sortKey: 'price', reverse: true }
];

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
export const WIX_SESSION_COOKIE = 'wix-session';
