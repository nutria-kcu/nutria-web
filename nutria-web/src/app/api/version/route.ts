// 예: app/api/version/route.ts
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const LATEST_VERSION = '1.0.0';

export async function POST(req: NextRequest) {
  // CORS 헤더 설정
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*'); // 모든 도메인 허용
  headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const body = await req.json();
    const version = body.version;

    const isLatest = version === LATEST_VERSION;

    return new NextResponse(
      JSON.stringify({
        isLatest,
        currentVersion: LATEST_VERSION,
        yourVersion: version,
        message: isLatest ? 'You are using the latest version.' : 'Update available.',
      }),
      { headers }
    );
  } catch {
    return new NextResponse(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers,
    });
  }
}

// OPTIONS 메서드 핸들링 (Preflight 요청 대응)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
