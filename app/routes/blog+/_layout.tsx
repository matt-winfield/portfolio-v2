import { Link, Outlet } from '@remix-run/react';
import { ChevronLeft } from 'lucide-react';

const ArticleLayout = () => {
    return (
        <div className="container">
            <div>
                <Link to="/blog" className="flex gap-1">
                    <ChevronLeft />
                    <span>Back to blog</span>
                </Link>
            </div>
            <div className="mb-2 flex flex-col items-center gap-3">
                <h1 className="text-center text-5xl">Article title</h1>
                <div className="flex items-center justify-center">
                    TODO: Add tags
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-full sm:w-4/5">
                    <div className="mb-3 text-sm text-muted-foreground">
                        {/* {publicationDate && ( */}
                        {/*     <div>Published {publicationDate}</div> */}
                        {/* )} */}
                        {/* {publicationDate !== updateDate && ( */}
                        {/*     <div>Updated {updateDate}</div> */}
                        {/* )} */}
                        {/* <div>{minutesToRead} minute read</div> */}
                    </div>
                    {/* {data.article.images.length > 0 && ( */}
                    {/*     <div className="my-3"> */}
                    {/*         <img */}
                    {/*             className={cn( */}
                    {/*                 'h-48 w-full object-cover transition-opacity sm:h-[30vh]', */}
                    {/*                 !imageLoaded && 'opacity-0', */}
                    {/*             )} */}
                    {/*             ref={imageRef} */}
                    {/*             onLoad={onImageLoad} */}
                    {/*             src={`/resources/images/${data.article.images[0].id}`} */}
                    {/*             alt={ */}
                    {/*                 data.article.images[0].altText ?? */}
                    {/*                 'Article cover image' */}
                    {/*             } */}
                    {/*         /> */}
                    {/*     </div> */}
                    {/* )} */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
export default ArticleLayout;
