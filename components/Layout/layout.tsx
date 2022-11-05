import React from 'react'

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="h-16 shadow-md bg-gray-800 flex items-center py-6 px-8 justify-between">
        <h2 className="font-semibold text-xl text-gray-400">InfinityHabit</h2>
        <nav>
          <button
            type="button"
            className="bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-md text-md py-1 px-4 text-gray-100"
          >
            Connect Wallet
          </button>
        </nav>
      </header>

      <main className="flex-grow flex flex-col">{children}</main>

      <footer className="flex items-center justify-center px-8 py-4 bg-gray-800 text-gray-400">
        <h3 className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-400">
          Made by: Kevin, Viswanath, Michael, Pratham, and Abraham
        </h3>
      </footer>
    </div>
  );
};

export default Layout;
