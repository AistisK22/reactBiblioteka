import Avatar from './Avatar'
import Button from './Button'
import Card from './Card'
import Divider from './Divider'
import ImageView from './ImageView'

function App() {

  return (
      <>
          <Button label="Click" variant={'square'} size={''} />
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
          <Divider color='red' size='small' rounded/>
          <Avatar/>
      </>
  )
}

export default App
