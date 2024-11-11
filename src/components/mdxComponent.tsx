import { MDXProvider } from "@mdx-js/react";
import React, { Suspense } from "react";

const components = {
  h1: (props: object) => (
      <h1
          className="text-5xl text-center m-1 text-primary font-bold"
          {...props}
      />
  ),
  h2: (props: object) => (
      <h2 className="text-3xl text-center m-1 font-semibold" {...props} />
  ),
  h3: (props: object) => (
      <h3 className="text-2xl text-center m-1 font-semibold" {...props} />
  ),
  p: (props: object) => <p {...props} />,
  img: (props: object) => <img className="text-center mx-auto" {...props} />,
  li: (props: object) => <li className="list-disc my-2" {...props} />,
};

interface MdxProps {
  src: string;
}

const MdxComponent: React.FC<MdxProps>  = ({ src }) => {
  let DynamicComponent = null;
  try {
    DynamicComponent = React.lazy(() => import(/* @vite-ignore */ `${src}`));
  } catch (error) {
    console.error('Error loading MDX file:', error);
  }

  return (
      <div className="container mx-auto p-12 space-y-8">
        <MDXProvider components={components}>
          <Suspense fallback={<div>Loading...</div>}>
            {DynamicComponent && <DynamicComponent components={components} />}
          </Suspense>
        </MDXProvider>
      </div>
  );
};

export default MdxComponent;
