export const runtime = 'nodejs'; // ensure Node runtime for fetch

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      return new Response('Missing Google Script URL', { status: 500 });
    }

    const r = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const text = await r.text();

    return new Response(text, {
      status: r.status,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    return new Response(err.message ?? 'Server error', { status: 500 });
  }
} 