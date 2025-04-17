'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import './globals.css';

export default function Home() {
  const [os, setOS] = useState<'windows' | 'mac' | 'unknown'>('unknown');

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) setOS('windows');
    else if (userAgent.includes('mac')) setOS('mac');
    else setOS('unknown');
  }, []);

  const iconSrc = os === 'windows' ? '/windows.svg' : os === 'mac' ? '/apple.svg' : '';
  const osName = os === 'windows' ? 'Windows' : os === 'mac' ? 'MacOS' : 'Unknown OS';

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold">🔫 CubeHack</div>
        <nav className="space-x-6 text-sm text-zinc-400">
          <a href="#features" className="hover:text-white">기능</a>
          <a href="#download" className="hover:text-white">다운로드</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
      </header>

      <main className="flex flex-col items-center text-center px-6 py-24 bg-gradient-to-b from-black via-zinc-900 to-black">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          Smarter Gameplay.<br />
          Built-In Hack.<br />
          <span className="text-purple-500">Better Cube Domination.</span>
        </h1>

        <p className="text-zinc-400 mb-10 text-lg max-w-2xl">
          Assault Cube 전용 핵으로 당신의 게임을 한 차원 높이세요. 에임봇, 월핵, 자동사격, 실시간 UI 포함.
        </p>

        <a
          id="download"
          href="/ac-hack-v1.2.zip"
          download
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-xl text-lg shadow-lg transition duration-300 flex items-center gap-2"
        >
          {iconSrc && (
            <Image src={iconSrc} alt={`${osName} Icon`} width={24} height={24} />
          )}
          무료 다운로드 (v1.2)
        </a>

        <p className="text-sm text-zinc-500 mt-4">지원 OS: Windows, MacOS</p>

        <Image
          src="/screenshot.png"
          alt="hack preview"
          width={800}
          height={400}
          className="mt-16 rounded-2xl shadow-2xl border border-zinc-800"
        />
      </main>

      <section id="features" className="bg-zinc-900 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">🛠️ 주요 기능</h2>
        <div className="text-zinc-300 max-w-2xl mx-auto text-sm space-y-2">
          <p>🎯 에임봇 - 자동 조준</p>
          <p>🧱 월핵 - 벽 너머 적 감지</p>
          <p>🔫 자동 발사 - 반응 속도 향상</p>
          <p>💻 UI 오버레이 - 실시간 핵 조정</p>
        </div>
      </section>

      <footer className="text-zinc-500 text-xs text-center py-8">
        © 2025 KCU-Nutria Team. 저작권 위반하면 얄짤없다 새끼들아ㅋ
      </footer>
    </div>
  );
}