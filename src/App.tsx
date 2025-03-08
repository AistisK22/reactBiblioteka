import Button from './Button'
import Card from './Card'
import ImageView from './ImageView'

function App() {

  return (
      <>
          <Button label="Click" variant={''} size={''} />
          <ImageView title='Beautiful landscape' imageUrl='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.devotional-reflections-from-the-bible.com%2Fimages%2F2020RF21.jpg&f=1&nofb=1&ipt=f85f4710ef77f419d33797e33d84d509ec8d31c497965449171ba3166b0d0b6a&ipo=images'/>
          <Card
              title="Click"
              shadow
              includeImage
              imageUrl={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.devotional-reflections-from-the-bible.com%2Fimages%2F2020RF21.jpg&f=1&nofb=1&ipt=f85f4710ef77f419d33797e33d84d509ec8d31c497965449171ba3166b0d0b6a&ipo=images'}
              body={'teteetetetetetetteteetetetetetetteteetetetetet'+
                  'etteteetetetetetetteteetetetetetetteteetetetetetetteteetetetetetet'
                  + 'teteetetetetetet'
              }
          />
      </>
  )
}

export default App
