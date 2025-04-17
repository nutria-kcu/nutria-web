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
        <div className="text-2xl font-bold">🎮 Nutria HACK</div>
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
          <span className="text-purple-500">NUTRIA IS BETTER THAN DOWON</span>
        </h1>

        <p className="text-zinc-400 mb-10 text-lg max-w-2xl">
          Valorant Radiant Dowon APPROVED
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
        <div className='py-8'>

        </div>
        <section className="mt-16 w-full mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">⭐ User Reviews</h3>

          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {[
              {
                id: 'Sahur',
                rating: 4,
                text: '퉁 퉁 퉁 퉁 퉁 퉁 퉁 퉁 퉁 사후르',
              },
              {
                id: '라디언트도원',
                rating: 5,
                text: '맙소사, 이와 같은 핵은 어디서 만들어진 것입니까? 혹여 가보로 내려옵니까? 나의 공중제비를 멈추게 하십시오!',
              },
              {
                id: 'Tralalero Tralala',
                rating: 3,
                text: 'Trallallero Trallalla, porco dio',
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="min-w-[300px] bg-zinc-800 rounded-2xl p-6 shadow-2xl border border-zinc-700 text-left flex-shrink-0"
              >
                <p className="text-sm text-purple-400 font-semibold mb-2">@{review.id}</p>

                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={i < review.rating ? 'currentColor' : 'none'}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-zinc-600'}`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.075 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"
                      />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-zinc-400">{review.rating}.0 / 5.0</span>
                </div>

                <p className="text-zinc-300 text-sm">{review.text}</p>
              </div>
            ))}
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {[
              {
                id: '모듬초밥',
                rating: 1,
                text: '이 핵을 썼다 식중독에 걸렸습니다 여러분들도 조심하세요',
              },
              {
                id: '실딱Adelia',
                rating: 4,
                text: '만년 브딱이인 제가 처음으로 실버 문턱을 밟아보았네요',
              },
              {
                id: '안나리',
                rating: 3,
                text: '메르시용은 없나요',
              },
              {
                id: 'lorem',
                rating: 4,
                text: 'Lorem ipsum dolor sit amet, consectetur adid est laborum.',
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="min-w-[300px] bg-zinc-800 rounded-2xl p-6 shadow-2xl border border-zinc-700 text-left flex-shrink-0"
              >
                <p className="text-sm text-purple-400 font-semibold mb-2">@{review.id}</p>

                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={i < review.rating ? 'currentColor' : 'none'}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-zinc-600'}`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.075 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"
                      />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-zinc-400">{review.rating}.0 / 5.0</span>
                </div>

                <p className="text-zinc-300 text-sm">{review.text}</p>
              </div>
            ))}
          </div>
        </section>
        <div className='py-16'>

        </div>
        <section id="features" className="w-full bg-zinc-900 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-6">🛠️ 주요 기능</h2>
          <div className="text-zinc-300 max-w-2xl mx-auto text-sm space-y-2">
            <p>🎯 에임봇 - 자동 조준</p>
            <p>🧱 월핵 - 벽 너머 적 감지</p>
            <p>🔫 자동 발사 - 반응 속도 향상</p>
            <p>💻 UI 오버레이 - 실시간 핵 조정</p>
          </div>
        </section>



        <section className="w-full bg-zinc-950 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-6 text-white">🔓 오픈소스</h2>
          <p className="text-zinc-400 mb-6 text-sm">
            Nutria Hack은 누구나 기여할 수 있는 오픈소스 프로젝트입니다.
          </p>
          <a
            href="https://github.com/nutria-kcu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium py-3 px-6 rounded-xl shadow transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.207 11.385c.6.111.82-.26.82-.577v-2.24c-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.81 1.304 3.495.997.107-.775.418-1.305.76-1.605-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016 0c2.29-1.552 3.296-1.23 3.296-1.23.653 1.652.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.48 5.921.43.37.814 1.096.814 2.21v3.28c0 .32.218.694.825.576A12.001 12.001 0 0024 12c0-6.627-5.373-12-12-12z"
                clipRule="evenodd"
              />
            </svg>
            GitHub 저장소 보기
          </a>
        </section>


      </main>
      <footer className="text-zinc-500 text-xs text-center py-8">
        © 2025 KCU-Nutria Team. under MIT License
      </footer>
    </div>
  );
}