import { json, badRequest, methodNotAllowed } from '@/lib/http';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return badRequest('Invalid JSON body');
  }

  if (!body || typeof body.email !== 'string') {
    return badRequest('`email` is required');
  }

  return json({
    email_verified: false,
    name: 'Abdelrahman Zaki'
  });
}

export async function GET() {
  return methodNotAllowed(['POST']);
}
