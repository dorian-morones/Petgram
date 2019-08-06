import React from 'react'
import {Category} from '../Category/index.js'
import {List, Item} from './styles.js'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () => {
    return(
        <List>
            {categories.map(item => <Item key={item.id}><Category {...item} /></Item>)}
        </List>
    )
}