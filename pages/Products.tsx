import React from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/products/ProductCard';
import { UniunFeature } from '../components/products/UniunFeature';
import { Seo } from '../components/Seo';
import { Reveal } from '../components/ui/Reveal';

const Products: React.FC = () => {
  const otherProducts = PRODUCTS.filter((p) => p.slug !== 'uniun');
  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <Seo
        title="Products | Basic Tech"
        description="Products Basic Tech has built with its clients — Uniun, Searchex, custom chatbots, and demand forecasting tuned for India and Europe."
        canonical="https://basictech.in/products"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Basic Tech — Products',
          url: 'https://basictech.in/products',
        }}
      />
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <Reveal>
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-slate-400 uppercase mb-4">Products</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-4 max-w-2xl">
            Learned in the field. Shipped as products.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-light mb-12 max-w-2xl">
            Our forward-deployed teams solve hard problems inside client businesses. When a problem shows up
            again and again, we turn the solution into a product — so the next client starts further ahead.
          </p>
        </Reveal>

        <UniunFeature />

        {otherProducts.length > 0 && (
          <>
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mt-20 mb-3">
                Proven with our clients
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-light max-w-2xl">
                Built and refined in real engagements, tuned for India and Europe, and tailored to your domain.
              </p>
            </Reveal>
            <div
              data-testid="product-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10"
            >
              {otherProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Products;
