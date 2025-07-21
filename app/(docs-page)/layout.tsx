import React from 'react';
import Header from '@/components/website/header';
import DocsSidebar from '@/components/website/sidebar';

export default async function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className='dark:bg-zinc-950 bg-zinc-50  '>
        <div className='mx-auto xl:container xl:px-0 px-2 lg:grid 2xl:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-3'>
          <DocsSidebar />
          <div className='min-w-0 max-w-full'>{children}</div>
        </div>
      </main>
    </>
  );
}
