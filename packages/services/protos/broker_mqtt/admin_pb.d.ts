import * as jspb from 'google-protobuf'



export class ClusterStatusRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterStatusRequest): ClusterStatusRequest.AsObject;
  static serializeBinaryToWriter(message: ClusterStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterStatusRequest;
  static deserializeBinaryFromReader(message: ClusterStatusRequest, reader: jspb.BinaryReader): ClusterStatusRequest;
}

export namespace ClusterStatusRequest {
  export type AsObject = {
  }
}

export class ClusterStatusReply extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): ClusterStatusReply;

  getNodesList(): Array<string>;
  setNodesList(value: Array<string>): ClusterStatusReply;
  clearNodesList(): ClusterStatusReply;
  addNodes(value: string, index?: number): ClusterStatusReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterStatusReply.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterStatusReply): ClusterStatusReply.AsObject;
  static serializeBinaryToWriter(message: ClusterStatusReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterStatusReply;
  static deserializeBinaryFromReader(message: ClusterStatusReply, reader: jspb.BinaryReader): ClusterStatusReply;
}

export namespace ClusterStatusReply {
  export type AsObject = {
    clusterName: string,
    nodesList: Array<string>,
  }
}

export class ListUserRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserRequest): ListUserRequest.AsObject;
  static serializeBinaryToWriter(message: ListUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserRequest;
  static deserializeBinaryFromReader(message: ListUserRequest, reader: jspb.BinaryReader): ListUserRequest;
}

export namespace ListUserRequest {
  export type AsObject = {
  }
}

export class ListUserReply extends jspb.Message {
  getUsersList(): Array<Uint8Array | string>;
  setUsersList(value: Array<Uint8Array | string>): ListUserReply;
  clearUsersList(): ListUserReply;
  addUsers(value: Uint8Array | string, index?: number): ListUserReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserReply): ListUserReply.AsObject;
  static serializeBinaryToWriter(message: ListUserReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserReply;
  static deserializeBinaryFromReader(message: ListUserReply, reader: jspb.BinaryReader): ListUserReply;
}

export namespace ListUserReply {
  export type AsObject = {
    usersList: Array<Uint8Array | string>,
  }
}

export class CreateUserRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): CreateUserRequest;

  getPassword(): string;
  setPassword(value: string): CreateUserRequest;

  getIsSuperuser(): boolean;
  setIsSuperuser(value: boolean): CreateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    username: string,
    password: string,
    isSuperuser: boolean,
  }
}

export class CreateUserReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserReply): CreateUserReply.AsObject;
  static serializeBinaryToWriter(message: CreateUserReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserReply;
  static deserializeBinaryFromReader(message: CreateUserReply, reader: jspb.BinaryReader): CreateUserReply;
}

export namespace CreateUserReply {
  export type AsObject = {
  }
}

export class DeleteUserRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): DeleteUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
  static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    username: string,
  }
}

export class DeleteUserReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserReply): DeleteUserReply.AsObject;
  static serializeBinaryToWriter(message: DeleteUserReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserReply;
  static deserializeBinaryFromReader(message: DeleteUserReply, reader: jspb.BinaryReader): DeleteUserReply;
}

export namespace DeleteUserReply {
  export type AsObject = {
  }
}

export class ListAclRequest extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): ListAclRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAclRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAclRequest): ListAclRequest.AsObject;
  static serializeBinaryToWriter(message: ListAclRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAclRequest;
  static deserializeBinaryFromReader(message: ListAclRequest, reader: jspb.BinaryReader): ListAclRequest;
}

export namespace ListAclRequest {
  export type AsObject = {
    clusterName: string,
  }
}

export class ListAclReply extends jspb.Message {
  getAclsList(): Array<Uint8Array | string>;
  setAclsList(value: Array<Uint8Array | string>): ListAclReply;
  clearAclsList(): ListAclReply;
  addAcls(value: Uint8Array | string, index?: number): ListAclReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAclReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListAclReply): ListAclReply.AsObject;
  static serializeBinaryToWriter(message: ListAclReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAclReply;
  static deserializeBinaryFromReader(message: ListAclReply, reader: jspb.BinaryReader): ListAclReply;
}

export namespace ListAclReply {
  export type AsObject = {
    aclsList: Array<Uint8Array | string>,
  }
}

export class DeleteAclRequest extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): DeleteAclRequest;

  getAcl(): Uint8Array | string;
  getAcl_asU8(): Uint8Array;
  getAcl_asB64(): string;
  setAcl(value: Uint8Array | string): DeleteAclRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAclRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAclRequest): DeleteAclRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAclRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAclRequest;
  static deserializeBinaryFromReader(message: DeleteAclRequest, reader: jspb.BinaryReader): DeleteAclRequest;
}

export namespace DeleteAclRequest {
  export type AsObject = {
    clusterName: string,
    acl: Uint8Array | string,
  }
}

export class DeleteAclReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAclReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAclReply): DeleteAclReply.AsObject;
  static serializeBinaryToWriter(message: DeleteAclReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAclReply;
  static deserializeBinaryFromReader(message: DeleteAclReply, reader: jspb.BinaryReader): DeleteAclReply;
}

export namespace DeleteAclReply {
  export type AsObject = {
  }
}

export class CreateAclRequest extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): CreateAclRequest;

  getAcl(): Uint8Array | string;
  getAcl_asU8(): Uint8Array;
  getAcl_asB64(): string;
  setAcl(value: Uint8Array | string): CreateAclRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAclRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAclRequest): CreateAclRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAclRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAclRequest;
  static deserializeBinaryFromReader(message: CreateAclRequest, reader: jspb.BinaryReader): CreateAclRequest;
}

export namespace CreateAclRequest {
  export type AsObject = {
    clusterName: string,
    acl: Uint8Array | string,
  }
}

export class CreateAclReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAclReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAclReply): CreateAclReply.AsObject;
  static serializeBinaryToWriter(message: CreateAclReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAclReply;
  static deserializeBinaryFromReader(message: CreateAclReply, reader: jspb.BinaryReader): CreateAclReply;
}

export namespace CreateAclReply {
  export type AsObject = {
  }
}

export class ListBlacklistRequest extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): ListBlacklistRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBlacklistRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBlacklistRequest): ListBlacklistRequest.AsObject;
  static serializeBinaryToWriter(message: ListBlacklistRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBlacklistRequest;
  static deserializeBinaryFromReader(message: ListBlacklistRequest, reader: jspb.BinaryReader): ListBlacklistRequest;
}

export namespace ListBlacklistRequest {
  export type AsObject = {
    clusterName: string,
  }
}

export class ListBlacklistReply extends jspb.Message {
  getBlacklistsList(): Array<Uint8Array | string>;
  setBlacklistsList(value: Array<Uint8Array | string>): ListBlacklistReply;
  clearBlacklistsList(): ListBlacklistReply;
  addBlacklists(value: Uint8Array | string, index?: number): ListBlacklistReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBlacklistReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListBlacklistReply): ListBlacklistReply.AsObject;
  static serializeBinaryToWriter(message: ListBlacklistReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBlacklistReply;
  static deserializeBinaryFromReader(message: ListBlacklistReply, reader: jspb.BinaryReader): ListBlacklistReply;
}

export namespace ListBlacklistReply {
  export type AsObject = {
    blacklistsList: Array<Uint8Array | string>,
  }
}

export class CreateBlacklistRequest extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): CreateBlacklistRequest;

  getBlacklist(): Uint8Array | string;
  getBlacklist_asU8(): Uint8Array;
  getBlacklist_asB64(): string;
  setBlacklist(value: Uint8Array | string): CreateBlacklistRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBlacklistRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBlacklistRequest): CreateBlacklistRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBlacklistRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBlacklistRequest;
  static deserializeBinaryFromReader(message: CreateBlacklistRequest, reader: jspb.BinaryReader): CreateBlacklistRequest;
}

export namespace CreateBlacklistRequest {
  export type AsObject = {
    clusterName: string,
    blacklist: Uint8Array | string,
  }
}

export class CreateBlacklistReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBlacklistReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBlacklistReply): CreateBlacklistReply.AsObject;
  static serializeBinaryToWriter(message: CreateBlacklistReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBlacklistReply;
  static deserializeBinaryFromReader(message: CreateBlacklistReply, reader: jspb.BinaryReader): CreateBlacklistReply;
}

export namespace CreateBlacklistReply {
  export type AsObject = {
  }
}

export class DeleteBlacklistRequest extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): DeleteBlacklistRequest;

  getBlacklistType(): string;
  setBlacklistType(value: string): DeleteBlacklistRequest;

  getResourceName(): string;
  setResourceName(value: string): DeleteBlacklistRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBlacklistRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBlacklistRequest): DeleteBlacklistRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBlacklistRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBlacklistRequest;
  static deserializeBinaryFromReader(message: DeleteBlacklistRequest, reader: jspb.BinaryReader): DeleteBlacklistRequest;
}

export namespace DeleteBlacklistRequest {
  export type AsObject = {
    clusterName: string,
    blacklistType: string,
    resourceName: string,
  }
}

export class DeleteBlacklistReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBlacklistReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBlacklistReply): DeleteBlacklistReply.AsObject;
  static serializeBinaryToWriter(message: DeleteBlacklistReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBlacklistReply;
  static deserializeBinaryFromReader(message: DeleteBlacklistReply, reader: jspb.BinaryReader): DeleteBlacklistReply;
}

export namespace DeleteBlacklistReply {
  export type AsObject = {
  }
}

export class ListConnectionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConnectionRequest): ListConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: ListConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConnectionRequest;
  static deserializeBinaryFromReader(message: ListConnectionRequest, reader: jspb.BinaryReader): ListConnectionRequest;
}

export namespace ListConnectionRequest {
  export type AsObject = {
  }
}

export class ListConnectionReply extends jspb.Message {
  getListConnectionRawList(): Array<ListConnectionRaw>;
  setListConnectionRawList(value: Array<ListConnectionRaw>): ListConnectionReply;
  clearListConnectionRawList(): ListConnectionReply;
  addListConnectionRaw(value?: ListConnectionRaw, index?: number): ListConnectionRaw;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConnectionReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListConnectionReply): ListConnectionReply.AsObject;
  static serializeBinaryToWriter(message: ListConnectionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConnectionReply;
  static deserializeBinaryFromReader(message: ListConnectionReply, reader: jspb.BinaryReader): ListConnectionReply;
}

export namespace ListConnectionReply {
  export type AsObject = {
    listConnectionRawList: Array<ListConnectionRaw.AsObject>,
  }
}

export class ListConnectionRaw extends jspb.Message {
  getConnectionId(): number;
  setConnectionId(value: number): ListConnectionRaw;

  getConnectionType(): string;
  setConnectionType(value: string): ListConnectionRaw;

  getProtocol(): string;
  setProtocol(value: string): ListConnectionRaw;

  getSourceAddr(): string;
  setSourceAddr(value: string): ListConnectionRaw;

  getInfo(): string;
  setInfo(value: string): ListConnectionRaw;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConnectionRaw.AsObject;
  static toObject(includeInstance: boolean, msg: ListConnectionRaw): ListConnectionRaw.AsObject;
  static serializeBinaryToWriter(message: ListConnectionRaw, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConnectionRaw;
  static deserializeBinaryFromReader(message: ListConnectionRaw, reader: jspb.BinaryReader): ListConnectionRaw;
}

export namespace ListConnectionRaw {
  export type AsObject = {
    connectionId: number,
    connectionType: string,
    protocol: string,
    sourceAddr: string,
    info: string,
  }
}

export class EnableFlappingDetectRequest extends jspb.Message {
  getIsEnable(): boolean;
  setIsEnable(value: boolean): EnableFlappingDetectRequest;

  getWindowTime(): number;
  setWindowTime(value: number): EnableFlappingDetectRequest;

  getMaxClientConnections(): number;
  setMaxClientConnections(value: number): EnableFlappingDetectRequest;

  getBanTime(): number;
  setBanTime(value: number): EnableFlappingDetectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableFlappingDetectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnableFlappingDetectRequest): EnableFlappingDetectRequest.AsObject;
  static serializeBinaryToWriter(message: EnableFlappingDetectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableFlappingDetectRequest;
  static deserializeBinaryFromReader(message: EnableFlappingDetectRequest, reader: jspb.BinaryReader): EnableFlappingDetectRequest;
}

export namespace EnableFlappingDetectRequest {
  export type AsObject = {
    isEnable: boolean,
    windowTime: number,
    maxClientConnections: number,
    banTime: number,
  }
}

export class EnableFlappingDetectReply extends jspb.Message {
  getIsEnable(): boolean;
  setIsEnable(value: boolean): EnableFlappingDetectReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableFlappingDetectReply.AsObject;
  static toObject(includeInstance: boolean, msg: EnableFlappingDetectReply): EnableFlappingDetectReply.AsObject;
  static serializeBinaryToWriter(message: EnableFlappingDetectReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableFlappingDetectReply;
  static deserializeBinaryFromReader(message: EnableFlappingDetectReply, reader: jspb.BinaryReader): EnableFlappingDetectReply;
}

export namespace EnableFlappingDetectReply {
  export type AsObject = {
    isEnable: boolean,
  }
}

export class EnableSlowSubscribeRequest extends jspb.Message {
  getIsEnable(): boolean;
  setIsEnable(value: boolean): EnableSlowSubscribeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableSlowSubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnableSlowSubscribeRequest): EnableSlowSubscribeRequest.AsObject;
  static serializeBinaryToWriter(message: EnableSlowSubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableSlowSubscribeRequest;
  static deserializeBinaryFromReader(message: EnableSlowSubscribeRequest, reader: jspb.BinaryReader): EnableSlowSubscribeRequest;
}

export namespace EnableSlowSubscribeRequest {
  export type AsObject = {
    isEnable: boolean,
  }
}

export class EnableSlowSubScribeReply extends jspb.Message {
  getIsEnable(): boolean;
  setIsEnable(value: boolean): EnableSlowSubScribeReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableSlowSubScribeReply.AsObject;
  static toObject(includeInstance: boolean, msg: EnableSlowSubScribeReply): EnableSlowSubScribeReply.AsObject;
  static serializeBinaryToWriter(message: EnableSlowSubScribeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableSlowSubScribeReply;
  static deserializeBinaryFromReader(message: EnableSlowSubScribeReply, reader: jspb.BinaryReader): EnableSlowSubScribeReply;
}

export namespace EnableSlowSubScribeReply {
  export type AsObject = {
    isEnable: boolean,
  }
}

export class ListSlowSubscribeRequest extends jspb.Message {
  getList(): number;
  setList(value: number): ListSlowSubscribeRequest;

  getSubName(): string;
  setSubName(value: string): ListSlowSubscribeRequest;

  getTopic(): string;
  setTopic(value: string): ListSlowSubscribeRequest;

  getClientId(): string;
  setClientId(value: string): ListSlowSubscribeRequest;

  getSort(): string;
  setSort(value: string): ListSlowSubscribeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSlowSubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSlowSubscribeRequest): ListSlowSubscribeRequest.AsObject;
  static serializeBinaryToWriter(message: ListSlowSubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSlowSubscribeRequest;
  static deserializeBinaryFromReader(message: ListSlowSubscribeRequest, reader: jspb.BinaryReader): ListSlowSubscribeRequest;
}

export namespace ListSlowSubscribeRequest {
  export type AsObject = {
    list: number,
    subName: string,
    topic: string,
    clientId: string,
    sort: string,
  }
}

export class ListSlowSubscribeReply extends jspb.Message {
  getListSlowSubscribeRawList(): Array<ListSlowSubScribeRaw>;
  setListSlowSubscribeRawList(value: Array<ListSlowSubScribeRaw>): ListSlowSubscribeReply;
  clearListSlowSubscribeRawList(): ListSlowSubscribeReply;
  addListSlowSubscribeRaw(value?: ListSlowSubScribeRaw, index?: number): ListSlowSubScribeRaw;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSlowSubscribeReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListSlowSubscribeReply): ListSlowSubscribeReply.AsObject;
  static serializeBinaryToWriter(message: ListSlowSubscribeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSlowSubscribeReply;
  static deserializeBinaryFromReader(message: ListSlowSubscribeReply, reader: jspb.BinaryReader): ListSlowSubscribeReply;
}

export namespace ListSlowSubscribeReply {
  export type AsObject = {
    listSlowSubscribeRawList: Array<ListSlowSubScribeRaw.AsObject>,
  }
}

export class ListSlowSubScribeRaw extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): ListSlowSubScribeRaw;

  getTopic(): string;
  setTopic(value: string): ListSlowSubScribeRaw;

  getTimeMs(): number;
  setTimeMs(value: number): ListSlowSubScribeRaw;

  getNodeInfo(): string;
  setNodeInfo(value: string): ListSlowSubScribeRaw;

  getCreateTime(): number;
  setCreateTime(value: number): ListSlowSubScribeRaw;

  getSubName(): string;
  setSubName(value: string): ListSlowSubScribeRaw;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSlowSubScribeRaw.AsObject;
  static toObject(includeInstance: boolean, msg: ListSlowSubScribeRaw): ListSlowSubScribeRaw.AsObject;
  static serializeBinaryToWriter(message: ListSlowSubScribeRaw, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSlowSubScribeRaw;
  static deserializeBinaryFromReader(message: ListSlowSubScribeRaw, reader: jspb.BinaryReader): ListSlowSubScribeRaw;
}

export namespace ListSlowSubScribeRaw {
  export type AsObject = {
    clientId: string,
    topic: string,
    timeMs: number,
    nodeInfo: string,
    createTime: number,
    subName: string,
  }
}

export class ListTopicRequest extends jspb.Message {
  getTopicName(): string;
  setTopicName(value: string): ListTopicRequest;

  getMatchOption(): MatchOption;
  setMatchOption(value: MatchOption): ListTopicRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicRequest): ListTopicRequest.AsObject;
  static serializeBinaryToWriter(message: ListTopicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicRequest;
  static deserializeBinaryFromReader(message: ListTopicRequest, reader: jspb.BinaryReader): ListTopicRequest;
}

export namespace ListTopicRequest {
  export type AsObject = {
    topicName: string,
    matchOption: MatchOption,
  }
}

export class ListTopicReply extends jspb.Message {
  getTopicsList(): Array<MqttTopic>;
  setTopicsList(value: Array<MqttTopic>): ListTopicReply;
  clearTopicsList(): ListTopicReply;
  addTopics(value?: MqttTopic, index?: number): MqttTopic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicReply): ListTopicReply.AsObject;
  static serializeBinaryToWriter(message: ListTopicReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicReply;
  static deserializeBinaryFromReader(message: ListTopicReply, reader: jspb.BinaryReader): ListTopicReply;
}

export namespace ListTopicReply {
  export type AsObject = {
    topicsList: Array<MqttTopic.AsObject>,
  }
}

export class MqttTopic extends jspb.Message {
  getTopicId(): string;
  setTopicId(value: string): MqttTopic;

  getClusterName(): string;
  setClusterName(value: string): MqttTopic;

  getTopicName(): string;
  setTopicName(value: string): MqttTopic;

  getIsContainRetainMessage(): boolean;
  setIsContainRetainMessage(value: boolean): MqttTopic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttTopic.AsObject;
  static toObject(includeInstance: boolean, msg: MqttTopic): MqttTopic.AsObject;
  static serializeBinaryToWriter(message: MqttTopic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttTopic;
  static deserializeBinaryFromReader(message: MqttTopic, reader: jspb.BinaryReader): MqttTopic;
}

export namespace MqttTopic {
  export type AsObject = {
    topicId: string,
    clusterName: string,
    topicName: string,
    isContainRetainMessage: boolean,
  }
}

export class DeleteTopicRewriteRuleRequest extends jspb.Message {
  getAction(): string;
  setAction(value: string): DeleteTopicRewriteRuleRequest;

  getSourceTopic(): string;
  setSourceTopic(value: string): DeleteTopicRewriteRuleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTopicRewriteRuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTopicRewriteRuleRequest): DeleteTopicRewriteRuleRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTopicRewriteRuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTopicRewriteRuleRequest;
  static deserializeBinaryFromReader(message: DeleteTopicRewriteRuleRequest, reader: jspb.BinaryReader): DeleteTopicRewriteRuleRequest;
}

export namespace DeleteTopicRewriteRuleRequest {
  export type AsObject = {
    action: string,
    sourceTopic: string,
  }
}

export class DeleteTopicRewriteRuleReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTopicRewriteRuleReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTopicRewriteRuleReply): DeleteTopicRewriteRuleReply.AsObject;
  static serializeBinaryToWriter(message: DeleteTopicRewriteRuleReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTopicRewriteRuleReply;
  static deserializeBinaryFromReader(message: DeleteTopicRewriteRuleReply, reader: jspb.BinaryReader): DeleteTopicRewriteRuleReply;
}

export namespace DeleteTopicRewriteRuleReply {
  export type AsObject = {
  }
}

export class CreateTopicRewriteRuleRequest extends jspb.Message {
  getAction(): string;
  setAction(value: string): CreateTopicRewriteRuleRequest;

  getSourceTopic(): string;
  setSourceTopic(value: string): CreateTopicRewriteRuleRequest;

  getDestTopic(): string;
  setDestTopic(value: string): CreateTopicRewriteRuleRequest;

  getRegex(): string;
  setRegex(value: string): CreateTopicRewriteRuleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTopicRewriteRuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTopicRewriteRuleRequest): CreateTopicRewriteRuleRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTopicRewriteRuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTopicRewriteRuleRequest;
  static deserializeBinaryFromReader(message: CreateTopicRewriteRuleRequest, reader: jspb.BinaryReader): CreateTopicRewriteRuleRequest;
}

export namespace CreateTopicRewriteRuleRequest {
  export type AsObject = {
    action: string,
    sourceTopic: string,
    destTopic: string,
    regex: string,
  }
}

export class CreateTopicRewriteRuleReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTopicRewriteRuleReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTopicRewriteRuleReply): CreateTopicRewriteRuleReply.AsObject;
  static serializeBinaryToWriter(message: CreateTopicRewriteRuleReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTopicRewriteRuleReply;
  static deserializeBinaryFromReader(message: CreateTopicRewriteRuleReply, reader: jspb.BinaryReader): CreateTopicRewriteRuleReply;
}

export namespace CreateTopicRewriteRuleReply {
  export type AsObject = {
  }
}

export class MqttListConnectorRequest extends jspb.Message {
  getConnectorName(): string;
  setConnectorName(value: string): MqttListConnectorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttListConnectorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MqttListConnectorRequest): MqttListConnectorRequest.AsObject;
  static serializeBinaryToWriter(message: MqttListConnectorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttListConnectorRequest;
  static deserializeBinaryFromReader(message: MqttListConnectorRequest, reader: jspb.BinaryReader): MqttListConnectorRequest;
}

export namespace MqttListConnectorRequest {
  export type AsObject = {
    connectorName: string,
  }
}

export class MqttListConnectorReply extends jspb.Message {
  getConnectorsList(): Array<Uint8Array | string>;
  setConnectorsList(value: Array<Uint8Array | string>): MqttListConnectorReply;
  clearConnectorsList(): MqttListConnectorReply;
  addConnectors(value: Uint8Array | string, index?: number): MqttListConnectorReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttListConnectorReply.AsObject;
  static toObject(includeInstance: boolean, msg: MqttListConnectorReply): MqttListConnectorReply.AsObject;
  static serializeBinaryToWriter(message: MqttListConnectorReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttListConnectorReply;
  static deserializeBinaryFromReader(message: MqttListConnectorReply, reader: jspb.BinaryReader): MqttListConnectorReply;
}

export namespace MqttListConnectorReply {
  export type AsObject = {
    connectorsList: Array<Uint8Array | string>,
  }
}

export class MqttCreateConnectorRequest extends jspb.Message {
  getConnectorName(): string;
  setConnectorName(value: string): MqttCreateConnectorRequest;

  getConnectorType(): MqttConnectorType;
  setConnectorType(value: MqttConnectorType): MqttCreateConnectorRequest;

  getConfig(): string;
  setConfig(value: string): MqttCreateConnectorRequest;

  getTopicId(): string;
  setTopicId(value: string): MqttCreateConnectorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttCreateConnectorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MqttCreateConnectorRequest): MqttCreateConnectorRequest.AsObject;
  static serializeBinaryToWriter(message: MqttCreateConnectorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttCreateConnectorRequest;
  static deserializeBinaryFromReader(message: MqttCreateConnectorRequest, reader: jspb.BinaryReader): MqttCreateConnectorRequest;
}

export namespace MqttCreateConnectorRequest {
  export type AsObject = {
    connectorName: string,
    connectorType: MqttConnectorType,
    config: string,
    topicId: string,
  }
}

export class MqttCreateConnectorReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttCreateConnectorReply.AsObject;
  static toObject(includeInstance: boolean, msg: MqttCreateConnectorReply): MqttCreateConnectorReply.AsObject;
  static serializeBinaryToWriter(message: MqttCreateConnectorReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttCreateConnectorReply;
  static deserializeBinaryFromReader(message: MqttCreateConnectorReply, reader: jspb.BinaryReader): MqttCreateConnectorReply;
}

export namespace MqttCreateConnectorReply {
  export type AsObject = {
  }
}

export class MqttDeleteConnectorRequest extends jspb.Message {
  getConnectorName(): string;
  setConnectorName(value: string): MqttDeleteConnectorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttDeleteConnectorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MqttDeleteConnectorRequest): MqttDeleteConnectorRequest.AsObject;
  static serializeBinaryToWriter(message: MqttDeleteConnectorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttDeleteConnectorRequest;
  static deserializeBinaryFromReader(message: MqttDeleteConnectorRequest, reader: jspb.BinaryReader): MqttDeleteConnectorRequest;
}

export namespace MqttDeleteConnectorRequest {
  export type AsObject = {
    connectorName: string,
  }
}

export class MqttDeleteConnectorReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttDeleteConnectorReply.AsObject;
  static toObject(includeInstance: boolean, msg: MqttDeleteConnectorReply): MqttDeleteConnectorReply.AsObject;
  static serializeBinaryToWriter(message: MqttDeleteConnectorReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttDeleteConnectorReply;
  static deserializeBinaryFromReader(message: MqttDeleteConnectorReply, reader: jspb.BinaryReader): MqttDeleteConnectorReply;
}

export namespace MqttDeleteConnectorReply {
  export type AsObject = {
  }
}

export class MqttUpdateConnectorRequest extends jspb.Message {
  getConnector(): Uint8Array | string;
  getConnector_asU8(): Uint8Array;
  getConnector_asB64(): string;
  setConnector(value: Uint8Array | string): MqttUpdateConnectorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttUpdateConnectorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MqttUpdateConnectorRequest): MqttUpdateConnectorRequest.AsObject;
  static serializeBinaryToWriter(message: MqttUpdateConnectorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttUpdateConnectorRequest;
  static deserializeBinaryFromReader(message: MqttUpdateConnectorRequest, reader: jspb.BinaryReader): MqttUpdateConnectorRequest;
}

export namespace MqttUpdateConnectorRequest {
  export type AsObject = {
    connector: Uint8Array | string,
  }
}

export class MqttUpdateConnectorReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttUpdateConnectorReply.AsObject;
  static toObject(includeInstance: boolean, msg: MqttUpdateConnectorReply): MqttUpdateConnectorReply.AsObject;
  static serializeBinaryToWriter(message: MqttUpdateConnectorReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttUpdateConnectorReply;
  static deserializeBinaryFromReader(message: MqttUpdateConnectorReply, reader: jspb.BinaryReader): MqttUpdateConnectorReply;
}

export namespace MqttUpdateConnectorReply {
  export type AsObject = {
  }
}

export class MqttListSchemaRequest extends jspb.Message {
  getSchemaName(): string;
  setSchemaName(value: string): MqttListSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttListSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MqttListSchemaRequest): MqttListSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: MqttListSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttListSchemaRequest;
  static deserializeBinaryFromReader(message: MqttListSchemaRequest, reader: jspb.BinaryReader): MqttListSchemaRequest;
}

export namespace MqttListSchemaRequest {
  export type AsObject = {
    schemaName: string,
  }
}

export class MqttListSchemaReply extends jspb.Message {
  getSchemasList(): Array<Uint8Array | string>;
  setSchemasList(value: Array<Uint8Array | string>): MqttListSchemaReply;
  clearSchemasList(): MqttListSchemaReply;
  addSchemas(value: Uint8Array | string, index?: number): MqttListSchemaReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttListSchemaReply.AsObject;
  static toObject(includeInstance: boolean, msg: MqttListSchemaReply): MqttListSchemaReply.AsObject;
  static serializeBinaryToWriter(message: MqttListSchemaReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttListSchemaReply;
  static deserializeBinaryFromReader(message: MqttListSchemaReply, reader: jspb.BinaryReader): MqttListSchemaReply;
}

export namespace MqttListSchemaReply {
  export type AsObject = {
    schemasList: Array<Uint8Array | string>,
  }
}

export class MqttCreateSchemaRequest extends jspb.Message {
  getSchemaName(): string;
  setSchemaName(value: string): MqttCreateSchemaRequest;

  getSchemaType(): string;
  setSchemaType(value: string): MqttCreateSchemaRequest;

  getSchema(): string;
  setSchema(value: string): MqttCreateSchemaRequest;

  getDesc(): string;
  setDesc(value: string): MqttCreateSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttCreateSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MqttCreateSchemaRequest): MqttCreateSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: MqttCreateSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttCreateSchemaRequest;
  static deserializeBinaryFromReader(message: MqttCreateSchemaRequest, reader: jspb.BinaryReader): MqttCreateSchemaRequest;
}

export namespace MqttCreateSchemaRequest {
  export type AsObject = {
    schemaName: string,
    schemaType: string,
    schema: string,
    desc: string,
  }
}

export class MqttCreateSchemaReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttCreateSchemaReply.AsObject;
  static toObject(includeInstance: boolean, msg: MqttCreateSchemaReply): MqttCreateSchemaReply.AsObject;
  static serializeBinaryToWriter(message: MqttCreateSchemaReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttCreateSchemaReply;
  static deserializeBinaryFromReader(message: MqttCreateSchemaReply, reader: jspb.BinaryReader): MqttCreateSchemaReply;
}

export namespace MqttCreateSchemaReply {
  export type AsObject = {
  }
}

export class MqttUpdateSchemaRequest extends jspb.Message {
  getSchemaName(): string;
  setSchemaName(value: string): MqttUpdateSchemaRequest;

  getSchemaType(): string;
  setSchemaType(value: string): MqttUpdateSchemaRequest;

  getSchema(): string;
  setSchema(value: string): MqttUpdateSchemaRequest;

  getDesc(): string;
  setDesc(value: string): MqttUpdateSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttUpdateSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MqttUpdateSchemaRequest): MqttUpdateSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: MqttUpdateSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttUpdateSchemaRequest;
  static deserializeBinaryFromReader(message: MqttUpdateSchemaRequest, reader: jspb.BinaryReader): MqttUpdateSchemaRequest;
}

export namespace MqttUpdateSchemaRequest {
  export type AsObject = {
    schemaName: string,
    schemaType: string,
    schema: string,
    desc: string,
  }
}

export class MqttUpdateSchemaReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttUpdateSchemaReply.AsObject;
  static toObject(includeInstance: boolean, msg: MqttUpdateSchemaReply): MqttUpdateSchemaReply.AsObject;
  static serializeBinaryToWriter(message: MqttUpdateSchemaReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttUpdateSchemaReply;
  static deserializeBinaryFromReader(message: MqttUpdateSchemaReply, reader: jspb.BinaryReader): MqttUpdateSchemaReply;
}

export namespace MqttUpdateSchemaReply {
  export type AsObject = {
  }
}

export class MqttDeleteSchemaRequest extends jspb.Message {
  getSchemaName(): string;
  setSchemaName(value: string): MqttDeleteSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttDeleteSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MqttDeleteSchemaRequest): MqttDeleteSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: MqttDeleteSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttDeleteSchemaRequest;
  static deserializeBinaryFromReader(message: MqttDeleteSchemaRequest, reader: jspb.BinaryReader): MqttDeleteSchemaRequest;
}

export namespace MqttDeleteSchemaRequest {
  export type AsObject = {
    schemaName: string,
  }
}

export class MqttDeleteSchemaReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttDeleteSchemaReply.AsObject;
  static toObject(includeInstance: boolean, msg: MqttDeleteSchemaReply): MqttDeleteSchemaReply.AsObject;
  static serializeBinaryToWriter(message: MqttDeleteSchemaReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttDeleteSchemaReply;
  static deserializeBinaryFromReader(message: MqttDeleteSchemaReply, reader: jspb.BinaryReader): MqttDeleteSchemaReply;
}

export namespace MqttDeleteSchemaReply {
  export type AsObject = {
  }
}

export class MqttListBindSchemaRequest extends jspb.Message {
  getSchemaName(): string;
  setSchemaName(value: string): MqttListBindSchemaRequest;

  getResourceName(): string;
  setResourceName(value: string): MqttListBindSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttListBindSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MqttListBindSchemaRequest): MqttListBindSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: MqttListBindSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttListBindSchemaRequest;
  static deserializeBinaryFromReader(message: MqttListBindSchemaRequest, reader: jspb.BinaryReader): MqttListBindSchemaRequest;
}

export namespace MqttListBindSchemaRequest {
  export type AsObject = {
    schemaName: string,
    resourceName: string,
  }
}

export class MqttListBindSchemaReply extends jspb.Message {
  getSchemaBindsList(): Array<Uint8Array | string>;
  setSchemaBindsList(value: Array<Uint8Array | string>): MqttListBindSchemaReply;
  clearSchemaBindsList(): MqttListBindSchemaReply;
  addSchemaBinds(value: Uint8Array | string, index?: number): MqttListBindSchemaReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttListBindSchemaReply.AsObject;
  static toObject(includeInstance: boolean, msg: MqttListBindSchemaReply): MqttListBindSchemaReply.AsObject;
  static serializeBinaryToWriter(message: MqttListBindSchemaReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttListBindSchemaReply;
  static deserializeBinaryFromReader(message: MqttListBindSchemaReply, reader: jspb.BinaryReader): MqttListBindSchemaReply;
}

export namespace MqttListBindSchemaReply {
  export type AsObject = {
    schemaBindsList: Array<Uint8Array | string>,
  }
}

export class MqttBindSchemaRequest extends jspb.Message {
  getSchemaName(): string;
  setSchemaName(value: string): MqttBindSchemaRequest;

  getResourceName(): string;
  setResourceName(value: string): MqttBindSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttBindSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MqttBindSchemaRequest): MqttBindSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: MqttBindSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttBindSchemaRequest;
  static deserializeBinaryFromReader(message: MqttBindSchemaRequest, reader: jspb.BinaryReader): MqttBindSchemaRequest;
}

export namespace MqttBindSchemaRequest {
  export type AsObject = {
    schemaName: string,
    resourceName: string,
  }
}

export class MqttBindSchemaReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttBindSchemaReply.AsObject;
  static toObject(includeInstance: boolean, msg: MqttBindSchemaReply): MqttBindSchemaReply.AsObject;
  static serializeBinaryToWriter(message: MqttBindSchemaReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttBindSchemaReply;
  static deserializeBinaryFromReader(message: MqttBindSchemaReply, reader: jspb.BinaryReader): MqttBindSchemaReply;
}

export namespace MqttBindSchemaReply {
  export type AsObject = {
  }
}

export class MqttUnbindSchemaRequest extends jspb.Message {
  getSchemaName(): string;
  setSchemaName(value: string): MqttUnbindSchemaRequest;

  getResourceName(): string;
  setResourceName(value: string): MqttUnbindSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttUnbindSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MqttUnbindSchemaRequest): MqttUnbindSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: MqttUnbindSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttUnbindSchemaRequest;
  static deserializeBinaryFromReader(message: MqttUnbindSchemaRequest, reader: jspb.BinaryReader): MqttUnbindSchemaRequest;
}

export namespace MqttUnbindSchemaRequest {
  export type AsObject = {
    schemaName: string,
    resourceName: string,
  }
}

export class MqttUnbindSchemaReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttUnbindSchemaReply.AsObject;
  static toObject(includeInstance: boolean, msg: MqttUnbindSchemaReply): MqttUnbindSchemaReply.AsObject;
  static serializeBinaryToWriter(message: MqttUnbindSchemaReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttUnbindSchemaReply;
  static deserializeBinaryFromReader(message: MqttUnbindSchemaReply, reader: jspb.BinaryReader): MqttUnbindSchemaReply;
}

export namespace MqttUnbindSchemaReply {
  export type AsObject = {
  }
}

export class ListAutoSubscribeRuleRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAutoSubscribeRuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAutoSubscribeRuleRequest): ListAutoSubscribeRuleRequest.AsObject;
  static serializeBinaryToWriter(message: ListAutoSubscribeRuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAutoSubscribeRuleRequest;
  static deserializeBinaryFromReader(message: ListAutoSubscribeRuleRequest, reader: jspb.BinaryReader): ListAutoSubscribeRuleRequest;
}

export namespace ListAutoSubscribeRuleRequest {
  export type AsObject = {
  }
}

export class ListAutoSubscribeRuleReply extends jspb.Message {
  getAutoSubscribeRulesList(): Array<Uint8Array | string>;
  setAutoSubscribeRulesList(value: Array<Uint8Array | string>): ListAutoSubscribeRuleReply;
  clearAutoSubscribeRulesList(): ListAutoSubscribeRuleReply;
  addAutoSubscribeRules(value: Uint8Array | string, index?: number): ListAutoSubscribeRuleReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAutoSubscribeRuleReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListAutoSubscribeRuleReply): ListAutoSubscribeRuleReply.AsObject;
  static serializeBinaryToWriter(message: ListAutoSubscribeRuleReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAutoSubscribeRuleReply;
  static deserializeBinaryFromReader(message: ListAutoSubscribeRuleReply, reader: jspb.BinaryReader): ListAutoSubscribeRuleReply;
}

export namespace ListAutoSubscribeRuleReply {
  export type AsObject = {
    autoSubscribeRulesList: Array<Uint8Array | string>,
  }
}

export class SetAutoSubscribeRuleRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): SetAutoSubscribeRuleRequest;

  getQos(): number;
  setQos(value: number): SetAutoSubscribeRuleRequest;

  getNoLocal(): boolean;
  setNoLocal(value: boolean): SetAutoSubscribeRuleRequest;

  getRetainAsPublished(): boolean;
  setRetainAsPublished(value: boolean): SetAutoSubscribeRuleRequest;

  getRetainedHandling(): number;
  setRetainedHandling(value: number): SetAutoSubscribeRuleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAutoSubscribeRuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetAutoSubscribeRuleRequest): SetAutoSubscribeRuleRequest.AsObject;
  static serializeBinaryToWriter(message: SetAutoSubscribeRuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAutoSubscribeRuleRequest;
  static deserializeBinaryFromReader(message: SetAutoSubscribeRuleRequest, reader: jspb.BinaryReader): SetAutoSubscribeRuleRequest;
}

export namespace SetAutoSubscribeRuleRequest {
  export type AsObject = {
    topic: string,
    qos: number,
    noLocal: boolean,
    retainAsPublished: boolean,
    retainedHandling: number,
  }
}

export class SetAutoSubscribeRuleReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAutoSubscribeRuleReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetAutoSubscribeRuleReply): SetAutoSubscribeRuleReply.AsObject;
  static serializeBinaryToWriter(message: SetAutoSubscribeRuleReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAutoSubscribeRuleReply;
  static deserializeBinaryFromReader(message: SetAutoSubscribeRuleReply, reader: jspb.BinaryReader): SetAutoSubscribeRuleReply;
}

export namespace SetAutoSubscribeRuleReply {
  export type AsObject = {
  }
}

export class DeleteAutoSubscribeRuleRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): DeleteAutoSubscribeRuleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAutoSubscribeRuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAutoSubscribeRuleRequest): DeleteAutoSubscribeRuleRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAutoSubscribeRuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAutoSubscribeRuleRequest;
  static deserializeBinaryFromReader(message: DeleteAutoSubscribeRuleRequest, reader: jspb.BinaryReader): DeleteAutoSubscribeRuleRequest;
}

export namespace DeleteAutoSubscribeRuleRequest {
  export type AsObject = {
    topic: string,
  }
}

export class DeleteAutoSubscribeRuleReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAutoSubscribeRuleReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAutoSubscribeRuleReply): DeleteAutoSubscribeRuleReply.AsObject;
  static serializeBinaryToWriter(message: DeleteAutoSubscribeRuleReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAutoSubscribeRuleReply;
  static deserializeBinaryFromReader(message: DeleteAutoSubscribeRuleReply, reader: jspb.BinaryReader): DeleteAutoSubscribeRuleReply;
}

export namespace DeleteAutoSubscribeRuleReply {
  export type AsObject = {
  }
}

export enum MatchOption { 
  E = 0,
  P = 1,
  S = 2,
}
export enum MqttConnectorType { 
  FILE = 0,
  KAFKA = 1,
}
