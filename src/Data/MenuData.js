import React from 'react';

const MenuData =[

  {
    id: 1,
    title: 'Home',
    linkUrl:'/'
  },
  {
    id: 2,
    title: 'National',
    linkUrl:'category/national',
    subLink:[

      {
        id: 1,
        title: 'General News',
        linkUrl:'category/general-news'
      },
      {
        id: 2,
        title: 'Politics',
        linkUrl:'category/politics'
      },
      {
        id: 3,
        title: 'Features',
        linkUrl:'category/features'
      }
    ]
  },
  {
    id: 3,
    title: 'Business',
    linkUrl:'category/business',
    subLink:[
      {
        id:1,
        title:'Corporate',
        linkUrl:'corporate'
      }
    ]
  },
  {
    id: 4,
    title: 'Science',
    linkUrl:'category/science'
  },
  {
    id: 5,
    title: 'Entertainment',
    linkUrl:'entertainment',
    subLink:[

      {
        id: 1,
        title: 'Bollywood',
        linkUrl:'category/bollywood'
      },
      {
        id: 2,
        title: 'Hollywood',
        linkUrl:'category/hollywood'
      },
      {
        id: 3,
        title: 'Music',
        linkUrl:'category/music'
      },
      {
        id: 4,
        title: 'Out of box',
        linkUrl:'category/out-of-box'
      }

    ]
  },
  {
    id: 6,
    title: 'Tech',
    linkUrl:'category/tech',
    subLink:[

      {
        id: 1,
        title: 'Internet',
        linkUrl:'category/internet'
      },
      {
        id: 2,
        title: 'Computers',
        linkUrl:'category/computers'
      },
      {
        id: 3,
        title: 'Others',
        linkUrl:'category/others'
      },
      {
        id: 4,
        title: 'Mobile',
        linkUrl:'category/mobile'
      }

    ]
  },
  {
    id: 7,
    title: 'Health',
    linkUrl:'category/health'
  },
  {
    id: 8,
    title: 'Environment',
    linkUrl:'category/environment'
  },
  {
    id: 9,
    title: 'Sports',
    linkUrl:'category/sports'
  },
  {
    id: 10,
    title: 'Sports',
    linkUrl:'category/sports',
    subLink:[

      {
        id: 1,
        title: 'Cricket',
        linkUrl:'category/cricket'
      },
      {
        id: 2,
        title: 'Tennis',
        linkUrl:'category/tennis'
      },
      {
        id: 3,
        title: 'Others',
        linkUrl:'category/others'
      },
      {
        id: 4,
        title: 'Football',
        linkUrl:'category/football'
      },
      {
        id: 5,
        title: 'Hockey',
        linkUrl:'category/hockey'
      }

    ]
  },
  {
    id: 11,
    title: 'Health &amp; Lifestyle',
    linkUrl:'category/health-lifestyle'
  },
  {
    id: 12,
    title: 'More',
    linkUrl:'#',
    subLink:[
      {
        id: 1,
        title: 'Energy',
        linkUrl:'category/energy'
      },
      {
        id: 2,
        title: 'Entertainment',
        linkUrl:'category/entertainment'
      },
      {
        id: 3,
        title: 'Photo Gallery',
        linkUrl:'photo'
      },
      {
        id: 4,
        title: 'Brand Connect',
        linkUrl:'category/brand-connect'
      },
      {
        id: 6,
        title: 'Politics',
        linkUrl:'category/politics'
      },
      {
        id: 7,
        title: 'Tech News',
        linkUrl:'category/tech-news'
      },
      {
        id: 8,
        title: 'Video Gallery',
        linkUrl:'video'
      },
      {
        id: 9,
        title: 'BLOG',
        linkUrl:'blog'
      }
    ]
  }

]

 export default MenuData;
