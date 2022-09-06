import { gql } from '@apollo/client'

export const QUERY_GET_CREDITS = gql`
    query getCredits{
        character{
            _id
            credits
        }
}
`