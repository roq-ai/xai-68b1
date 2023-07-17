const mapping: Record<string, string> = {
  appointments: 'appointment',
  doctors: 'doctor',
  medicines: 'medicine',
  organizations: 'organization',
  services: 'service',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
