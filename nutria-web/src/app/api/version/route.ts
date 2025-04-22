import { NextResponse } from 'next/server';

const LATEST_VERSION = '1.0.0'; // 🔧 Set your current app version here

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const clientVersion = body.version;

    if (!clientVersion) {
      return NextResponse.json({ error: 'Missing version in request body' }, { status: 400 });
    }

    const isLatest = clientVersion === LATEST_VERSION;

    return NextResponse.json({
      isLatest,
      currentVersion: LATEST_VERSION,
      yourVersion: clientVersion,
      message: isLatest ? 'You are using the latest version.' : 'Update available.',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON or request format' }, { status: 400 });
  }
}
