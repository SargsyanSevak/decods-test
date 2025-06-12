import { mockArticles } from "@/mock";
import { SingleArticleScreen } from "@/screens";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const data = mockArticles.filter((el) => String(el.id) === String(id));

  if (!data.length) {
    notFound();
  }

  const article = data[0];

  const description =
    article.content?.[0]?.description ||
    `Read the article titled "${article.title}"`;

  return {
    title: article.title,
    description,
    openGraph: {
      title: article.title,
      description,
      type: "article",
      url: `https://decods.com/articles/${article.id.toString()}`,
      images: [
        {
          url: article.image,
          alt: article.title,
          width: 800,
          height: 600,
        },
      ],
      publishedTime: new Date(article.date).toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: [article.image],
    },
  };
}

const SingleArticle = async ({ params }: Props) => {
  const { id } = await params;

  const data = mockArticles.filter((el) => String(el.id) === String(id));

  if (!data.length) {
    notFound();
  }

  const article = data[0];

  return <SingleArticleScreen data={article} />;
};

export default SingleArticle;
