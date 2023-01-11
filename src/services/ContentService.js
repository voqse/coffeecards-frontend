/* eslint-disable no-use-before-define, import/prefer-default-export */
import createEventHandler from './EventHandler'

const fakeCards = [
  {
    id: '1',
    word: 'Sometimes',
    transcription: "/'sʌmtaɪmz/",
    description: 'Иногда',
    deckIds: ['1', '2', '3'],
  },
  {
    id: '2',
    word: 'Tomorrow',
    transcription: "/tə'mɒrəʊ/",
    description: 'Завтра',
    deckIds: ['2', '3'],
  },
  {
    id: '3',
    word: 'Welcome',
    transcription: "/'welkəm/",
    description: 'Добро пожаловать',
    deckIds: ['1', '2'],
  },
  {
    id: '4',
    word: 'Vegetable',
    transcription: "/'vedʒɪtəbl/",
    description: 'Овощи',
    deckIds: ['1', '3'],
  },
]

const fakeDecks = [
  {
    id: '1',
    title: 'Food',
    collectionIds: ['1', '2'],
  },
  {
    id: '2',
    title: 'Programming',
    collectionIds: ['2'],
  },
  {
    id: '2',
    title: 'Chatting',
    collectionIds: ['1'],
  },
]

const fakeCollections = [
  {
    id: '1',
    title: 'English',
  },
  {
    id: '2',
    title: 'Hebrew',
  },
]

function createContentService(options) {
  const { on, emit } = createEventHandler()

  function getCollections() {
    return fakeCollections
  }

  function getDecks(collectionId) {
    return fakeDecks.filter(({ collectionIds }) => collectionIds.includes(collectionId))
  }

  function getCards(deckId) {
    return fakeCards.filter(({ deckIds }) => deckIds.includes(deckId))
  }

  const self = {
    on,
    getCollections,
    getDecks,
    getCards,
  }

  return self
}

export { createContentService }
