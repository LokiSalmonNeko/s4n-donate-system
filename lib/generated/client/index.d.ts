
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Donation
 * 
 */
export type Donation = $Result.DefaultSelection<Prisma.$DonationPayload>
/**
 * Model AlertSettings
 * 
 */
export type AlertSettings = $Result.DefaultSelection<Prisma.$AlertSettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donation`: Exposes CRUD operations for the **Donation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donations
    * const donations = await prisma.donation.findMany()
    * ```
    */
  get donation(): Prisma.DonationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alertSettings`: Exposes CRUD operations for the **AlertSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlertSettings
    * const alertSettings = await prisma.alertSettings.findMany()
    * ```
    */
  get alertSettings(): Prisma.AlertSettingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Donation: 'Donation',
    AlertSettings: 'AlertSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "donation" | "alertSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Donation: {
        payload: Prisma.$DonationPayload<ExtArgs>
        fields: Prisma.DonationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findFirst: {
            args: Prisma.DonationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findMany: {
            args: Prisma.DonationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          create: {
            args: Prisma.DonationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          createMany: {
            args: Prisma.DonationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          delete: {
            args: Prisma.DonationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          update: {
            args: Prisma.DonationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          deleteMany: {
            args: Prisma.DonationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          upsert: {
            args: Prisma.DonationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          aggregate: {
            args: Prisma.DonationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonation>
          }
          groupBy: {
            args: Prisma.DonationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationCountArgs<ExtArgs>
            result: $Utils.Optional<DonationCountAggregateOutputType> | number
          }
        }
      }
      AlertSettings: {
        payload: Prisma.$AlertSettingsPayload<ExtArgs>
        fields: Prisma.AlertSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSettingsPayload>
          }
          findFirst: {
            args: Prisma.AlertSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSettingsPayload>
          }
          findMany: {
            args: Prisma.AlertSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSettingsPayload>[]
          }
          create: {
            args: Prisma.AlertSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSettingsPayload>
          }
          createMany: {
            args: Prisma.AlertSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSettingsPayload>[]
          }
          delete: {
            args: Prisma.AlertSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSettingsPayload>
          }
          update: {
            args: Prisma.AlertSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSettingsPayload>
          }
          deleteMany: {
            args: Prisma.AlertSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSettingsPayload>[]
          }
          upsert: {
            args: Prisma.AlertSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertSettingsPayload>
          }
          aggregate: {
            args: Prisma.AlertSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlertSettings>
          }
          groupBy: {
            args: Prisma.AlertSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<AlertSettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    donation?: DonationOmit
    alertSettings?: AlertSettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Donation
   */

  export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  export type DonationAvgAggregateOutputType = {
    amount: number | null
  }

  export type DonationSumAggregateOutputType = {
    amount: number | null
  }

  export type DonationMinAggregateOutputType = {
    id: string | null
    amount: number | null
    message: string | null
    donorName: string | null
    status: string | null
    paymentMethod: string | null
    paymentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonationMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    message: string | null
    donorName: string | null
    status: string | null
    paymentMethod: string | null
    paymentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonationCountAggregateOutputType = {
    id: number
    amount: number
    message: number
    donorName: number
    status: number
    paymentMethod: number
    paymentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DonationAvgAggregateInputType = {
    amount?: true
  }

  export type DonationSumAggregateInputType = {
    amount?: true
  }

  export type DonationMinAggregateInputType = {
    id?: true
    amount?: true
    message?: true
    donorName?: true
    status?: true
    paymentMethod?: true
    paymentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonationMaxAggregateInputType = {
    id?: true
    amount?: true
    message?: true
    donorName?: true
    status?: true
    paymentMethod?: true
    paymentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonationCountAggregateInputType = {
    id?: true
    amount?: true
    message?: true
    donorName?: true
    status?: true
    paymentMethod?: true
    paymentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donation to aggregate.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donations
    **/
    _count?: true | DonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationMaxAggregateInputType
  }

  export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
        [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonation[P]>
      : GetScalarType<T[P], AggregateDonation[P]>
  }




  export type DonationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithAggregationInput | DonationOrderByWithAggregationInput[]
    by: DonationScalarFieldEnum[] | DonationScalarFieldEnum
    having?: DonationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationCountAggregateInputType | true
    _avg?: DonationAvgAggregateInputType
    _sum?: DonationSumAggregateInputType
    _min?: DonationMinAggregateInputType
    _max?: DonationMaxAggregateInputType
  }

  export type DonationGroupByOutputType = {
    id: string
    amount: number
    message: string | null
    donorName: string
    status: string
    paymentMethod: string
    paymentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  type GetDonationGroupByPayload<T extends DonationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGroupByOutputType[P]>
        }
      >
    >


  export type DonationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    message?: boolean
    donorName?: boolean
    status?: boolean
    paymentMethod?: boolean
    paymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    message?: boolean
    donorName?: boolean
    status?: boolean
    paymentMethod?: boolean
    paymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    message?: boolean
    donorName?: boolean
    status?: boolean
    paymentMethod?: boolean
    paymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectScalar = {
    id?: boolean
    amount?: boolean
    message?: boolean
    donorName?: boolean
    status?: boolean
    paymentMethod?: boolean
    paymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DonationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "message" | "donorName" | "status" | "paymentMethod" | "paymentId" | "createdAt" | "updatedAt", ExtArgs["result"]["donation"]>

  export type $DonationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      message: string | null
      donorName: string
      status: string
      paymentMethod: string
      paymentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["donation"]>
    composites: {}
  }

  type DonationGetPayload<S extends boolean | null | undefined | DonationDefaultArgs> = $Result.GetResult<Prisma.$DonationPayload, S>

  type DonationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationCountAggregateInputType | true
    }

  export interface DonationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donation'], meta: { name: 'Donation' } }
    /**
     * Find zero or one Donation that matches the filter.
     * @param {DonationFindUniqueArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationFindUniqueArgs>(args: SelectSubset<T, DonationFindUniqueArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationFindUniqueOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationFindFirstArgs>(args?: SelectSubset<T, DonationFindFirstArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donation.findMany()
     * 
     * // Get first 10 Donations
     * const donations = await prisma.donation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationWithIdOnly = await prisma.donation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationFindManyArgs>(args?: SelectSubset<T, DonationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donation.
     * @param {DonationCreateArgs} args - Arguments to create a Donation.
     * @example
     * // Create one Donation
     * const Donation = await prisma.donation.create({
     *   data: {
     *     // ... data to create a Donation
     *   }
     * })
     * 
     */
    create<T extends DonationCreateArgs>(args: SelectSubset<T, DonationCreateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donations.
     * @param {DonationCreateManyArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationCreateManyArgs>(args?: SelectSubset<T, DonationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donations and returns the data saved in the database.
     * @param {DonationCreateManyAndReturnArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donation.
     * @param {DonationDeleteArgs} args - Arguments to delete one Donation.
     * @example
     * // Delete one Donation
     * const Donation = await prisma.donation.delete({
     *   where: {
     *     // ... filter to delete one Donation
     *   }
     * })
     * 
     */
    delete<T extends DonationDeleteArgs>(args: SelectSubset<T, DonationDeleteArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donation.
     * @param {DonationUpdateArgs} args - Arguments to update one Donation.
     * @example
     * // Update one Donation
     * const donation = await prisma.donation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationUpdateArgs>(args: SelectSubset<T, DonationUpdateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donations.
     * @param {DonationDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationDeleteManyArgs>(args?: SelectSubset<T, DonationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationUpdateManyArgs>(args: SelectSubset<T, DonationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations and returns the data updated in the database.
     * @param {DonationUpdateManyAndReturnArgs} args - Arguments to update many Donations.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonationUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donation.
     * @param {DonationUpsertArgs} args - Arguments to update or create a Donation.
     * @example
     * // Update or create a Donation
     * const donation = await prisma.donation.upsert({
     *   create: {
     *     // ... data to create a Donation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donation we want to update
     *   }
     * })
     */
    upsert<T extends DonationUpsertArgs>(args: SelectSubset<T, DonationUpsertArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donation.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
    **/
    count<T extends DonationCountArgs>(
      args?: Subset<T, DonationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationAggregateArgs>(args: Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>

    /**
     * Group by Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationGroupByArgs['orderBy'] }
        : { orderBy?: DonationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donation model
   */
  readonly fields: DonationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Donation model
   */
  interface DonationFieldRefs {
    readonly id: FieldRef<"Donation", 'String'>
    readonly amount: FieldRef<"Donation", 'Int'>
    readonly message: FieldRef<"Donation", 'String'>
    readonly donorName: FieldRef<"Donation", 'String'>
    readonly status: FieldRef<"Donation", 'String'>
    readonly paymentMethod: FieldRef<"Donation", 'String'>
    readonly paymentId: FieldRef<"Donation", 'String'>
    readonly createdAt: FieldRef<"Donation", 'DateTime'>
    readonly updatedAt: FieldRef<"Donation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Donation findUnique
   */
  export type DonationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findUniqueOrThrow
   */
  export type DonationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findFirst
   */
  export type DonationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findFirstOrThrow
   */
  export type DonationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findMany
   */
  export type DonationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Filter, which Donations to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation create
   */
  export type DonationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data needed to create a Donation.
     */
    data: XOR<DonationCreateInput, DonationUncheckedCreateInput>
  }

  /**
   * Donation createMany
   */
  export type DonationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donation createManyAndReturn
   */
  export type DonationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donation update
   */
  export type DonationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data needed to update a Donation.
     */
    data: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
    /**
     * Choose, which Donation to update.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation updateMany
   */
  export type DonationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
  }

  /**
   * Donation updateManyAndReturn
   */
  export type DonationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
  }

  /**
   * Donation upsert
   */
  export type DonationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The filter to search for the Donation to update in case it exists.
     */
    where: DonationWhereUniqueInput
    /**
     * In case the Donation found by the `where` argument doesn't exist, create a new Donation with this data.
     */
    create: XOR<DonationCreateInput, DonationUncheckedCreateInput>
    /**
     * In case the Donation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
  }

  /**
   * Donation delete
   */
  export type DonationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Filter which Donation to delete.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation deleteMany
   */
  export type DonationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donations to delete
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to delete.
     */
    limit?: number
  }

  /**
   * Donation without action
   */
  export type DonationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
  }


  /**
   * Model AlertSettings
   */

  export type AggregateAlertSettings = {
    _count: AlertSettingsCountAggregateOutputType | null
    _avg: AlertSettingsAvgAggregateOutputType | null
    _sum: AlertSettingsSumAggregateOutputType | null
    _min: AlertSettingsMinAggregateOutputType | null
    _max: AlertSettingsMaxAggregateOutputType | null
  }

  export type AlertSettingsAvgAggregateOutputType = {
    duration: number | null
    fontSize: number | null
    animationDuration: number | null
    alertWidth: number | null
  }

  export type AlertSettingsSumAggregateOutputType = {
    duration: number | null
    fontSize: number | null
    animationDuration: number | null
    alertWidth: number | null
  }

  export type AlertSettingsMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    soundUrl: string | null
    fontFamily: string | null
    duration: number | null
    animationType: string | null
    textColor: string | null
    amountColor: string | null
    fontSize: number | null
    animationDuration: number | null
    backgroundColor: string | null
    borderColor: string | null
    alertWidth: number | null
    verticalAlign: string | null
    horizontalAlign: string | null
    bannerUrl: string | null
    logoUrl: string | null
    siteName: string | null
    enableEcpay: boolean | null
    enableOpay: boolean | null
    messageTemplate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertSettingsMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    soundUrl: string | null
    fontFamily: string | null
    duration: number | null
    animationType: string | null
    textColor: string | null
    amountColor: string | null
    fontSize: number | null
    animationDuration: number | null
    backgroundColor: string | null
    borderColor: string | null
    alertWidth: number | null
    verticalAlign: string | null
    horizontalAlign: string | null
    bannerUrl: string | null
    logoUrl: string | null
    siteName: string | null
    enableEcpay: boolean | null
    enableOpay: boolean | null
    messageTemplate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertSettingsCountAggregateOutputType = {
    id: number
    imageUrl: number
    soundUrl: number
    fontFamily: number
    duration: number
    animationType: number
    textColor: number
    amountColor: number
    fontSize: number
    animationDuration: number
    backgroundColor: number
    borderColor: number
    alertWidth: number
    verticalAlign: number
    horizontalAlign: number
    bannerUrl: number
    logoUrl: number
    siteName: number
    enableEcpay: number
    enableOpay: number
    messageTemplate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlertSettingsAvgAggregateInputType = {
    duration?: true
    fontSize?: true
    animationDuration?: true
    alertWidth?: true
  }

  export type AlertSettingsSumAggregateInputType = {
    duration?: true
    fontSize?: true
    animationDuration?: true
    alertWidth?: true
  }

  export type AlertSettingsMinAggregateInputType = {
    id?: true
    imageUrl?: true
    soundUrl?: true
    fontFamily?: true
    duration?: true
    animationType?: true
    textColor?: true
    amountColor?: true
    fontSize?: true
    animationDuration?: true
    backgroundColor?: true
    borderColor?: true
    alertWidth?: true
    verticalAlign?: true
    horizontalAlign?: true
    bannerUrl?: true
    logoUrl?: true
    siteName?: true
    enableEcpay?: true
    enableOpay?: true
    messageTemplate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertSettingsMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    soundUrl?: true
    fontFamily?: true
    duration?: true
    animationType?: true
    textColor?: true
    amountColor?: true
    fontSize?: true
    animationDuration?: true
    backgroundColor?: true
    borderColor?: true
    alertWidth?: true
    verticalAlign?: true
    horizontalAlign?: true
    bannerUrl?: true
    logoUrl?: true
    siteName?: true
    enableEcpay?: true
    enableOpay?: true
    messageTemplate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertSettingsCountAggregateInputType = {
    id?: true
    imageUrl?: true
    soundUrl?: true
    fontFamily?: true
    duration?: true
    animationType?: true
    textColor?: true
    amountColor?: true
    fontSize?: true
    animationDuration?: true
    backgroundColor?: true
    borderColor?: true
    alertWidth?: true
    verticalAlign?: true
    horizontalAlign?: true
    bannerUrl?: true
    logoUrl?: true
    siteName?: true
    enableEcpay?: true
    enableOpay?: true
    messageTemplate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlertSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertSettings to aggregate.
     */
    where?: AlertSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertSettings to fetch.
     */
    orderBy?: AlertSettingsOrderByWithRelationInput | AlertSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlertSettings
    **/
    _count?: true | AlertSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertSettingsMaxAggregateInputType
  }

  export type GetAlertSettingsAggregateType<T extends AlertSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateAlertSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlertSettings[P]>
      : GetScalarType<T[P], AggregateAlertSettings[P]>
  }




  export type AlertSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertSettingsWhereInput
    orderBy?: AlertSettingsOrderByWithAggregationInput | AlertSettingsOrderByWithAggregationInput[]
    by: AlertSettingsScalarFieldEnum[] | AlertSettingsScalarFieldEnum
    having?: AlertSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertSettingsCountAggregateInputType | true
    _avg?: AlertSettingsAvgAggregateInputType
    _sum?: AlertSettingsSumAggregateInputType
    _min?: AlertSettingsMinAggregateInputType
    _max?: AlertSettingsMaxAggregateInputType
  }

  export type AlertSettingsGroupByOutputType = {
    id: string
    imageUrl: string | null
    soundUrl: string | null
    fontFamily: string
    duration: number
    animationType: string
    textColor: string
    amountColor: string
    fontSize: number
    animationDuration: number
    backgroundColor: string
    borderColor: string
    alertWidth: number
    verticalAlign: string
    horizontalAlign: string
    bannerUrl: string | null
    logoUrl: string | null
    siteName: string
    enableEcpay: boolean
    enableOpay: boolean
    messageTemplate: string
    createdAt: Date
    updatedAt: Date
    _count: AlertSettingsCountAggregateOutputType | null
    _avg: AlertSettingsAvgAggregateOutputType | null
    _sum: AlertSettingsSumAggregateOutputType | null
    _min: AlertSettingsMinAggregateOutputType | null
    _max: AlertSettingsMaxAggregateOutputType | null
  }

  type GetAlertSettingsGroupByPayload<T extends AlertSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], AlertSettingsGroupByOutputType[P]>
        }
      >
    >


  export type AlertSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    soundUrl?: boolean
    fontFamily?: boolean
    duration?: boolean
    animationType?: boolean
    textColor?: boolean
    amountColor?: boolean
    fontSize?: boolean
    animationDuration?: boolean
    backgroundColor?: boolean
    borderColor?: boolean
    alertWidth?: boolean
    verticalAlign?: boolean
    horizontalAlign?: boolean
    bannerUrl?: boolean
    logoUrl?: boolean
    siteName?: boolean
    enableEcpay?: boolean
    enableOpay?: boolean
    messageTemplate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alertSettings"]>

  export type AlertSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    soundUrl?: boolean
    fontFamily?: boolean
    duration?: boolean
    animationType?: boolean
    textColor?: boolean
    amountColor?: boolean
    fontSize?: boolean
    animationDuration?: boolean
    backgroundColor?: boolean
    borderColor?: boolean
    alertWidth?: boolean
    verticalAlign?: boolean
    horizontalAlign?: boolean
    bannerUrl?: boolean
    logoUrl?: boolean
    siteName?: boolean
    enableEcpay?: boolean
    enableOpay?: boolean
    messageTemplate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alertSettings"]>

  export type AlertSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    soundUrl?: boolean
    fontFamily?: boolean
    duration?: boolean
    animationType?: boolean
    textColor?: boolean
    amountColor?: boolean
    fontSize?: boolean
    animationDuration?: boolean
    backgroundColor?: boolean
    borderColor?: boolean
    alertWidth?: boolean
    verticalAlign?: boolean
    horizontalAlign?: boolean
    bannerUrl?: boolean
    logoUrl?: boolean
    siteName?: boolean
    enableEcpay?: boolean
    enableOpay?: boolean
    messageTemplate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alertSettings"]>

  export type AlertSettingsSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    soundUrl?: boolean
    fontFamily?: boolean
    duration?: boolean
    animationType?: boolean
    textColor?: boolean
    amountColor?: boolean
    fontSize?: boolean
    animationDuration?: boolean
    backgroundColor?: boolean
    borderColor?: boolean
    alertWidth?: boolean
    verticalAlign?: boolean
    horizontalAlign?: boolean
    bannerUrl?: boolean
    logoUrl?: boolean
    siteName?: boolean
    enableEcpay?: boolean
    enableOpay?: boolean
    messageTemplate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlertSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "soundUrl" | "fontFamily" | "duration" | "animationType" | "textColor" | "amountColor" | "fontSize" | "animationDuration" | "backgroundColor" | "borderColor" | "alertWidth" | "verticalAlign" | "horizontalAlign" | "bannerUrl" | "logoUrl" | "siteName" | "enableEcpay" | "enableOpay" | "messageTemplate" | "createdAt" | "updatedAt", ExtArgs["result"]["alertSettings"]>

  export type $AlertSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlertSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string | null
      soundUrl: string | null
      fontFamily: string
      duration: number
      animationType: string
      textColor: string
      amountColor: string
      fontSize: number
      animationDuration: number
      backgroundColor: string
      borderColor: string
      alertWidth: number
      verticalAlign: string
      horizontalAlign: string
      bannerUrl: string | null
      logoUrl: string | null
      siteName: string
      enableEcpay: boolean
      enableOpay: boolean
      messageTemplate: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alertSettings"]>
    composites: {}
  }

  type AlertSettingsGetPayload<S extends boolean | null | undefined | AlertSettingsDefaultArgs> = $Result.GetResult<Prisma.$AlertSettingsPayload, S>

  type AlertSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertSettingsCountAggregateInputType | true
    }

  export interface AlertSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlertSettings'], meta: { name: 'AlertSettings' } }
    /**
     * Find zero or one AlertSettings that matches the filter.
     * @param {AlertSettingsFindUniqueArgs} args - Arguments to find a AlertSettings
     * @example
     * // Get one AlertSettings
     * const alertSettings = await prisma.alertSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertSettingsFindUniqueArgs>(args: SelectSubset<T, AlertSettingsFindUniqueArgs<ExtArgs>>): Prisma__AlertSettingsClient<$Result.GetResult<Prisma.$AlertSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlertSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertSettingsFindUniqueOrThrowArgs} args - Arguments to find a AlertSettings
     * @example
     * // Get one AlertSettings
     * const alertSettings = await prisma.alertSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertSettingsClient<$Result.GetResult<Prisma.$AlertSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlertSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertSettingsFindFirstArgs} args - Arguments to find a AlertSettings
     * @example
     * // Get one AlertSettings
     * const alertSettings = await prisma.alertSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertSettingsFindFirstArgs>(args?: SelectSubset<T, AlertSettingsFindFirstArgs<ExtArgs>>): Prisma__AlertSettingsClient<$Result.GetResult<Prisma.$AlertSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlertSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertSettingsFindFirstOrThrowArgs} args - Arguments to find a AlertSettings
     * @example
     * // Get one AlertSettings
     * const alertSettings = await prisma.alertSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertSettingsClient<$Result.GetResult<Prisma.$AlertSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlertSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlertSettings
     * const alertSettings = await prisma.alertSettings.findMany()
     * 
     * // Get first 10 AlertSettings
     * const alertSettings = await prisma.alertSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertSettingsWithIdOnly = await prisma.alertSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertSettingsFindManyArgs>(args?: SelectSubset<T, AlertSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlertSettings.
     * @param {AlertSettingsCreateArgs} args - Arguments to create a AlertSettings.
     * @example
     * // Create one AlertSettings
     * const AlertSettings = await prisma.alertSettings.create({
     *   data: {
     *     // ... data to create a AlertSettings
     *   }
     * })
     * 
     */
    create<T extends AlertSettingsCreateArgs>(args: SelectSubset<T, AlertSettingsCreateArgs<ExtArgs>>): Prisma__AlertSettingsClient<$Result.GetResult<Prisma.$AlertSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlertSettings.
     * @param {AlertSettingsCreateManyArgs} args - Arguments to create many AlertSettings.
     * @example
     * // Create many AlertSettings
     * const alertSettings = await prisma.alertSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertSettingsCreateManyArgs>(args?: SelectSubset<T, AlertSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlertSettings and returns the data saved in the database.
     * @param {AlertSettingsCreateManyAndReturnArgs} args - Arguments to create many AlertSettings.
     * @example
     * // Create many AlertSettings
     * const alertSettings = await prisma.alertSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlertSettings and only return the `id`
     * const alertSettingsWithIdOnly = await prisma.alertSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlertSettings.
     * @param {AlertSettingsDeleteArgs} args - Arguments to delete one AlertSettings.
     * @example
     * // Delete one AlertSettings
     * const AlertSettings = await prisma.alertSettings.delete({
     *   where: {
     *     // ... filter to delete one AlertSettings
     *   }
     * })
     * 
     */
    delete<T extends AlertSettingsDeleteArgs>(args: SelectSubset<T, AlertSettingsDeleteArgs<ExtArgs>>): Prisma__AlertSettingsClient<$Result.GetResult<Prisma.$AlertSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlertSettings.
     * @param {AlertSettingsUpdateArgs} args - Arguments to update one AlertSettings.
     * @example
     * // Update one AlertSettings
     * const alertSettings = await prisma.alertSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertSettingsUpdateArgs>(args: SelectSubset<T, AlertSettingsUpdateArgs<ExtArgs>>): Prisma__AlertSettingsClient<$Result.GetResult<Prisma.$AlertSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlertSettings.
     * @param {AlertSettingsDeleteManyArgs} args - Arguments to filter AlertSettings to delete.
     * @example
     * // Delete a few AlertSettings
     * const { count } = await prisma.alertSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertSettingsDeleteManyArgs>(args?: SelectSubset<T, AlertSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlertSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlertSettings
     * const alertSettings = await prisma.alertSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertSettingsUpdateManyArgs>(args: SelectSubset<T, AlertSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlertSettings and returns the data updated in the database.
     * @param {AlertSettingsUpdateManyAndReturnArgs} args - Arguments to update many AlertSettings.
     * @example
     * // Update many AlertSettings
     * const alertSettings = await prisma.alertSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlertSettings and only return the `id`
     * const alertSettingsWithIdOnly = await prisma.alertSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlertSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlertSettings.
     * @param {AlertSettingsUpsertArgs} args - Arguments to update or create a AlertSettings.
     * @example
     * // Update or create a AlertSettings
     * const alertSettings = await prisma.alertSettings.upsert({
     *   create: {
     *     // ... data to create a AlertSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlertSettings we want to update
     *   }
     * })
     */
    upsert<T extends AlertSettingsUpsertArgs>(args: SelectSubset<T, AlertSettingsUpsertArgs<ExtArgs>>): Prisma__AlertSettingsClient<$Result.GetResult<Prisma.$AlertSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlertSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertSettingsCountArgs} args - Arguments to filter AlertSettings to count.
     * @example
     * // Count the number of AlertSettings
     * const count = await prisma.alertSettings.count({
     *   where: {
     *     // ... the filter for the AlertSettings we want to count
     *   }
     * })
    **/
    count<T extends AlertSettingsCountArgs>(
      args?: Subset<T, AlertSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlertSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertSettingsAggregateArgs>(args: Subset<T, AlertSettingsAggregateArgs>): Prisma.PrismaPromise<GetAlertSettingsAggregateType<T>>

    /**
     * Group by AlertSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlertSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertSettingsGroupByArgs['orderBy'] }
        : { orderBy?: AlertSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlertSettings model
   */
  readonly fields: AlertSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlertSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AlertSettings model
   */
  interface AlertSettingsFieldRefs {
    readonly id: FieldRef<"AlertSettings", 'String'>
    readonly imageUrl: FieldRef<"AlertSettings", 'String'>
    readonly soundUrl: FieldRef<"AlertSettings", 'String'>
    readonly fontFamily: FieldRef<"AlertSettings", 'String'>
    readonly duration: FieldRef<"AlertSettings", 'Int'>
    readonly animationType: FieldRef<"AlertSettings", 'String'>
    readonly textColor: FieldRef<"AlertSettings", 'String'>
    readonly amountColor: FieldRef<"AlertSettings", 'String'>
    readonly fontSize: FieldRef<"AlertSettings", 'Int'>
    readonly animationDuration: FieldRef<"AlertSettings", 'Int'>
    readonly backgroundColor: FieldRef<"AlertSettings", 'String'>
    readonly borderColor: FieldRef<"AlertSettings", 'String'>
    readonly alertWidth: FieldRef<"AlertSettings", 'Int'>
    readonly verticalAlign: FieldRef<"AlertSettings", 'String'>
    readonly horizontalAlign: FieldRef<"AlertSettings", 'String'>
    readonly bannerUrl: FieldRef<"AlertSettings", 'String'>
    readonly logoUrl: FieldRef<"AlertSettings", 'String'>
    readonly siteName: FieldRef<"AlertSettings", 'String'>
    readonly enableEcpay: FieldRef<"AlertSettings", 'Boolean'>
    readonly enableOpay: FieldRef<"AlertSettings", 'Boolean'>
    readonly messageTemplate: FieldRef<"AlertSettings", 'String'>
    readonly createdAt: FieldRef<"AlertSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"AlertSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlertSettings findUnique
   */
  export type AlertSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSettings
     */
    select?: AlertSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertSettings
     */
    omit?: AlertSettingsOmit<ExtArgs> | null
    /**
     * Filter, which AlertSettings to fetch.
     */
    where: AlertSettingsWhereUniqueInput
  }

  /**
   * AlertSettings findUniqueOrThrow
   */
  export type AlertSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSettings
     */
    select?: AlertSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertSettings
     */
    omit?: AlertSettingsOmit<ExtArgs> | null
    /**
     * Filter, which AlertSettings to fetch.
     */
    where: AlertSettingsWhereUniqueInput
  }

  /**
   * AlertSettings findFirst
   */
  export type AlertSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSettings
     */
    select?: AlertSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertSettings
     */
    omit?: AlertSettingsOmit<ExtArgs> | null
    /**
     * Filter, which AlertSettings to fetch.
     */
    where?: AlertSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertSettings to fetch.
     */
    orderBy?: AlertSettingsOrderByWithRelationInput | AlertSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertSettings.
     */
    cursor?: AlertSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertSettings.
     */
    distinct?: AlertSettingsScalarFieldEnum | AlertSettingsScalarFieldEnum[]
  }

  /**
   * AlertSettings findFirstOrThrow
   */
  export type AlertSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSettings
     */
    select?: AlertSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertSettings
     */
    omit?: AlertSettingsOmit<ExtArgs> | null
    /**
     * Filter, which AlertSettings to fetch.
     */
    where?: AlertSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertSettings to fetch.
     */
    orderBy?: AlertSettingsOrderByWithRelationInput | AlertSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertSettings.
     */
    cursor?: AlertSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertSettings.
     */
    distinct?: AlertSettingsScalarFieldEnum | AlertSettingsScalarFieldEnum[]
  }

  /**
   * AlertSettings findMany
   */
  export type AlertSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSettings
     */
    select?: AlertSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertSettings
     */
    omit?: AlertSettingsOmit<ExtArgs> | null
    /**
     * Filter, which AlertSettings to fetch.
     */
    where?: AlertSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertSettings to fetch.
     */
    orderBy?: AlertSettingsOrderByWithRelationInput | AlertSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlertSettings.
     */
    cursor?: AlertSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertSettings.
     */
    skip?: number
    distinct?: AlertSettingsScalarFieldEnum | AlertSettingsScalarFieldEnum[]
  }

  /**
   * AlertSettings create
   */
  export type AlertSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSettings
     */
    select?: AlertSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertSettings
     */
    omit?: AlertSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a AlertSettings.
     */
    data: XOR<AlertSettingsCreateInput, AlertSettingsUncheckedCreateInput>
  }

  /**
   * AlertSettings createMany
   */
  export type AlertSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlertSettings.
     */
    data: AlertSettingsCreateManyInput | AlertSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlertSettings createManyAndReturn
   */
  export type AlertSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSettings
     */
    select?: AlertSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlertSettings
     */
    omit?: AlertSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many AlertSettings.
     */
    data: AlertSettingsCreateManyInput | AlertSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlertSettings update
   */
  export type AlertSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSettings
     */
    select?: AlertSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertSettings
     */
    omit?: AlertSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a AlertSettings.
     */
    data: XOR<AlertSettingsUpdateInput, AlertSettingsUncheckedUpdateInput>
    /**
     * Choose, which AlertSettings to update.
     */
    where: AlertSettingsWhereUniqueInput
  }

  /**
   * AlertSettings updateMany
   */
  export type AlertSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlertSettings.
     */
    data: XOR<AlertSettingsUpdateManyMutationInput, AlertSettingsUncheckedUpdateManyInput>
    /**
     * Filter which AlertSettings to update
     */
    where?: AlertSettingsWhereInput
    /**
     * Limit how many AlertSettings to update.
     */
    limit?: number
  }

  /**
   * AlertSettings updateManyAndReturn
   */
  export type AlertSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSettings
     */
    select?: AlertSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlertSettings
     */
    omit?: AlertSettingsOmit<ExtArgs> | null
    /**
     * The data used to update AlertSettings.
     */
    data: XOR<AlertSettingsUpdateManyMutationInput, AlertSettingsUncheckedUpdateManyInput>
    /**
     * Filter which AlertSettings to update
     */
    where?: AlertSettingsWhereInput
    /**
     * Limit how many AlertSettings to update.
     */
    limit?: number
  }

  /**
   * AlertSettings upsert
   */
  export type AlertSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSettings
     */
    select?: AlertSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertSettings
     */
    omit?: AlertSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the AlertSettings to update in case it exists.
     */
    where: AlertSettingsWhereUniqueInput
    /**
     * In case the AlertSettings found by the `where` argument doesn't exist, create a new AlertSettings with this data.
     */
    create: XOR<AlertSettingsCreateInput, AlertSettingsUncheckedCreateInput>
    /**
     * In case the AlertSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertSettingsUpdateInput, AlertSettingsUncheckedUpdateInput>
  }

  /**
   * AlertSettings delete
   */
  export type AlertSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSettings
     */
    select?: AlertSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertSettings
     */
    omit?: AlertSettingsOmit<ExtArgs> | null
    /**
     * Filter which AlertSettings to delete.
     */
    where: AlertSettingsWhereUniqueInput
  }

  /**
   * AlertSettings deleteMany
   */
  export type AlertSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertSettings to delete
     */
    where?: AlertSettingsWhereInput
    /**
     * Limit how many AlertSettings to delete.
     */
    limit?: number
  }

  /**
   * AlertSettings without action
   */
  export type AlertSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertSettings
     */
    select?: AlertSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertSettings
     */
    omit?: AlertSettingsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DonationScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    message: 'message',
    donorName: 'donorName',
    status: 'status',
    paymentMethod: 'paymentMethod',
    paymentId: 'paymentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum]


  export const AlertSettingsScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    soundUrl: 'soundUrl',
    fontFamily: 'fontFamily',
    duration: 'duration',
    animationType: 'animationType',
    textColor: 'textColor',
    amountColor: 'amountColor',
    fontSize: 'fontSize',
    animationDuration: 'animationDuration',
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
    alertWidth: 'alertWidth',
    verticalAlign: 'verticalAlign',
    horizontalAlign: 'horizontalAlign',
    bannerUrl: 'bannerUrl',
    logoUrl: 'logoUrl',
    siteName: 'siteName',
    enableEcpay: 'enableEcpay',
    enableOpay: 'enableOpay',
    messageTemplate: 'messageTemplate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlertSettingsScalarFieldEnum = (typeof AlertSettingsScalarFieldEnum)[keyof typeof AlertSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DonationWhereInput = {
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    id?: StringFilter<"Donation"> | string
    amount?: IntFilter<"Donation"> | number
    message?: StringNullableFilter<"Donation"> | string | null
    donorName?: StringFilter<"Donation"> | string
    status?: StringFilter<"Donation"> | string
    paymentMethod?: StringFilter<"Donation"> | string
    paymentId?: StringNullableFilter<"Donation"> | string | null
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
  }

  export type DonationOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    message?: SortOrderInput | SortOrder
    donorName?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    amount?: IntFilter<"Donation"> | number
    message?: StringNullableFilter<"Donation"> | string | null
    donorName?: StringFilter<"Donation"> | string
    status?: StringFilter<"Donation"> | string
    paymentMethod?: StringFilter<"Donation"> | string
    paymentId?: StringNullableFilter<"Donation"> | string | null
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
  }, "id">

  export type DonationOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    message?: SortOrderInput | SortOrder
    donorName?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DonationCountOrderByAggregateInput
    _avg?: DonationAvgOrderByAggregateInput
    _max?: DonationMaxOrderByAggregateInput
    _min?: DonationMinOrderByAggregateInput
    _sum?: DonationSumOrderByAggregateInput
  }

  export type DonationScalarWhereWithAggregatesInput = {
    AND?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    OR?: DonationScalarWhereWithAggregatesInput[]
    NOT?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Donation"> | string
    amount?: IntWithAggregatesFilter<"Donation"> | number
    message?: StringNullableWithAggregatesFilter<"Donation"> | string | null
    donorName?: StringWithAggregatesFilter<"Donation"> | string
    status?: StringWithAggregatesFilter<"Donation"> | string
    paymentMethod?: StringWithAggregatesFilter<"Donation"> | string
    paymentId?: StringNullableWithAggregatesFilter<"Donation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
  }

  export type AlertSettingsWhereInput = {
    AND?: AlertSettingsWhereInput | AlertSettingsWhereInput[]
    OR?: AlertSettingsWhereInput[]
    NOT?: AlertSettingsWhereInput | AlertSettingsWhereInput[]
    id?: StringFilter<"AlertSettings"> | string
    imageUrl?: StringNullableFilter<"AlertSettings"> | string | null
    soundUrl?: StringNullableFilter<"AlertSettings"> | string | null
    fontFamily?: StringFilter<"AlertSettings"> | string
    duration?: IntFilter<"AlertSettings"> | number
    animationType?: StringFilter<"AlertSettings"> | string
    textColor?: StringFilter<"AlertSettings"> | string
    amountColor?: StringFilter<"AlertSettings"> | string
    fontSize?: IntFilter<"AlertSettings"> | number
    animationDuration?: IntFilter<"AlertSettings"> | number
    backgroundColor?: StringFilter<"AlertSettings"> | string
    borderColor?: StringFilter<"AlertSettings"> | string
    alertWidth?: IntFilter<"AlertSettings"> | number
    verticalAlign?: StringFilter<"AlertSettings"> | string
    horizontalAlign?: StringFilter<"AlertSettings"> | string
    bannerUrl?: StringNullableFilter<"AlertSettings"> | string | null
    logoUrl?: StringNullableFilter<"AlertSettings"> | string | null
    siteName?: StringFilter<"AlertSettings"> | string
    enableEcpay?: BoolFilter<"AlertSettings"> | boolean
    enableOpay?: BoolFilter<"AlertSettings"> | boolean
    messageTemplate?: StringFilter<"AlertSettings"> | string
    createdAt?: DateTimeFilter<"AlertSettings"> | Date | string
    updatedAt?: DateTimeFilter<"AlertSettings"> | Date | string
  }

  export type AlertSettingsOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    soundUrl?: SortOrderInput | SortOrder
    fontFamily?: SortOrder
    duration?: SortOrder
    animationType?: SortOrder
    textColor?: SortOrder
    amountColor?: SortOrder
    fontSize?: SortOrder
    animationDuration?: SortOrder
    backgroundColor?: SortOrder
    borderColor?: SortOrder
    alertWidth?: SortOrder
    verticalAlign?: SortOrder
    horizontalAlign?: SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    siteName?: SortOrder
    enableEcpay?: SortOrder
    enableOpay?: SortOrder
    messageTemplate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertSettingsWhereInput | AlertSettingsWhereInput[]
    OR?: AlertSettingsWhereInput[]
    NOT?: AlertSettingsWhereInput | AlertSettingsWhereInput[]
    imageUrl?: StringNullableFilter<"AlertSettings"> | string | null
    soundUrl?: StringNullableFilter<"AlertSettings"> | string | null
    fontFamily?: StringFilter<"AlertSettings"> | string
    duration?: IntFilter<"AlertSettings"> | number
    animationType?: StringFilter<"AlertSettings"> | string
    textColor?: StringFilter<"AlertSettings"> | string
    amountColor?: StringFilter<"AlertSettings"> | string
    fontSize?: IntFilter<"AlertSettings"> | number
    animationDuration?: IntFilter<"AlertSettings"> | number
    backgroundColor?: StringFilter<"AlertSettings"> | string
    borderColor?: StringFilter<"AlertSettings"> | string
    alertWidth?: IntFilter<"AlertSettings"> | number
    verticalAlign?: StringFilter<"AlertSettings"> | string
    horizontalAlign?: StringFilter<"AlertSettings"> | string
    bannerUrl?: StringNullableFilter<"AlertSettings"> | string | null
    logoUrl?: StringNullableFilter<"AlertSettings"> | string | null
    siteName?: StringFilter<"AlertSettings"> | string
    enableEcpay?: BoolFilter<"AlertSettings"> | boolean
    enableOpay?: BoolFilter<"AlertSettings"> | boolean
    messageTemplate?: StringFilter<"AlertSettings"> | string
    createdAt?: DateTimeFilter<"AlertSettings"> | Date | string
    updatedAt?: DateTimeFilter<"AlertSettings"> | Date | string
  }, "id">

  export type AlertSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    soundUrl?: SortOrderInput | SortOrder
    fontFamily?: SortOrder
    duration?: SortOrder
    animationType?: SortOrder
    textColor?: SortOrder
    amountColor?: SortOrder
    fontSize?: SortOrder
    animationDuration?: SortOrder
    backgroundColor?: SortOrder
    borderColor?: SortOrder
    alertWidth?: SortOrder
    verticalAlign?: SortOrder
    horizontalAlign?: SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    siteName?: SortOrder
    enableEcpay?: SortOrder
    enableOpay?: SortOrder
    messageTemplate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlertSettingsCountOrderByAggregateInput
    _avg?: AlertSettingsAvgOrderByAggregateInput
    _max?: AlertSettingsMaxOrderByAggregateInput
    _min?: AlertSettingsMinOrderByAggregateInput
    _sum?: AlertSettingsSumOrderByAggregateInput
  }

  export type AlertSettingsScalarWhereWithAggregatesInput = {
    AND?: AlertSettingsScalarWhereWithAggregatesInput | AlertSettingsScalarWhereWithAggregatesInput[]
    OR?: AlertSettingsScalarWhereWithAggregatesInput[]
    NOT?: AlertSettingsScalarWhereWithAggregatesInput | AlertSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlertSettings"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"AlertSettings"> | string | null
    soundUrl?: StringNullableWithAggregatesFilter<"AlertSettings"> | string | null
    fontFamily?: StringWithAggregatesFilter<"AlertSettings"> | string
    duration?: IntWithAggregatesFilter<"AlertSettings"> | number
    animationType?: StringWithAggregatesFilter<"AlertSettings"> | string
    textColor?: StringWithAggregatesFilter<"AlertSettings"> | string
    amountColor?: StringWithAggregatesFilter<"AlertSettings"> | string
    fontSize?: IntWithAggregatesFilter<"AlertSettings"> | number
    animationDuration?: IntWithAggregatesFilter<"AlertSettings"> | number
    backgroundColor?: StringWithAggregatesFilter<"AlertSettings"> | string
    borderColor?: StringWithAggregatesFilter<"AlertSettings"> | string
    alertWidth?: IntWithAggregatesFilter<"AlertSettings"> | number
    verticalAlign?: StringWithAggregatesFilter<"AlertSettings"> | string
    horizontalAlign?: StringWithAggregatesFilter<"AlertSettings"> | string
    bannerUrl?: StringNullableWithAggregatesFilter<"AlertSettings"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"AlertSettings"> | string | null
    siteName?: StringWithAggregatesFilter<"AlertSettings"> | string
    enableEcpay?: BoolWithAggregatesFilter<"AlertSettings"> | boolean
    enableOpay?: BoolWithAggregatesFilter<"AlertSettings"> | boolean
    messageTemplate?: StringWithAggregatesFilter<"AlertSettings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AlertSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AlertSettings"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationCreateInput = {
    id?: string
    amount: number
    message?: string | null
    donorName: string
    status: string
    paymentMethod: string
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUncheckedCreateInput = {
    id?: string
    amount: number
    message?: string | null
    donorName: string
    status: string
    paymentMethod: string
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationCreateManyInput = {
    id?: string
    amount: number
    message?: string | null
    donorName: string
    status: string
    paymentMethod: string
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertSettingsCreateInput = {
    id?: string
    imageUrl?: string | null
    soundUrl?: string | null
    fontFamily?: string
    duration?: number
    animationType?: string
    textColor?: string
    amountColor?: string
    fontSize?: number
    animationDuration?: number
    backgroundColor?: string
    borderColor?: string
    alertWidth?: number
    verticalAlign?: string
    horizontalAlign?: string
    bannerUrl?: string | null
    logoUrl?: string | null
    siteName?: string
    enableEcpay?: boolean
    enableOpay?: boolean
    messageTemplate?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertSettingsUncheckedCreateInput = {
    id?: string
    imageUrl?: string | null
    soundUrl?: string | null
    fontFamily?: string
    duration?: number
    animationType?: string
    textColor?: string
    amountColor?: string
    fontSize?: number
    animationDuration?: number
    backgroundColor?: string
    borderColor?: string
    alertWidth?: number
    verticalAlign?: string
    horizontalAlign?: string
    bannerUrl?: string | null
    logoUrl?: string | null
    siteName?: string
    enableEcpay?: boolean
    enableOpay?: boolean
    messageTemplate?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    soundUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fontFamily?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    animationType?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    amountColor?: StringFieldUpdateOperationsInput | string
    fontSize?: IntFieldUpdateOperationsInput | number
    animationDuration?: IntFieldUpdateOperationsInput | number
    backgroundColor?: StringFieldUpdateOperationsInput | string
    borderColor?: StringFieldUpdateOperationsInput | string
    alertWidth?: IntFieldUpdateOperationsInput | number
    verticalAlign?: StringFieldUpdateOperationsInput | string
    horizontalAlign?: StringFieldUpdateOperationsInput | string
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    siteName?: StringFieldUpdateOperationsInput | string
    enableEcpay?: BoolFieldUpdateOperationsInput | boolean
    enableOpay?: BoolFieldUpdateOperationsInput | boolean
    messageTemplate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    soundUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fontFamily?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    animationType?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    amountColor?: StringFieldUpdateOperationsInput | string
    fontSize?: IntFieldUpdateOperationsInput | number
    animationDuration?: IntFieldUpdateOperationsInput | number
    backgroundColor?: StringFieldUpdateOperationsInput | string
    borderColor?: StringFieldUpdateOperationsInput | string
    alertWidth?: IntFieldUpdateOperationsInput | number
    verticalAlign?: StringFieldUpdateOperationsInput | string
    horizontalAlign?: StringFieldUpdateOperationsInput | string
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    siteName?: StringFieldUpdateOperationsInput | string
    enableEcpay?: BoolFieldUpdateOperationsInput | boolean
    enableOpay?: BoolFieldUpdateOperationsInput | boolean
    messageTemplate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertSettingsCreateManyInput = {
    id?: string
    imageUrl?: string | null
    soundUrl?: string | null
    fontFamily?: string
    duration?: number
    animationType?: string
    textColor?: string
    amountColor?: string
    fontSize?: number
    animationDuration?: number
    backgroundColor?: string
    borderColor?: string
    alertWidth?: number
    verticalAlign?: string
    horizontalAlign?: string
    bannerUrl?: string | null
    logoUrl?: string | null
    siteName?: string
    enableEcpay?: boolean
    enableOpay?: boolean
    messageTemplate?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    soundUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fontFamily?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    animationType?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    amountColor?: StringFieldUpdateOperationsInput | string
    fontSize?: IntFieldUpdateOperationsInput | number
    animationDuration?: IntFieldUpdateOperationsInput | number
    backgroundColor?: StringFieldUpdateOperationsInput | string
    borderColor?: StringFieldUpdateOperationsInput | string
    alertWidth?: IntFieldUpdateOperationsInput | number
    verticalAlign?: StringFieldUpdateOperationsInput | string
    horizontalAlign?: StringFieldUpdateOperationsInput | string
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    siteName?: StringFieldUpdateOperationsInput | string
    enableEcpay?: BoolFieldUpdateOperationsInput | boolean
    enableOpay?: BoolFieldUpdateOperationsInput | boolean
    messageTemplate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    soundUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fontFamily?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    animationType?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    amountColor?: StringFieldUpdateOperationsInput | string
    fontSize?: IntFieldUpdateOperationsInput | number
    animationDuration?: IntFieldUpdateOperationsInput | number
    backgroundColor?: StringFieldUpdateOperationsInput | string
    borderColor?: StringFieldUpdateOperationsInput | string
    alertWidth?: IntFieldUpdateOperationsInput | number
    verticalAlign?: StringFieldUpdateOperationsInput | string
    horizontalAlign?: StringFieldUpdateOperationsInput | string
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    siteName?: StringFieldUpdateOperationsInput | string
    enableEcpay?: BoolFieldUpdateOperationsInput | boolean
    enableOpay?: BoolFieldUpdateOperationsInput | boolean
    messageTemplate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DonationCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    donorName?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DonationMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    donorName?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    donorName?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AlertSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    soundUrl?: SortOrder
    fontFamily?: SortOrder
    duration?: SortOrder
    animationType?: SortOrder
    textColor?: SortOrder
    amountColor?: SortOrder
    fontSize?: SortOrder
    animationDuration?: SortOrder
    backgroundColor?: SortOrder
    borderColor?: SortOrder
    alertWidth?: SortOrder
    verticalAlign?: SortOrder
    horizontalAlign?: SortOrder
    bannerUrl?: SortOrder
    logoUrl?: SortOrder
    siteName?: SortOrder
    enableEcpay?: SortOrder
    enableOpay?: SortOrder
    messageTemplate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertSettingsAvgOrderByAggregateInput = {
    duration?: SortOrder
    fontSize?: SortOrder
    animationDuration?: SortOrder
    alertWidth?: SortOrder
  }

  export type AlertSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    soundUrl?: SortOrder
    fontFamily?: SortOrder
    duration?: SortOrder
    animationType?: SortOrder
    textColor?: SortOrder
    amountColor?: SortOrder
    fontSize?: SortOrder
    animationDuration?: SortOrder
    backgroundColor?: SortOrder
    borderColor?: SortOrder
    alertWidth?: SortOrder
    verticalAlign?: SortOrder
    horizontalAlign?: SortOrder
    bannerUrl?: SortOrder
    logoUrl?: SortOrder
    siteName?: SortOrder
    enableEcpay?: SortOrder
    enableOpay?: SortOrder
    messageTemplate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    soundUrl?: SortOrder
    fontFamily?: SortOrder
    duration?: SortOrder
    animationType?: SortOrder
    textColor?: SortOrder
    amountColor?: SortOrder
    fontSize?: SortOrder
    animationDuration?: SortOrder
    backgroundColor?: SortOrder
    borderColor?: SortOrder
    alertWidth?: SortOrder
    verticalAlign?: SortOrder
    horizontalAlign?: SortOrder
    bannerUrl?: SortOrder
    logoUrl?: SortOrder
    siteName?: SortOrder
    enableEcpay?: SortOrder
    enableOpay?: SortOrder
    messageTemplate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertSettingsSumOrderByAggregateInput = {
    duration?: SortOrder
    fontSize?: SortOrder
    animationDuration?: SortOrder
    alertWidth?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}