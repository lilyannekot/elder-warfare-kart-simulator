import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const MUTATION_ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      _id
      username
      password
    }
  }
`;

export const MUTATION_DEL_USER = gql`
    mutation deleteUser($_id: ID) {
      deleteUser(_id: $_id) {
        _id
        username
        password
        character
      }
    }
        
`;

export const MUTATION_ADD_CHARACTER = gql`
    mutation addCharacter($name: String!) {
      addCharacter(name: $name){
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
`;

// export const MUTATION_UPDATE_CHARACTER  = gql`
//     mutation updateCharacter($_id: ID)
//         updateCharacter(_id: $_id){

//         }
// `

export const MUTATION_UPDATE_CHARACTER_ITEM = gql`
    mutation updateCharacterItem($_id: ID) {
      updateChracterItem(_id: $_id){
        _id
        items {
          name
          description
        }
      }
    }   
`;
export const MUTATION_UPDATE_CHARACTER_ABILITY = gql`
    mutation updateCharacterAbility($_id: ID) {
      updateCharacterAbility(_id: $_id){
        _id
        abilities {
          name
          description
        }
      }
    }
`;
