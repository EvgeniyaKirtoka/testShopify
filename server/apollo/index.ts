import {buildSchema} from "type-graphql";

async function getSchema (){
  return await buildSchema({
    resolvers:[]
  })
}

export default getSchema
