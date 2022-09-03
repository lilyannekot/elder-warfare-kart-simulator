import { gql } from '@apollo/client'

export const QUERY_GET_CHARACTER = gql`
    query getCharacter{
        character{
            _id
            name
            hp
            damage
            hitChance
            dodge
            credits
            items
            abilities
        }
    }
`

export const QUERY_GET_CREDITS = gql`
    query getCredits{
        character{
            _id
            credits
        }
}
`