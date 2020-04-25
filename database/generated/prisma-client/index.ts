// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  deck: (where?: DeckWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  deck: (where: DeckWhereUniqueInput) => DeckNullablePromise;
  decks: (args?: {
    where?: DeckWhereInput;
    orderBy?: DeckOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Deck>;
  decksConnection: (args?: {
    where?: DeckWhereInput;
    orderBy?: DeckOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => DeckConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createDeck: (data: DeckCreateInput) => DeckPromise;
  updateDeck: (args: {
    data: DeckUpdateInput;
    where: DeckWhereUniqueInput;
  }) => DeckPromise;
  updateManyDecks: (args: {
    data: DeckUpdateManyMutationInput;
    where?: DeckWhereInput;
  }) => BatchPayloadPromise;
  upsertDeck: (args: {
    where: DeckWhereUniqueInput;
    create: DeckCreateInput;
    update: DeckUpdateInput;
  }) => DeckPromise;
  deleteDeck: (where: DeckWhereUniqueInput) => DeckPromise;
  deleteManyDecks: (where?: DeckWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  deck: (
    where?: DeckSubscriptionWhereInput
  ) => DeckSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type DeckOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "userId_ASC"
  | "userId_DESC"
  | "name_ASC"
  | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface DeckCreateInput {
  id?: Maybe<ID_Input>;
  userId: String;
  name: String;
}

export interface DeckUpdateInput {
  userId?: Maybe<String>;
  name?: Maybe<String>;
}

export interface DeckUpdateManyMutationInput {
  userId?: Maybe<String>;
  name?: Maybe<String>;
}

export interface DeckWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  userId?: Maybe<String>;
  userId_not?: Maybe<String>;
  userId_in?: Maybe<String[] | String>;
  userId_not_in?: Maybe<String[] | String>;
  userId_lt?: Maybe<String>;
  userId_lte?: Maybe<String>;
  userId_gt?: Maybe<String>;
  userId_gte?: Maybe<String>;
  userId_contains?: Maybe<String>;
  userId_not_contains?: Maybe<String>;
  userId_starts_with?: Maybe<String>;
  userId_not_starts_with?: Maybe<String>;
  userId_ends_with?: Maybe<String>;
  userId_not_ends_with?: Maybe<String>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  AND?: Maybe<DeckWhereInput[] | DeckWhereInput>;
  OR?: Maybe<DeckWhereInput[] | DeckWhereInput>;
  NOT?: Maybe<DeckWhereInput[] | DeckWhereInput>;
}

export interface DeckSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<DeckWhereInput>;
  AND?: Maybe<DeckSubscriptionWhereInput[] | DeckSubscriptionWhereInput>;
  OR?: Maybe<DeckSubscriptionWhereInput[] | DeckSubscriptionWhereInput>;
  NOT?: Maybe<DeckSubscriptionWhereInput[] | DeckSubscriptionWhereInput>;
}

export type DeckWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateDeck {
  count: Int;
}

export interface AggregateDeckPromise
  extends Promise<AggregateDeck>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateDeckSubscription
  extends Promise<AsyncIterator<AggregateDeck>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface DeckPreviousValues {
  id: ID_Output;
  userId: String;
  name: String;
}

export interface DeckPreviousValuesPromise
  extends Promise<DeckPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  userId: () => Promise<String>;
  name: () => Promise<String>;
}

export interface DeckPreviousValuesSubscription
  extends Promise<AsyncIterator<DeckPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  userId: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface DeckEdge {
  node: Deck;
  cursor: String;
}

export interface DeckEdgePromise extends Promise<DeckEdge>, Fragmentable {
  node: <T = DeckPromise>() => T;
  cursor: () => Promise<String>;
}

export interface DeckEdgeSubscription
  extends Promise<AsyncIterator<DeckEdge>>,
    Fragmentable {
  node: <T = DeckSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface DeckSubscriptionPayload {
  mutation: MutationType;
  node: Deck;
  updatedFields: String[];
  previousValues: DeckPreviousValues;
}

export interface DeckSubscriptionPayloadPromise
  extends Promise<DeckSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = DeckPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = DeckPreviousValuesPromise>() => T;
}

export interface DeckSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<DeckSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = DeckSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = DeckPreviousValuesSubscription>() => T;
}

export interface Deck {
  id: ID_Output;
  userId: String;
  name: String;
}

export interface DeckPromise extends Promise<Deck>, Fragmentable {
  id: () => Promise<ID_Output>;
  userId: () => Promise<String>;
  name: () => Promise<String>;
}

export interface DeckSubscription
  extends Promise<AsyncIterator<Deck>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  userId: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface DeckNullablePromise
  extends Promise<Deck | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  userId: () => Promise<String>;
  name: () => Promise<String>;
}

export interface DeckConnection {
  pageInfo: PageInfo;
  edges: DeckEdge[];
}

export interface DeckConnectionPromise
  extends Promise<DeckConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<DeckEdge>>() => T;
  aggregate: <T = AggregateDeckPromise>() => T;
}

export interface DeckConnectionSubscription
  extends Promise<AsyncIterator<DeckConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<DeckEdgeSubscription>>>() => T;
  aggregate: <T = AggregateDeckSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Deck",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
