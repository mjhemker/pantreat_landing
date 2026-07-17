import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Share-link proxy + trailing-slash policy.
//
// The app generates share links as `/r/{token}` and `/p/{id}` with NO trailing
// slash, and Apple Universal Links do NOT follow 3xx redirects — so these must
// return 200 directly. Next's `trailingSlash: true` would otherwise 308
// `/r/{token}` -> `/r/{token}/` before any rewrite runs, breaking both the
// in-app open and the rich preview. We set `skipTrailingSlashRedirect: true`
// in next.config so this middleware runs first, then:
//   1. rewrite `/r/*` and `/p/*` to the Supabase edge function (200, no redirect)
//   2. re-issue the trailing-slash redirect for every other page, preserving
//      the site's existing `trailingSlash: true` behavior.
//
// The matcher excludes `/_next`, `/api`, `/.well-known` (the AASA file must NOT
// be redirected to a trailing slash), and any path with a file extension
// (static assets like the OG image), so those are served untouched.
const EDGE_BASE = "https://api.getpantreat.com/functions/v1/recipe-share";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const recipe = pathname.match(/^\/r\/([^/]+)\/?$/);
  if (recipe) {
    return NextResponse.rewrite(`${EDGE_BASE}/${recipe[1]}`);
  }

  const post = pathname.match(/^\/p\/([^/]+)\/?$/);
  if (post) {
    return NextResponse.rewrite(`${EDGE_BASE}/p/${post[1]}`);
  }

  // Reproduce Next's built-in trailing-slash redirect (disabled globally above).
  if (!pathname.endsWith("/")) {
    const url = req.nextUrl.clone();
    url.pathname = `${pathname}/`;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next internals, API routes, the AASA file, and any file with an
  // extension. Everything else (pages + `/r`,`/p`) flows through middleware.
  matcher: ["/((?!api/|_next/|\\.well-known/|.*\\..*).*)"],
};
