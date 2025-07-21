import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getDocBySlug, getAllDocs } from '@/lib/docs';
import { cn } from '@/lib/utils';
import { Component } from 'lucide-react';
import TableOfContents from '@/components/website/tableof-compoents';
import { ComponentPagination } from '@/components/website/code-components/pagination';
import Footer from '@/components/website/footer';

export async function generateStaticParams() {
  const docs = await getAllDocs();
  console.log(docs);

  return docs.map((doc) => ({
    slug: doc.slug === 'index' ? [] : doc.slug.split('/'),
  }));
}

export async function generateMetadata(
  props: {
    params: Promise<{ slug?: string[] }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug?.join('/') || '';
  const doc = await getDocBySlug(slug);
  if (!doc) {
    return {};
  }
  return {
    title: `${doc.content.metadata.title}`,
    description: doc.content.metadata.description,
  };
}

export default async function DocPage(
  props: {
    params: Promise<{ slug?: string[] }>;
  }
) {
  const params = await props.params;
  const slug = params.slug?.join('/') || '';
  const doc = await getDocBySlug(slug);
  // console.log(doc);

  if (!doc) {
    notFound();
  }

  const { default: Content } = doc.content;


  return (
    <>
      <div className='lg:container mx-auto lg:px-0 px-2'>
        <div className='flex w-full lg:gap-3'>
          <section className='xl:mr-0 lg:mr-3 mt-2 prose w-full prose-zinc min-w-0 max-w-full pb-5 dark:prose-invert prose-h1:text-2xl prose-h1:font-semibold prose-h2:text-2xl prose-h2:my-4  prose-h2:py-1  prose-h2:border-b prose-h3:py-1  prose-h2:mt-3 prose-h2:font-medium prose-h3:text-2xl prose-h3:mt-4 prose-h3:mb-2 prose-h3:font-medium prose-strong:font-medium prose-table:block prose-table:overflow-y-auto lg:pt-1'>
            <article className='mb-4 mt-0 rounded-lg dark:bg-black/40  bg-primary-foreground  border backdrop-blur-md p-6'>
              <div className='space-y-2 rounded-md dark:text-white text-black'>
                <h1
                  className={cn(
                    'mb-0 flex scroll-m-20  not-prose items-center text-3xl gap-2 font-medium tracking-tight'
                  )}
                >
                  <div className='w-10 h-10 bg-primary grid place-content-center text-primary-foreground rounded-lg'>
                    <Component />
                  </div>
                  {doc.content.metadata.title}
                </h1>
                <p className='text-sm'>{doc.content.metadata.description}</p>
              </div>
            </article>
            <Content />
            <ComponentPagination doc={doc} />
            <Footer className='mb-0' />
          </section>
          <TableOfContents toc={doc.toc} />
        </div>
      </div>
    </>
  );
}
