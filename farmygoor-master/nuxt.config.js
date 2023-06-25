// import colors from 'vuetify/es5/util/colors'

function getNodeApiBase (env) {
  switch (env) {
    case 'production':
      return 'http://localhost:5000/backend'
    case 'staging':
      return 'http://localhost:4000/backend'
    default:
      return 'http://localhost:3000/backend'
  }
}

function getReportBase (env) {
  switch (env) {
    case 'production':
      return 'http://localhost:5500'
    case 'staging':
      return 'http://localhost:4400'
    default:
      return 'http://localhost:3300'
  }
}


function getFileUploadUrl (env) {
  switch (env) {
    default:
      return 'http://localhost:5000/uploads'
  }
}

function getSecretKey (env) {
  switch (env) {
    case 'production':
      return 'abcdef'
    case 'staging':
      return 'abcdef'
    default:
      return 'abcdef'
  }
}

module.exports =  {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - chana',
    title: 'chana',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'organic farms' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  dev: (process.env.NODE_ENV === 'dev') || (process.env.NODE_ENV === 'stage'), // added auto-build step for proxy.
  env: {
    nodeApiBase: getNodeApiBase(process.env.NODE_ENV),
    reportingApiBase:getReportBase(process.env.NODE_ENV),
    uploadUrl: getFileUploadUrl(process.env.NODE_ENV),
    secretKey: getSecretKey(process.env.NODE_ENV),
    mainLogoUrl: (process.env.NODE_ENV === 'dev') ? '/favicon.ico' : 'https://globalheartbeattravel.com/jucker-farm-zurich/jucker-farm_-countryside/',
    staticBase: (process.env.NODE_ENV === 'dev') ? '/' : '/static/',
    idleTimeoutSeconds: 1800,
    idleLogoutSeconds: 90,
    useMockData: true,
    baseURL: process.env.BASE_URL || './',
  
    internationalization:{
      hindi:{
        appName:'छाना',
         from: "null",
        lang: 'भाषा',
        pro: 'उत्पाद',
          equip: 'उपकरण',

          tit1:'ज्यादा',
          tit2:'खरीदे',
          tit3:'निवास',
          tit4:'सहयोग भागीदार',
           tit5: 'दिनांक',
           tit6:null,
           tit7:null,
          tit10:'से',
          tit11:'तक',
          tit8: 'बुकिंग के लिए तिथि चुनें',
          tit9: 'दिनांक आवश्यक है',
           tit12:'आगे बढ़ें',
             tit13:'लॉगइन',
          tit14:'साइनअप',
           tit15:'Please confirm the booking dates',
          tit16:'Confirm',
            mores: [
                
                {name: 'प्रतिपुष्टि', rote:'/feedback'},
                   {name: 'बारे में', rote:'/about'}
            ],
          equipments: [
        {title: 'खोजें', icon: 'mdi-account-multiple-outline', to: 'equipments'},
        {title: 'Submit your idea', icon: 'mdi-cog-outline', to: '/submitidea'},
      ],
     
        cruds: [
          {title: 'खोजें',icon: 'mdi-plus-outline',to:'/products'},
          {title: 'हमसे जुड़ें',icon:'mdi-file-outline',to:'/signup'},
          {title: 'सहयोग दीजिये',icon:'mdi-update',to:'/supportus'},
         
        ],
              products: [
         { restaurant: 'ब्रेड',rating: 'रेटिंग - 4.5',product: 'स्रोत - गेहूँ',source: '/bread.png',supplier: 'अमूल', to: '/cart'},
        {restaurant: 'दूध',rating: 'रेटिंग - 4.2',product: 'स्रोत - डेयरी उत्पाद',source: '/milk.png',supplier: 'आँचल', to: '/cart'},
        {restaurant: 'पनीर',rating: 'रेटिंग - 4.2',product: 'स्रोत - डेयरी उत्पाद',source: '/cheese.png',supplier: 'आँचल', to: '/cart'},
          { restaurant: 'अंडे',rating: 'रेटिंग - 4.5',product: 'स्रोत -मुर्गी पालन',source: '/eggs.png',supplier: 'अमूल', to: '/cart'},
        {restaurant: 'पेय',rating: 'रेटिंग - 4.2',product: 'स्रोत - गेहूँ',source: '/drinks.png',supplier: 'बीरा', to: '/cart'},
        {restaurant: 'अखरोट',rating: 'रेटिंग - 4.2',product: 'स्रोत - अखरोट',source: '/nuts.png',supplier: 'wallnut.io' , to: '/cart'}
        ],

        sideNav:[
          {
            icon: 'mdi-home',
            title: 'घर',
            to: '/'
          },
          {
            icon: 'mdi-run',
            title: 'खोजें',
            to: '/farms'
          },
          {
            icon: 'mdi-book',
            title: 'बुकिंग',
            to: '/bookings'
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'कार्यक्रम',
            to: '/events'
          }
        ],
           acco: [
            {title: 'हॉलिडे अपार्टमेंट' ,to:'/holiday'},
            {title: 'कमरा' ,to:'/rooms'},
            {title: 'पहाड़ी घर' ,to:'/mhut'},
            {title: 'शिविर स्थल' ,to:'/csite'},
          ],
           holiday:[
                 {place: 'हल्दवानी',rating: '4.5 सितारा', cost:'औसत लागत प्रति दिन :1000', source:'/holiday1.png'},
                 {place: 'देहरादून',rating: '4.7 सितारा', cost:'औसत लागत प्रति दिन :1800', source:'/holiday2.png'},
                 {place: 'हल्दवानी',rating: '4.5 सितारा', cost:'औसत लागत प्रति दिन :900', source:'/holiday3.png'},
                 {place: 'अल्मोड़ा',rating: '4.2 सितारा', cost:'औसत लागत प्रति दिन :2000', source:'/holiday4.png'},
                 {place: 'नैनीताल',rating: '4.5 सितारा', cost:'औसत लागत प्रति दिन :3000', source:'/holiday5.png'},
                 {place: 'पिथोरागढ़',rating: '4.5 सितारा', cost:'औसत लागत प्रति दिन :2500', source:'/holiday6.png'},
                         ],



          submit: 'प्रस्तुत',
        feedback1: 'हमें फ़ीडबैक देकर बेहतर बनने में हमारी सहायता करें',
        feedback2: 'अपनी प्रतिक्रिया यहाँ लिखें ',



        footer:'बच्चों को अनुभवी मेजबान द्वारा किसान परिवारों और उनके बच्चों के रोजमर्रा के जीवन में एकीकृत किया जाता है और गायों को दूध पिलाने, चिकन अंडे इकट्ठा करने या सूअरों को खिलाने में मदद करने की अनुमति दी जाती है। मूल्य में रात भर रहने की जगह, बहु-बेड वाले कमरे, साथ ही पूर्ण बोर्ड शामिल हैं। आपके बच्चे जल्द ही इन छुट्टियों को कभी नहीं भूलेंगे, और आने वाले लंबे समय तक उनके बारे में बात कर सकते हैं। जिन बच्चों को विशेष देखभाल की आवश्यकता होती है, उनके लिए संबंधित रूपरेखा शर्तों पर पहले से ही मेजबानों के साथ चर्चा की जानी चाहिए। यदि आप रुचि रखते हैं, तो कृपया कृषक परिवारों से सीधे संपर्क करें। आपको खेत की विशेष विशेषताओं और छोटे मेहमानों के लिए संभावनाओं के बारे में पहले से जानकारी प्राप्त होगी।'
      },
      english:{
        appName:'Chana',
         from: "null",
          lang: 'language',
        equip: 'Equipments',
        pro: 'Products',
        tit1:'more',
         tit2:'Shop',
          tit3:'Accommodation',
          tit4:'Cooperation partners',
           tit5: 'Date',
          tit6:'From',
          tit7:'To',
          tit8: 'Select date for booking',
          tit9: 'Date is required',
           tit10:null,
          tit11:null,
           tit12:'Proceed',
             tit13:'Login',
          tit14:'Signup',
          tit15:'Please confirm the booking dates',
          tit16:'Confirm',
          tit17:'RESERVE',
          tit18:'Add to cart',
          tit19:'Buy Now',
          tit20:'Holiday Apartments',

          tit22:'Mountain Hut',

          acco: [
            {title: 'Holiday Apartment' ,to:'/holiday'},
            {title: 'Room' ,to:'/rooms'},
            {title: 'Mountain Hut' ,to:'/mhut'},
            {title: 'Camping Site' ,to:'/csite'},
          ],
          mores: [
                
                {name: 'FEEDBACK', rote:'/feedback'},
                   {name: 'ABOUT US', rote:'/about'}
            ],
      equipments: [
        {title: 'Explore', icon: 'mdi-account-multiple-outline', to: '/equipments'},
        {title: 'Submit your idea', icon: 'mdi-cog-outline' , to: '/submitidea'},
      ],
        cruds: [
          {title: 'Explore',icon: 'mdi-plus-outline',to:'/products'},
          {title: 'Join us',icon:'mdi-file-outline',to:'/signup'},
          {title: 'Support us',icon:'mdi-update',to:'/supportus'},
         
        ],
                  products: [
         { restaurant: 'Breads',rating: 'rating - 4.5',product: 'Source - Wheat',source: '/bread.png',supplier: 'Amul', to: '/cart'},
        {restaurant: 'Milk',rating: 'rating - 4.2',product: 'Source - dairy product',source: '/milk.png',supplier: 'Dairy Queen', to: '/cart'},
        {restaurant: 'Cheese',rating: 'rating - 4.2',product: 'Source - dairy product',source: '/cheese.png',supplier: 'AaNCHAL', to: '/cart'},
          { restaurant: 'Eggs',rating: 'rating - 4.5',product: 'Source -Poultry',source: '/eggs.png',supplier: 'Amul', to: '/cart'},
        {restaurant: 'Drinks',rating: 'rating - 4.2',product: 'Source - wheat',source: '/drinks.png',supplier: 'Beera', to: '/cart'},
        {restaurant: 'Wallnuts',rating: 'rating - 4.2',product: 'Source - nuts',source: '/nuts.png',supplier: 'walnut.io' , to: '/cart'}
        ],

        sideNav:[
          {
            icon: 'mdi-home',
            title: 'home',
            to: '/'
          },
          {
            icon: 'mdi-run',
            title: 'explore',
            to: '/farms'
          },
          {
            icon: 'mdi-book',
            title: 'Bookings',
            to: '/bookings'
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'events',
            to: '/events'
          }
        ],
         
        submit: 'Submit',
        feedback1: 'Help us get better by giving us feedbacks',
        feedback2: 'Write your feedback here ',
        holiday:[
                 {place: 'Haldwani',rating: '4.5 Stars', cost:'Average cost Per night :1000', source:'/holiday1.png'},
                 {place: 'Dehradun',rating: '4.7 Stars', cost:'Average cost Per night :1800', source:'/holiday2.png'},
                 {place: 'Haldwani',rating: '4.5 Stars', cost:'Average cost Per night :900', source:'/holiday3.png'},
                 {place: 'Almora',rating: '4.2 Stars', cost:'Average cost Per night :2000', source:'/holiday4.png'},
                 {place: 'Nainital',rating: '4.5 Stars', cost:'Average cost Per night :3000', source:'/holiday5.png'},
                 {place: 'Pithoragarh',rating: '4.5 Stars', cost:'Average cost Per night :2500', source:'/holiday6.png'},
                         ],







        footer:'Children are integrated into the everyday lives of peasant families and their children by experienced hosts and allowed to help feed cows, collect chicken eggs, or feed pigs. Price includes overnight accommodation, multi-bedded rooms, as well as full boards. Your children will never forget these holidays soon, and may talk about them for a long time to come. For children who require special care, the related morphological conditions should be discussed with the hosts in advance. If you are interested, please contact farming families directly. You will get to know in advance about the special features of the farm and the possibilities for younger guests.'
      },
      spanish:{
        appName:'Querer',
        from: "null",
          lang: 'Idioma',
          equip: 'Equipo',
          pro: 'Productos',
          tit1: 'más',
          tit2:'Tienda',
          tit3:'Alojamiento',
          tit4:'Socios de cooperación',
          tit5: 'Fecha',
          tit6:'Desde',
          tit7:'Hasta',
          tit8: 'Seleccionar fecha de reserva',
          tit9: 'Se requiere fecha',
           tit10:null,
          tit11:null,        
          tit12:'Continuar',
          tit13:'acceso',
          tit14:'INSCRIBIRSE',
           tit15:'Please confirm the booking dates',
          tit16:'Confirm',
             acco: [
            {title: 'Apartamento de vacaciones' ,to:'/holiday'},
            {title: 'Habitación' ,to:'/rooms'},
            {title: 'Refugio de Montaña' ,to:'/mhut'},
            {title: 'Lugar para acampar' ,to:'/csite'},
          ],
            mores: [
                
                {name: 'Realimentación', rote:'/feedback'},
                   {name: 'Sobre nosotros', rote:'/about'}
            ],
         equipments: [
        {title: 'Explore', icon: 'mdi-account-multiple-outline', to:'equipments'},
        {title: 'Submit your idea', icon: 'mdi-cog-outline',to:'/submitidea'},
      ],
     
        cruds: [
          {title: 'explorar',icon: 'mdi-plus-outline',to:'/products'},
          {title: 'Únete a nosotros',icon:'mdi-file-outline',to:'/signup'},
          {title: 'Apoyanos',icon:'mdi-update',to:'/supportus'},
         
        ],
              products: [
         { restaurant: 'un pan',rating: 'clasificación - 4.5',product: 'fuente - trigo',source: '/bread.png',supplier: 'Amul', to: '/cart'},
        {restaurant: 'Leche',rating: 'clasificación - 4.2',product: 'fuente - producto lácteo',source: '/milk.png',supplier: 'Dairy Queen', to: '/cart'},
        {restaurant: 'queso',rating: 'clasificación - 4.2',product: 'fuente - producto lácteo',source: '/cheese.png',supplier: 'AaNCHAL', to: '/cart'},
          { restaurant: 'huevo',rating: 'clasificación - 4.5',product: 'fuente -Poultry',source: '/eggs.png',supplier: 'Amul', to: '/cart'},
        {restaurant: 'bebidas',rating: 'clasificación - 4.2',product: 'fuente - trigo',source: '/drinks.png',supplier: 'Beera', to: '/cart'},
        {restaurant: 'nueces',rating: 'clasificación - 4.2',product: 'fuente -nueces',source: '/nuts.png',supplier: 'walnut.io' , to: '/cart'}
        ],
        sideNav:[
          {
            icon: 'mdi-home',
            title: 'casa',
            to: '/'
          },
          {
            icon: 'mdi-run',
            title: 'explorar',
            to: '/farms'
          },
          {
            icon: 'mdi-book',
            title: 'reserva',
            to: '/bookings'
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'eventos',
            to: '/events'
          }
        ],

  submit: 'Enviar',
        feedback1: 'Ayúdanos a mejorar dándonos comentarios',
        feedback2: 'Escriba sus comentarios aquí ',

 holiday:[
                 {place: 'Haldwani',rating: '4.5 estrellas', cost:'Costo medio por noche :1000', source:'/holiday1.png'},
                 {place: 'Dehradun',rating: '4.7 estrellas', cost:'Costo medio por noche :1800', source:'/holiday2.png'},
                 {place: 'Haldwani',rating: '4.5 estrellas', cost:'Costo medio por noche :900', source:'/holiday3.png'},
                 {place: 'Almora',rating: '4.2 estrellas', cost:'Costo medio por noche :2000', source:'/holiday4.png'},
                 {place: 'Nainital',rating: '4.5 estrellas', cost:'Costo medio por noche :3000', source:'/holiday5.png'},
                 {place: 'Pithoragarh',rating: '4.5 estrellas', cost:'Costo medio por noche :2500', source:'/holiday6.png'},
                         ],





        footer:'Los niños son integrados en la vida cotidiana de las familias campesinas y sus hijos por anfitriones experimentados y se les permite ayudar a alimentar a las vacas, recolectar huevos de gallina o alimentar a los cerdos. El precio incluye alojamiento, habitaciones con varias camas y pensión completa. Sus hijos nunca olvidarán estas fiestas pronto y es posible que hablen de ellas durante mucho tiempo. Para los niños que requieren cuidados especiales, las condiciones morfológicas relacionadas deben discutirse con los anfitriones con anticipación. Si está interesado, comuníquese directamente con las familias de agricultores. Conocerá de antemano las características especiales de la finca y las posibilidades para los más pequeños.'
      }
    },
    activeLanguage:'english',
   
  
  },
  serverMiddleware: [
    '~/serverMiddleware/logger.js'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    // theme: {
    //   dark: true,
    //   themes: {
    //     dark: {
    //       primary: colors.blue.darken2,
    //       accent: colors.grey.darken3,
    //       secondary: colors.amber.darken3,
    //       info: colors.teal.lighten1,
    //       warning: colors.amber.base,
    //       error: colors.deepOrange.accent4,
    //       success: colors.green.accent3
    //     }
    //   }
    // }
  },
  /*
  ** Customize the progress bar color
  */
 loading: { color: '#3B8070' },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|jsx)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true // fix linting issues like spaces.
          }
        })
      }
    }
  }
}
