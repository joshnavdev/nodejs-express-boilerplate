const publicRoutes = ['/api/publicEndpoint'];
const protectedRoutes = [
  '/api/protectedEndpoint',
  '/api/protectedEndpoint/:hola',
  '/api/protectedEndpoint/:hola/algo/:chao',
];
const mixedRoutes = ['/api/mixedEndpoint'];

export { publicRoutes, protectedRoutes, mixedRoutes };
