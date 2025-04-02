import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Create a route matcher for public routes (e.g., sign-in, sign-up, and the homepage)
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/']);

export default clerkMiddleware((auth, req) => {
  // Protect non-public routes
  if (!isPublicRoute(req)) {
    auth().protect(); 
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
