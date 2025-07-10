import { useState } from 'react'

function App() {
  const [boosts, setBoosts] = useState(8)

  const level = boosts >= 14 ? 3 : boosts >= 7 ? 2 : boosts >= 2 ? 1 : 0
  const progress = boosts / 14 * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-pink-300 text-white text-center flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl mb-2">新しいブースト特典—<span className="underline">サーバータグとロールのスタイル（強化）</span></h1>
      <h2 className="text-3xl font-bold mt-4 mb-2">このサーバーをブーストして、<br />全ユーザーに特典をアンロックしよう</h2>

      <div className="mt-6 flex flex-col items-center">
        <img src="/icon.png" className="w-20 h-20 rounded-full mb-2 border-4 border-white" />
        <p className="text-xl font-bold">r/.com-Tag | dc.gg/com</p>
        <p className="text-sm text-white/70">{boosts}ブースト（このサーバーを2回ブーストしました！）</p>
      </div>

      <input
        type="range"
        min={0}
        max={14}
        value={boosts}
        onChange={e => setBoosts(Number(e.target.value))}
        className="w-full max-w-lg my-6"
      />

      <div className="w-full max-w-lg h-3 bg-white/30 rounded-full relative">
        <div className="h-full bg-white rounded-full transition-all" style={{ width: `${progress}%` }} />
        <div className="absolute -top-8 left-0 text-sm">レベルなし</div>
        <div className="absolute -top-8 left-[16%] text-sm">レベル1</div>
        <div className="absolute -top-8 left-[50%] text-sm">レベル2</div>
        <div className="absolute -top-8 right-0 text-sm">レベル3</div>
      </div>

      <div className="mt-8 flex gap-4">
        <button className="bg-white text-indigo-600 font-bold px-6 py-2 rounded-full">このサーバーをブーストする</button>
        <button className="border border-white font-bold px-6 py-2 rounded-full">🎁 ギフトNitro</button>
      </div>
    </div>
  )
}

export default App
