import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='p-10'>
      <div className="flex flex-col justify-center items-start gap-5">
        <div className="flex items-center gap-5">
          <Link href="/veve" className="font-bold">Veve</Link>
          <p className='bg-zinc-800 rounded-sm py-1 px-5'>v1.0.1</p>
        </div>
        <p>A zero-config, type-safe, TypeScript-native testing framework and runner!</p>
      </div>
    </main>
  );
}
