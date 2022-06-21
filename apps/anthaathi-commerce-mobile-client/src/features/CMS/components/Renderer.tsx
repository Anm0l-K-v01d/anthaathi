import * as React from 'react';
import {useTheme} from 'react-native-paper';
import {ScrollView, View} from 'react-native';
import {DeliveringSelection} from '../containers/HomePage/components/DeliveringSelection';
import HeroCategories from '../containers/HomePage/components/HeroCategories';
import PromotionalGrid from '../containers/HomePage/components/PromotionalGrid';
import {useResponsiveValue} from '../utils/useResponsiveValue';
import Header from './Header';
import FeaturedCollection from '../containers/HomePage/components/FeaturedCollection';
import FeaturedProduct from '../containers/HomePage/components/FeaturedProduct';
import HeroSlide from '../containers/HomePage/components/HeroSlide';
import PromotionalProductGrid from '../containers/HomePage/components/PromotionalProductGrid';
import SplitCardOffer from '../containers/HomePage/components/SplitOfferCard';
import TextWithImage from '../containers/HomePage/components/TextWithImage';

export default function () {
  const {
    colors: {background},
  } = useTheme();

  const padding = useResponsiveValue([12, 24, 24, 24]);

  return (
    <>
      <Header rightIcon="menu" leftIcon="magnify" />
      <ScrollView style={{height: '100%', backgroundColor: background}}>
        <View
          style={{
            marginLeft: padding,
            marginRight: padding,
            marginTop: padding,
            marginBottom: padding,
          }}
        >
          <DeliveringSelection
            location="Dubai"
            country="United Arab Emirates"
          />
        </View>

        <View style={{marginLeft: 24, marginRight: 24}}>
          <HeroCategories
            title="Our Products"
            items={[
              {
                title: 'Special Offers',
                image:
                  'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                key: '12',
              },
              {
                title: 'Fruits',
                image:
                  'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '23',
              },
              {
                title: 'Organic',
                image:
                  'https://burst.shopifycdn.com/photos/small-orange-pumpkin-with-green-leaves-behind.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '34',
              },
              {
                title: 'Vegetables',
                image:
                  'https://burst.shopifycdn.com/photos/ripe-red-strawberries-in-a-white-bowl.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '324',
              },
              {
                title: 'Bulk Buy',
                image:
                  'https://burst.shopifycdn.com/photos/small-orange-pumpkin-with-green-leaves-behind.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '334',
              },
              {
                title: 'Juices',
                image:
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '3341',
              },
              {
                title: 'Precut',
                image:
                  'https://burst.shopifycdn.com/photos/three-pumpkins-in-a-beam-of-sunlight.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '33141',
              },
              {
                title: 'Gift Corner',
                image:
                  'https://burst.shopifycdn.com/photos/spa-candle-towel-and-stones.jpg?width=746&format=pjpg&exif=0&iptc=0',
                key: '331241',
              },
              {
                title: 'Special Offers',
                image:
                  'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                key: '212',
              },
              {
                title: 'Fruits',
                image:
                  'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '223',
              },
              {
                title: 'Organic',
                image:
                  'https://burst.shopifycdn.com/photos/small-orange-pumpkin-with-green-leaves-behind.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '234',
              },
              {
                title: 'Vegetables',
                image:
                  'https://burst.shopifycdn.com/photos/ripe-red-strawberries-in-a-white-bowl.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '2324',
              },
              {
                title: 'Bulk Buy',
                image:
                  'https://burst.shopifycdn.com/photos/small-orange-pumpkin-with-green-leaves-behind.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '2334',
              },
              {
                title: 'Juices',
                image:
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '23341',
              },
              {
                title: 'Precut',
                image:
                  'https://burst.shopifycdn.com/photos/three-pumpkins-in-a-beam-of-sunlight.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '233141',
              },
              {
                title: 'Gift Corner',
                image:
                  'https://burst.shopifycdn.com/photos/spa-candle-towel-and-stones.jpg?width=746&format=pjpg&exif=0&iptc=0',
                key: '2331241',
              },
            ]}
          />
        </View>

        <View style={{marginTop: 12}}>
          <PromotionalGrid
            items={[
              {
                key: '12',
                subHeading: 'Something',
                heading: 'Something',
                text: 'Omkar',
                button1Text: 'SHOP NOW',
                height: [180, 240, 260, 270],
                image:
                  'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                width: ['100%', '50%', '100%', '100%'],
              },
              {
                key: '1233',
                subHeading: 'Something',
                heading: 'Something',
                text: 'Omkar',
                button1Text: 'SHOP NOW',
                height: [180, 240, 260, 270],
                image:
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
                width: ['100%', '50%', '100%', '100%'],
              },
              {
                key: '123',
                subHeading: 'Something',
                heading: 'Something',
                text: 'Omkar',
                button1Text: 'SHOP NOW',
                height: [180, 240, 260, 270],
                image:
                  'https://burst.shopifycdn.com/photos/ripe-red-strawberries-in-a-white-bowl.jpg?height=240&format=pjpg&exif=1&iptc=1',
                width: ['100%', '50%', '100%', '100%'],
              },
            ]}
          />
        </View>
        <View style={{marginTop: 12}}>
          <FeaturedCollection
            title="Featured Products"
            products={[
              {
                name: 'Baby Yellow Pepper',
                image:
                  'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                key: '12',
                price: 12,
              },
              {
                name: 'Capsicum mixed',
                image:
                  'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '23',
                price: 23,
              },
              {
                name: 'Cherry Tomato Mix',
                image:
                  'https://burst.shopifycdn.com/photos/small-orange-pumpkin-with-green-leaves-behind.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '34',
                price: 231,
              },
              {
                name: 'Cucumber',
                image:
                  'https://burst.shopifycdn.com/photos/ripe-red-strawberries-in-a-white-bowl.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '324',
                price: 232,
              },
              {
                name: 'Fruit Platter',
                image:
                  'https://burst.shopifycdn.com/photos/small-orange-pumpkin-with-green-leaves-behind.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '334',
                price: 334,
              },
              {
                name: 'Kumquats',
                image:
                  'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '3341',
                price: 2323,
              },
              {
                name: 'Mango Alphonso',
                image:
                  'https://burst.shopifycdn.com/photos/three-pumpkins-in-a-beam-of-sunlight.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '33141',
                price: 3423,
              },
            ]}
          />
        </View>
        <View style={{marginTop: 12}}>
          <FeaturedProduct
            productInfo={{
              name: 'Fruit Platter',
              image: [
                'https://burst.shopifycdn.com/photos/three-pumpkins-in-a-beam-of-sunlight.jpg?width=373&format=pjpg&exif=1&iptc=1',
                'https://burst.shopifycdn.com/photos/small-orange-pumpkin-with-green-leaves-behind.jpg?width=373&format=pjpg&exif=1&iptc=1',
                'https://burst.shopifycdn.com/photos/ripe-red-strawberries-in-a-white-bowl.jpg?width=373&format=pjpg&exif=1&iptc=1',
              ],
              description: `100% fresh. Benefits: As the saying goes "Apple a day keep the doctor away" Red Apples are extremely rich in important antioxidants, flavanoids, and dietary fibre. Apple fruits are firm and the skin is shiny and smooth. The color of the skin can be red, green, yellow, or a combination of those colors.The flesh is white, red or ivory.`,
              price: '334',
            }}
          />
        </View>
        <View style={{marginTop: 12}}>
          <HeroSlide
            backgroundImageSrc="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-squeezed-orange-juice_300x.jpg?v=1653584430"
            title="Fresh Juices"
            subTitle="Perfect for rich lifestyle photography"
            buttonTitle="View All"
          />
        </View>

        <PromotionalProductGrid
          products={[
            {
              name: 'Baby Yellow Pepper',
              image:
                'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
              price: '12',
              heading: 'NRTC Fresh',
              buttonTitle: 'Shop',
              label: 'New',
              description: '100% fresh. Sourced from Netherlands',
            },
            {
              name: 'Capsicum mixed',
              image:
                'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
              price: '23',
              heading: 'NRTC Fresh',
              buttonTitle: 'Shop',
              label: 'New',
              description: '100% fresh. Sourced from Netherlands',
            },
          ]}
        />

        <SplitCardOffer
          title="Get Exclusive Offers"
          subtitle="Get exclusive offers & more by signing up for our promotional email"
          image="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/Newsletter_bg_300x.png?v=1653648705"
          buttonTitle="View Offers"
        />
        <View style={{marginTop: 12}}>
          <TextWithImage
            title="How It Works"
            columns={[
              {
                title: 'Register',
                description: 'Description Register',
                image:
                  'https://www.nrtcfresh.com/wp-content/uploads/2020/08/Page-1.svg',
              },
              {
                title: 'Select Products & Place Order',
                description: 'Description Select Products & Place Order',
                image:
                  'https://www.nrtcfresh.com/wp-content/uploads/2020/07/icon-HIW-02.svg',
              },
              {
                title: 'Schedule Delivery',
                description: 'Description Schedule Delivery',
                image:
                  'https://www.nrtcfresh.com/wp-content/uploads/2020/07/noun_Select-Product_2206098-1.svg',
              },
              {
                title: 'Schedule Delivery',
                description: 'Description Schedule Delivery',
                image:
                  'https://www.nrtcfresh.com/wp-content/uploads/2020/07/noun_Select-Product_2206098-1.svg',
              },
            ]}
          />
        </View>
      </ScrollView>
    </>
  );
}
