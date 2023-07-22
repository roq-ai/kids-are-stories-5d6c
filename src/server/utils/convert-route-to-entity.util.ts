const mapping: Record<string, string> = {
  bookmarks: 'bookmark',
  organizations: 'organization',
  reviews: 'review',
  stories: 'story',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
