import { withPhotos } from '../hoc/withPhotos.js'
import { ListOfPhotoCardsComponent } from '../Components/ListOfPhotoCards/index.js'

export const ListOfPhotoCard = withPhotos(ListOfPhotoCardsComponent)