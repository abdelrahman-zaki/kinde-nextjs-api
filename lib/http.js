export function json(data, init = {}) {
    const status = init.status ?? 200;
    const headers = new Headers(init.headers ?? {});
    if (!headers.has('content-type')) {
      headers.set('content-type', 'application/json; charset=utf-8');
    }
    return new Response(JSON.stringify(data), { status, headers });
}

export function badRequest(message = 'Bad Request', details) {
    return json({ error: message, ...(details ? { details } : {}) }, { status: 400 });
}

export function methodNotAllowed(allowed = ['POST']) {
    return json({ error: 'Method Not Allowed', allowed }, { status: 405, headers: { allow: allowed.join(', ') } });
}
  