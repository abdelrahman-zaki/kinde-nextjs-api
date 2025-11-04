import { json, badRequest, methodNotAllowed } from '@/lib/http';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return badRequest('Invalid JSON body');
  }

  if (!body || typeof body.email !== 'string') {
    return badRequest('`email` is required');
  }

  const email = body.email.trim().toLowerCase();
  const isKindeEmail = email.endsWith('@kinde.com');

  return json({
    email_verified: isKindeEmail,
    name: 'Abdelrahman Zaki',
  });
}

export async function GET() {
  return methodNotAllowed(['POST']);
}
