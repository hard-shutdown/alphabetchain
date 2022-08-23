/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../alphabet/params";
import { Letter } from "../alphabet/letter";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "alphabet.alphabet";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetLetterRequest {
  index: string;
}

export interface QueryGetLetterResponse {
  letter: Letter | undefined;
}

export interface QueryAllLetterRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllLetterResponse {
  letter: Letter[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetLetterRequest: object = { index: "" };

export const QueryGetLetterRequest = {
  encode(
    message: QueryGetLetterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetLetterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetLetterRequest } as QueryGetLetterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLetterRequest {
    const message = { ...baseQueryGetLetterRequest } as QueryGetLetterRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetLetterRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLetterRequest>
  ): QueryGetLetterRequest {
    const message = { ...baseQueryGetLetterRequest } as QueryGetLetterRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetLetterResponse: object = {};

export const QueryGetLetterResponse = {
  encode(
    message: QueryGetLetterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.letter !== undefined) {
      Letter.encode(message.letter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetLetterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetLetterResponse } as QueryGetLetterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.letter = Letter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLetterResponse {
    const message = { ...baseQueryGetLetterResponse } as QueryGetLetterResponse;
    if (object.letter !== undefined && object.letter !== null) {
      message.letter = Letter.fromJSON(object.letter);
    } else {
      message.letter = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetLetterResponse): unknown {
    const obj: any = {};
    message.letter !== undefined &&
      (obj.letter = message.letter ? Letter.toJSON(message.letter) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLetterResponse>
  ): QueryGetLetterResponse {
    const message = { ...baseQueryGetLetterResponse } as QueryGetLetterResponse;
    if (object.letter !== undefined && object.letter !== null) {
      message.letter = Letter.fromPartial(object.letter);
    } else {
      message.letter = undefined;
    }
    return message;
  },
};

const baseQueryAllLetterRequest: object = {};

export const QueryAllLetterRequest = {
  encode(
    message: QueryAllLetterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllLetterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllLetterRequest } as QueryAllLetterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLetterRequest {
    const message = { ...baseQueryAllLetterRequest } as QueryAllLetterRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLetterRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllLetterRequest>
  ): QueryAllLetterRequest {
    const message = { ...baseQueryAllLetterRequest } as QueryAllLetterRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllLetterResponse: object = {};

export const QueryAllLetterResponse = {
  encode(
    message: QueryAllLetterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.letter) {
      Letter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllLetterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllLetterResponse } as QueryAllLetterResponse;
    message.letter = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.letter.push(Letter.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLetterResponse {
    const message = { ...baseQueryAllLetterResponse } as QueryAllLetterResponse;
    message.letter = [];
    if (object.letter !== undefined && object.letter !== null) {
      for (const e of object.letter) {
        message.letter.push(Letter.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLetterResponse): unknown {
    const obj: any = {};
    if (message.letter) {
      obj.letter = message.letter.map((e) =>
        e ? Letter.toJSON(e) : undefined
      );
    } else {
      obj.letter = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllLetterResponse>
  ): QueryAllLetterResponse {
    const message = { ...baseQueryAllLetterResponse } as QueryAllLetterResponse;
    message.letter = [];
    if (object.letter !== undefined && object.letter !== null) {
      for (const e of object.letter) {
        message.letter.push(Letter.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Letter by index. */
  Letter(request: QueryGetLetterRequest): Promise<QueryGetLetterResponse>;
  /** Queries a list of Letter items. */
  LetterAll(request: QueryAllLetterRequest): Promise<QueryAllLetterResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("alphabet.alphabet.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Letter(request: QueryGetLetterRequest): Promise<QueryGetLetterResponse> {
    const data = QueryGetLetterRequest.encode(request).finish();
    const promise = this.rpc.request("alphabet.alphabet.Query", "Letter", data);
    return promise.then((data) =>
      QueryGetLetterResponse.decode(new Reader(data))
    );
  }

  LetterAll(request: QueryAllLetterRequest): Promise<QueryAllLetterResponse> {
    const data = QueryAllLetterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alphabet.alphabet.Query",
      "LetterAll",
      data
    );
    return promise.then((data) =>
      QueryAllLetterResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
