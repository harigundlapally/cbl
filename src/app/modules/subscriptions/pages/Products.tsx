/* eslint-disable @typescript-eslint/no-unused-vars */
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import axios from '../../../api/axios';
import { useIntl } from 'react-intl'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard';
import { Product } from '../types/product';
import _ from 'lodash';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('category') || '';
  const intl = useIntl();
  const [isCategory, setIsCategory] = useState(false);
  const [products, allProducts] = useState([]);
  const [categories, allCategories] = useState({});

  const groupByCategory = (arr:any, property:string) => {
    return arr.reduce((acc:any, obj:any) => {
      const key = obj[property];
      const curGroup = acc[key] ?? [];
  
      return { ...acc, [key]: [...curGroup, obj] };
    }, {});
  }

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 10);

    const fetchData = async () => {
      try {
        const request = await axios.get('http://localhost:3000/productList');
        const categories = _.uniq(_.map(request.data, 'category'));
        if(categories.length === 1 && categories.includes('all')) {
          setIsCategory(false);
          allProducts(request.data);
        } else if(query) {
          setIsCategory(false);
          let products:any = _.filter(request.data, (product) => product.category === query);
          allProducts(products);
        } else if(categories.length > 1 && !query) {
          setIsCategory(true);
          const groupedCategories:any = groupByCategory(request.data, "category");
          allCategories(groupedCategories);
        }
        
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className={clsx('app-default')}>
      <Header />

      <div className="app-container">
        <div className='manage-subscriptions my-8'>
          <div className="py-lg-6">
            <h1 className={clsx('page-heading flex-grow-1 text-dark mb-2 heading theme-heading')}>
              {intl.formatMessage({id: 'SUBSCRIPTIONS.ALL_PRODUCTS.TITLE'})}
            </h1>
            <p>
              {intl.formatMessage({id: 'SUBSCRIPTIONS.ALL_PRODUCTS.ALL_PRODUCTS_TEXT'})}
            </p>
          </div>

          <div className='tab-content row g-6 g-xl-6'>
            {
              !isCategory && products?.map((data, index) => <ProductCard key={`product_${index}`} {...data as Product}/>)
            }

            {
              isCategory && Object.keys(categories).map((data, i) => {
                return (
                  <div key={`category_${i}`}>
                      <h2 className='text-uppercase heading fs-1 pb-3'>{Object.keys(categories)[i]}</h2>
                      {
                      (categories as any)[data].map((cat:Product, idx:any) => <React.Fragment key={idx}>
                        <ProductCard key={`product_${idx}`} {...cat as Product}/>
                      </React.Fragment>)
                      }
                  </div>
                )
              }
                )
            }
          </div>
          <br />
          
        </div>
      </div>
    </div>
  )
}

export default Products