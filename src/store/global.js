import {defineStore} from 'pinia'
import { useRentsStore } from './rents'

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    loading: false,
    rentsNotifications: 0,
    adminMode: false,
    authDialogVisible: false,
    query: '',
    testFetchData: [
      {
        id: 0,
        age_id: 'старше 15-ти',
        sex_id: 'унисекс', // сделать геттеры отображаемых значений по id
        season_id: 'весна-лето',
        size: '43 (EUR)',
        cost_per_hour: 199,
        description: `
        Коньки роликовые, для детей и подростков,
        от известного швейцарско бренда спортивного
        инвентаря Swizz Sport.
        Обладают тремя большими, упругими колёсами
        с хорошим накатом, ботинком из синтетического
        волокна с качественным пошивом,
        всё это обеспечивает высокую надёжность и
        много удовольствия от катания.`,
        name: "Коньки роликовые",
        imageUrl: require('@/assets/img/rollers.jpg')
      },
      {
        id: 1,
        age_id: 'старше 15-ти',
        sex_id: 'унисекс',
        season_id: 'весна-лето',
        size: '78 см',
        cost_per_hour: 299,
        description: `
        Скейт  классический, для детей и подростков,
        от известного бренда Birdhouse.
        Обладает четырьмя колёсами с хорошим накатом,
	      жесткой подвеской, легкой декой.
        всё это обеспечивает высокую надёжность и
        удовольствия от катания.`,
        name: "Скейт",
        imageUrl: require('@/assets/img/skate.jpg')
      },
      {
        id: 2,
        age_id: 'взрослое',
        sex_id: 'женское',
        season_id: 'весна-лето',
        size: 'L',
        cost_per_hour: 599,
        description: `
        Горный велосипед, полностью созданный в центре B'TWIN,
	      является результатом совместной работы команды экспертов и спортсменов.
	      Отправляйтесь на прогулки с друзьями, с семьей или в одиночку – 
	      Вам гарантировано удовольствие от поездок на горном велосипеде ST100!`,
        name: "Велосипед ROCKRIDER ST100",
        imageUrl: require('@/assets/img/bicycle_2.jpg')
      },
      {
        id: 3,
        age_id: 'взрослое',
        sex_id: 'мужское', 
        season_id: 'весна-лето',
        size: '62 см',
        cost_per_hour: 59,
        description: `
        Мяч ADIDAS UNIFORIA Training - реплика, 
	      повторяющая дизайн официального мяча группового этапа EURO 2020. 
	      Рекомендуется для интенсивных тренировок, 
	      проведения соревнований среднего уровня. 
	      Покрышка мяча состоит из 18 панелей, 
	      изготовленных из термополиуретана с подкладочным слоем из пены ЭВА. 
	      Машинная сшивка, бутиловая камера, армированная синтетической нитью, 
	      бутиловый ниппель. Данная конструкция положительно влияет
	      на сферичность мяча, а также позволяет добиваться стабильного 
	      и ровного полета мяча. Светоотражающие детали позволяют 
	      эффективно играть и после захода солнца.`,
        name: "Футбольный мяч",
        imageUrl: require('@/assets/img/football.jpg')
      },
      {
        id: 4,
        age_id: 'старше 15-ти',
        sex_id: 'женское',
        season_id: 'весна-лето',
        size: '50.8 см',
        cost_per_hour: 199,
        description: `
        Бейсбольная бита Brooklyn Shorty от американского бренда Cold Steel 
	      является спортивным снарядом, которому присущи тактические характеристики. 
	      Изготовлена неломающаяся бита для бейсбола из прочного 
	      полипропилена методом литья. Материал имеет небольшой вес, 
	      не гниет, не дает сколы и трещины, а также прост в уходе.`,
        name: "Бейсбольная бита",
        imageUrl: require('@/assets/img/baseball_bat.jpg')
      },
      {
        id: 5,
        age_id: 'детское',
        sex_id: 'мужское',
        season_id: 'зимнее',
        size: '158 см',
        cost_per_hour: 499,
        description: `
        Клюшка BAUER SUPREME 3S, полупрофессиональная 
	      клюшка линейки SUPREME 2020 года. Данная клюшка имеет 
	      увеличенную, высокую точку прогиба с применением 
	      технологии MAX POWER KICK(MPK), благодаря чему бросок 
	      становиться более резким и мощным. Также легкий вес и 
	      долговечность клюшки достигается благодаря крюку, 
	      который выполнен из высококачественного карбона 15К.`,
        name: "Клюшка хоккейная",
        imageUrl: require('@/assets/img/hockey_stick.jpg')
      },
      {
        id: 6,
        age_id: 'взрослое',
        sex_id: 'унисекс',
        season_id: 'весна-лето',
        size: 'M',
        cost_per_hour: 459,
        description: `
        Горный велосипед, полностью созданный в центре B'TWIN,
	      является результатом совместной работы команды экспертов и спортсменов.
	      Отправляйтесь на прогулки с друзьями, с семьей или в одиночку – 
	      Вам гарантировано удовольствие от поездок на горном велосипеде ST100!`,
        name: "Велосипед ROCKRIDER G20",
        imageUrl: require('@/assets/img/bicycle_1.jpg')
      },
      {
        id: 7,
        age_id: 'младше 15-ти',
        sex_id: 'унисекс',
        season_id: 'зимнее',
        size: '36 (EUR)',
        cost_per_hour: 249,
        description: `
        Детский лыжный комплект норвежской спортивной фабрики Mountine Orion,
        с пластиковыми креплениями стоп и деревянной, окрашенной, покрытой лаком основы.
        В лыжный комплект входят лыжи (x2), лыжные палки (x2), увязки (x2) и наколенники (x2).`,
        name: "Лыжный комплект Orion X11",
        imageUrl: require('@/assets/img/ski_set.jpg')
      },
    ],
  }),
  getters: {
    isLoading(store) {
        return store.loading
    },
    getRentsNotifications() {
      const rents = useRentsStore()
      return rents.getCartItemsCount
    },
    isAuthDialogVisible(store) {
      return store.authDialogVisible
    }
  },
  actions: {
    setLoading(value) {
      this.loading = value
    },
    showAuthDialog() {
      this.authDialogVisible = true
    },
    hideAuthDialog() {
      this.authDialogVisible = false
    }
  },
})