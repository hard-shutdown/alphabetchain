/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "alphabet.alphabet";

export interface MsgBuyLetter {
  creator: string;
  letter: string;
  amount: string;
}

export interface MsgBuyLetterResponse {}

export interface MsgSellLetter {
  creator: string;
  letter: string;
}

export interface MsgSellLetterResponse {}

const baseMsgBuyLetter: object = { creator: "", letter: "", amount: "" };

export const MsgBuyLetter = {
  encode(message: MsgBuyLetter, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.letter !== "") {
      writer.uint32(18).string(message.letter);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyLetter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyLetter } as MsgBuyLetter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.letter = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyLetter {
    const message = { ...baseMsgBuyLetter } as MsgBuyLetter;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.letter !== undefined && object.letter !== null) {
      message.letter = String(object.letter);
    } else {
      message.letter = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgBuyLetter): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.letter !== undefined && (obj.letter = message.letter);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBuyLetter>): MsgBuyLetter {
    const message = { ...baseMsgBuyLetter } as MsgBuyLetter;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.letter !== undefined && object.letter !== null) {
      message.letter = object.letter;
    } else {
      message.letter = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

const baseMsgBuyLetterResponse: object = {};

export const MsgBuyLetterResponse = {
  encode(_: MsgBuyLetterResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyLetterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyLetterResponse } as MsgBuyLetterResponse;
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

  fromJSON(_: any): MsgBuyLetterResponse {
    const message = { ...baseMsgBuyLetterResponse } as MsgBuyLetterResponse;
    return message;
  },

  toJSON(_: MsgBuyLetterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBuyLetterResponse>): MsgBuyLetterResponse {
    const message = { ...baseMsgBuyLetterResponse } as MsgBuyLetterResponse;
    return message;
  },
};

const baseMsgSellLetter: object = { creator: "", letter: "" };

export const MsgSellLetter = {
  encode(message: MsgSellLetter, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.letter !== "") {
      writer.uint32(18).string(message.letter);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSellLetter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSellLetter } as MsgSellLetter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.letter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSellLetter {
    const message = { ...baseMsgSellLetter } as MsgSellLetter;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.letter !== undefined && object.letter !== null) {
      message.letter = String(object.letter);
    } else {
      message.letter = "";
    }
    return message;
  },

  toJSON(message: MsgSellLetter): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.letter !== undefined && (obj.letter = message.letter);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSellLetter>): MsgSellLetter {
    const message = { ...baseMsgSellLetter } as MsgSellLetter;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.letter !== undefined && object.letter !== null) {
      message.letter = object.letter;
    } else {
      message.letter = "";
    }
    return message;
  },
};

const baseMsgSellLetterResponse: object = {};

export const MsgSellLetterResponse = {
  encode(_: MsgSellLetterResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSellLetterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSellLetterResponse } as MsgSellLetterResponse;
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

  fromJSON(_: any): MsgSellLetterResponse {
    const message = { ...baseMsgSellLetterResponse } as MsgSellLetterResponse;
    return message;
  },

  toJSON(_: MsgSellLetterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSellLetterResponse>): MsgSellLetterResponse {
    const message = { ...baseMsgSellLetterResponse } as MsgSellLetterResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  BuyLetter(request: MsgBuyLetter): Promise<MsgBuyLetterResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SellLetter(request: MsgSellLetter): Promise<MsgSellLetterResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  BuyLetter(request: MsgBuyLetter): Promise<MsgBuyLetterResponse> {
    const data = MsgBuyLetter.encode(request).finish();
    const promise = this.rpc.request(
      "alphabet.alphabet.Msg",
      "BuyLetter",
      data
    );
    return promise.then((data) =>
      MsgBuyLetterResponse.decode(new Reader(data))
    );
  }

  SellLetter(request: MsgSellLetter): Promise<MsgSellLetterResponse> {
    const data = MsgSellLetter.encode(request).finish();
    const promise = this.rpc.request(
      "alphabet.alphabet.Msg",
      "SellLetter",
      data
    );
    return promise.then((data) =>
      MsgSellLetterResponse.decode(new Reader(data))
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
