
import React from "react";

export default function Home() {
  const categories = [
    { name: "タピオカ", color: "bg-pink-100" },
    { name: "クリーマー", color: "bg-yellow-100" },
    { name: "ジャム", color: "bg-purple-100" },
    { name: "コップ", color: "bg-green-100" },
    { name: "トッピング", color: "bg-blue-100" },
  ];

  return (
    <div className="min-h-screen bg-sky-100 text-gray-800 font-sans">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">Hayaoking Boba Shop</h1>
        <p className="text-lg mt-2">タピオカ原料仕入れ専門</p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`${cat.color} rounded-2xl p-6 shadow hover:scale-105 transform transition duration-300`}
          >
            <h2 className="text-xl font-semibold">{cat.name}</h2>
            <p className="text-sm mt-2">詳細を見る →</p>
          </div>
        ))}
      </main>

      <button className="fixed bottom-6 right-6 bg-white text-sky-600 border border-sky-300 px-4 py-2 rounded-full shadow-md hover:bg-sky-50">
        💬 聊天室
      </button>
    </div>
  );
}
