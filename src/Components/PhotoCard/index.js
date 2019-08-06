import React from 'react'
import {ImgWrapper, Img, Button} from './styles.js'
import { MdFavoriteBorder} from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
export const PhotoCard = ({id, likes=0, src}) => (
    <article>
        <a href={`/details/${id}`}>
            <ImgWrapper>
                <Img src={src}/>
            </ImgWrapper>
        </a>
        <Button>
            <MdFavoriteBorder size='20px' />{likes } likes!
        </Button>
    </article>
)