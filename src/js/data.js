import classic from 'url:~/src/images/classic-carousel.jpg'
import loom from 'url:~/src/images/loom-carousel.jpg'
import zen from 'url:~/src/images/zen-carousel.jpg'
import jsonData from '../data/mattresses.json'

const mattresses = jsonData.mattresses
mattresses.classic.imageFileName = classic
mattresses.loom.imageFileName = loom
mattresses.zen.imageFileName = zen

export default mattresses