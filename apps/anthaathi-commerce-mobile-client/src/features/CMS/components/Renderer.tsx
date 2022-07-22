import * as React from 'react';
import {BasketItemCMSInput} from '../containers/CartPage/components/BasketItem';
import {PricingCardCMSInput} from '../containers/CartPage/components/PricingCard';
import {PromoCodeCMSInput} from '../containers/CartPage/components/PromoCode';
import {SuggestedItemCMSInput} from '../containers/CartPage/components/SuggestedItem';
import {HeaderCMSInput} from '../containers/Header';
import {BlogPostsCMSInput} from '../containers/HomePage/components/BlogPosts';
import {CategoriesCardCMSInput} from '../containers/HomePage/components/CategoriesCard';
import {DeliveringSelectionCMSInput} from '../containers/HomePage/components/DeliveringSelection';
import {FeaturedCollectionCMSInput} from '../containers/HomePage/components/FeaturedCollection';
import {FeaturedProductCMSInput} from '../containers/HomePage/components/FeaturedProduct';
import {HeroCategoriesCMSInput} from '../containers/HomePage/components/HeroCategories';
import {HeroSlideCMSInput} from '../containers/HomePage/components/HeroSlide';
import {PromotionalGridCMSInput} from '../containers/HomePage/components/PromotionalGrid';
import {PromotionalProductGridCMSInput} from '../containers/HomePage/components/PromotionalProductGrid';
import {SplitOfferCardCMSInput} from '../containers/HomePage/components/SplitOfferCard';
import {TextWithImageCMSInput} from '../containers/HomePage/components/TextWithImage';

export interface RendererProps {
  components: object & {_component: string; key: string}[];
}

const renderer = [
  HeaderCMSInput,
  //home page
  DeliveringSelectionCMSInput,
  BlogPostsCMSInput,
  CategoriesCardCMSInput,
  FeaturedCollectionCMSInput,
  FeaturedProductCMSInput,
  HeroCategoriesCMSInput,
  HeroSlideCMSInput,
  PromotionalGridCMSInput,
  PromotionalProductGridCMSInput,
  SplitOfferCardCMSInput,
  TextWithImageCMSInput,
  //cart page
  BasketItemCMSInput,
  PricingCardCMSInput,
  PromoCodeCMSInput,
  SuggestedItemCMSInput,
];

const mapConverted: Record<string, React.FunctionComponent> = {};

renderer.forEach(e => {
  mapConverted[e._component] = e.component as never;
});

export default function (props: RendererProps) {
  return (
    <>
      {props.components.map(res => {
        const {_component, ...finalProps} = res;

        return React.createElement(mapConverted[_component], finalProps);
      })}
    </>
  );
}
