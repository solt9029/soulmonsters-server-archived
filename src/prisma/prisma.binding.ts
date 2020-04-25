import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    decks: <T = Array<Deck | null>>(args: { where?: DeckWhereInput | null, orderBy?: DeckOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deck: <T = Deck | null>(args: { where: DeckWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    decksConnection: <T = DeckConnection>(args: { where?: DeckWhereInput | null, orderBy?: DeckOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createDeck: <T = Deck>(args: { data: DeckCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateDeck: <T = Deck | null>(args: { data: DeckUpdateInput, where: DeckWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteDeck: <T = Deck | null>(args: { where: DeckWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertDeck: <T = Deck>(args: { where: DeckWhereUniqueInput, create: DeckCreateInput, update: DeckUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDecks: <T = BatchPayload>(args: { data: DeckUpdateManyMutationInput, where?: DeckWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDecks: <T = BatchPayload>(args: { where?: DeckWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    executeRaw: <T = Json>(args: { database?: PrismaDatabase | null, query: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    deck: <T = DeckSubscriptionPayload | null>(args: { where?: DeckSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Deck: (where?: DeckWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateDeck {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Deck implements Node {
  id: ID!
  userId: String!
  name: String!
}

"""A connection to a list of items."""
type DeckConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DeckEdge]!
  aggregate: AggregateDeck!
}

input DeckCreateInput {
  id: ID
  userId: String!
  name: String!
}

"""An edge in a connection."""
type DeckEdge {
  """The item at the end of the edge."""
  node: Deck!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DeckOrderByInput {
  id_ASC
  id_DESC
  userId_ASC
  userId_DESC
  name_ASC
  name_DESC
}

type DeckPreviousValues {
  id: ID!
  userId: String!
  name: String!
}

type DeckSubscriptionPayload {
  mutation: MutationType!
  node: Deck
  updatedFields: [String!]
  previousValues: DeckPreviousValues
}

input DeckSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DeckSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DeckSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DeckSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: DeckWhereInput
}

input DeckUpdateInput {
  userId: String
  name: String
}

input DeckUpdateManyMutationInput {
  userId: String
  name: String
}

input DeckWhereInput {
  """Logical AND on all given filters."""
  AND: [DeckWhereInput!]

  """Logical OR on all given filters."""
  OR: [DeckWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DeckWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  userId: String

  """All values that are not equal to given value."""
  userId_not: String

  """All values that are contained in given list."""
  userId_in: [String!]

  """All values that are not contained in given list."""
  userId_not_in: [String!]

  """All values less than the given value."""
  userId_lt: String

  """All values less than or equal the given value."""
  userId_lte: String

  """All values greater than the given value."""
  userId_gt: String

  """All values greater than or equal the given value."""
  userId_gte: String

  """All values containing the given string."""
  userId_contains: String

  """All values not containing the given string."""
  userId_not_contains: String

  """All values starting with the given string."""
  userId_starts_with: String

  """All values not starting with the given string."""
  userId_not_starts_with: String

  """All values ending with the given string."""
  userId_ends_with: String

  """All values not ending with the given string."""
  userId_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input DeckWhereUniqueInput {
  id: ID
}

"""Raw JSON value"""
scalar Json

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createDeck(data: DeckCreateInput!): Deck!
  updateDeck(data: DeckUpdateInput!, where: DeckWhereUniqueInput!): Deck
  deleteDeck(where: DeckWhereUniqueInput!): Deck
  upsertDeck(where: DeckWhereUniqueInput!, create: DeckCreateInput!, update: DeckUpdateInput!): Deck!
  updateManyDecks(data: DeckUpdateManyMutationInput!, where: DeckWhereInput): BatchPayload!
  deleteManyDecks(where: DeckWhereInput): BatchPayload!
  executeRaw(database: PrismaDatabase, query: String!): Json!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PrismaDatabase {
  default
}

type Query {
  decks(where: DeckWhereInput, orderBy: DeckOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Deck]!
  deck(where: DeckWhereUniqueInput!): Deck
  decksConnection(where: DeckWhereInput, orderBy: DeckOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DeckConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  deck(where: DeckSubscriptionWhereInput): DeckSubscriptionPayload
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type DeckOrderByInput =   'id_ASC' |
  'id_DESC' |
  'userId_ASC' |
  'userId_DESC' |
  'name_ASC' |
  'name_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type PrismaDatabase =   'default'

export interface DeckCreateInput {
  id?: ID_Input | null
  userId: String
  name: String
}

export interface DeckSubscriptionWhereInput {
  AND?: DeckSubscriptionWhereInput[] | DeckSubscriptionWhereInput | null
  OR?: DeckSubscriptionWhereInput[] | DeckSubscriptionWhereInput | null
  NOT?: DeckSubscriptionWhereInput[] | DeckSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: DeckWhereInput | null
}

export interface DeckUpdateInput {
  userId?: String | null
  name?: String | null
}

export interface DeckUpdateManyMutationInput {
  userId?: String | null
  name?: String | null
}

export interface DeckWhereInput {
  AND?: DeckWhereInput[] | DeckWhereInput | null
  OR?: DeckWhereInput[] | DeckWhereInput | null
  NOT?: DeckWhereInput[] | DeckWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  userId?: String | null
  userId_not?: String | null
  userId_in?: String[] | String | null
  userId_not_in?: String[] | String | null
  userId_lt?: String | null
  userId_lte?: String | null
  userId_gt?: String | null
  userId_gte?: String | null
  userId_contains?: String | null
  userId_not_contains?: String | null
  userId_starts_with?: String | null
  userId_not_starts_with?: String | null
  userId_ends_with?: String | null
  userId_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
}

export interface DeckWhereUniqueInput {
  id?: ID_Input | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateDeck {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Deck extends Node {
  id: ID_Output
  userId: String
  name: String
}

/*
 * A connection to a list of items.

 */
export interface DeckConnection {
  pageInfo: PageInfo
  edges: Array<DeckEdge | null>
  aggregate: AggregateDeck
}

/*
 * An edge in a connection.

 */
export interface DeckEdge {
  node: Deck
  cursor: String
}

export interface DeckPreviousValues {
  id: ID_Output
  userId: String
  name: String
}

export interface DeckSubscriptionPayload {
  mutation: MutationType
  node?: Deck | null
  updatedFields?: Array<String> | null
  previousValues?: DeckPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
Raw JSON value
*/
export type Json = any

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string