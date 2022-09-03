import { gql } from '@apollo/client'

export const QUERY_CHARACTER = gql`
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

    query getCredits{
        character{
            _id
            credits
        }
    }
`