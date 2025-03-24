/**
 * @fileoverview gRPC-Web generated client stub for placement.center.inner
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.29.3
// source: inner.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as inner_pb from './inner_pb'; // proto import: "inner.proto"


export class PlacementCenterServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorClusterStatus = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/ClusterStatus',
    grpcWeb.MethodType.UNARY,
    inner_pb.ClusterStatusRequest,
    inner_pb.ClusterStatusReply,
    (request: inner_pb.ClusterStatusRequest) => {
      return request.serializeBinary();
    },
    inner_pb.ClusterStatusReply.deserializeBinary
  );

  clusterStatus(
    request: inner_pb.ClusterStatusRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.ClusterStatusReply>;

  clusterStatus(
    request: inner_pb.ClusterStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.ClusterStatusReply) => void): grpcWeb.ClientReadableStream<inner_pb.ClusterStatusReply>;

  clusterStatus(
    request: inner_pb.ClusterStatusRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.ClusterStatusReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/ClusterStatus',
        request,
        metadata || {},
        this.methodDescriptorClusterStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/ClusterStatus',
    request,
    metadata || {},
    this.methodDescriptorClusterStatus);
  }

  methodDescriptorNodeList = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/NodeList',
    grpcWeb.MethodType.UNARY,
    inner_pb.NodeListRequest,
    inner_pb.NodeListReply,
    (request: inner_pb.NodeListRequest) => {
      return request.serializeBinary();
    },
    inner_pb.NodeListReply.deserializeBinary
  );

  nodeList(
    request: inner_pb.NodeListRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.NodeListReply>;

  nodeList(
    request: inner_pb.NodeListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.NodeListReply) => void): grpcWeb.ClientReadableStream<inner_pb.NodeListReply>;

  nodeList(
    request: inner_pb.NodeListRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.NodeListReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/NodeList',
        request,
        metadata || {},
        this.methodDescriptorNodeList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/NodeList',
    request,
    metadata || {},
    this.methodDescriptorNodeList);
  }

  methodDescriptorRegisterNode = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/RegisterNode',
    grpcWeb.MethodType.UNARY,
    inner_pb.RegisterNodeRequest,
    inner_pb.RegisterNodeReply,
    (request: inner_pb.RegisterNodeRequest) => {
      return request.serializeBinary();
    },
    inner_pb.RegisterNodeReply.deserializeBinary
  );

  registerNode(
    request: inner_pb.RegisterNodeRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.RegisterNodeReply>;

  registerNode(
    request: inner_pb.RegisterNodeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.RegisterNodeReply) => void): grpcWeb.ClientReadableStream<inner_pb.RegisterNodeReply>;

  registerNode(
    request: inner_pb.RegisterNodeRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.RegisterNodeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/RegisterNode',
        request,
        metadata || {},
        this.methodDescriptorRegisterNode,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/RegisterNode',
    request,
    metadata || {},
    this.methodDescriptorRegisterNode);
  }

  methodDescriptorUnRegisterNode = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/UnRegisterNode',
    grpcWeb.MethodType.UNARY,
    inner_pb.UnRegisterNodeRequest,
    inner_pb.UnRegisterNodeReply,
    (request: inner_pb.UnRegisterNodeRequest) => {
      return request.serializeBinary();
    },
    inner_pb.UnRegisterNodeReply.deserializeBinary
  );

  unRegisterNode(
    request: inner_pb.UnRegisterNodeRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.UnRegisterNodeReply>;

  unRegisterNode(
    request: inner_pb.UnRegisterNodeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.UnRegisterNodeReply) => void): grpcWeb.ClientReadableStream<inner_pb.UnRegisterNodeReply>;

  unRegisterNode(
    request: inner_pb.UnRegisterNodeRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.UnRegisterNodeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/UnRegisterNode',
        request,
        metadata || {},
        this.methodDescriptorUnRegisterNode,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/UnRegisterNode',
    request,
    metadata || {},
    this.methodDescriptorUnRegisterNode);
  }

  methodDescriptorHeartbeat = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/Heartbeat',
    grpcWeb.MethodType.UNARY,
    inner_pb.HeartbeatRequest,
    inner_pb.HeartbeatReply,
    (request: inner_pb.HeartbeatRequest) => {
      return request.serializeBinary();
    },
    inner_pb.HeartbeatReply.deserializeBinary
  );

  heartbeat(
    request: inner_pb.HeartbeatRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.HeartbeatReply>;

  heartbeat(
    request: inner_pb.HeartbeatRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.HeartbeatReply) => void): grpcWeb.ClientReadableStream<inner_pb.HeartbeatReply>;

  heartbeat(
    request: inner_pb.HeartbeatRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.HeartbeatReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/Heartbeat',
        request,
        metadata || {},
        this.methodDescriptorHeartbeat,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/Heartbeat',
    request,
    metadata || {},
    this.methodDescriptorHeartbeat);
  }

  methodDescriptorReportMonitor = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/ReportMonitor',
    grpcWeb.MethodType.UNARY,
    inner_pb.ReportMonitorRequest,
    inner_pb.ReportMonitorReply,
    (request: inner_pb.ReportMonitorRequest) => {
      return request.serializeBinary();
    },
    inner_pb.ReportMonitorReply.deserializeBinary
  );

  reportMonitor(
    request: inner_pb.ReportMonitorRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.ReportMonitorReply>;

  reportMonitor(
    request: inner_pb.ReportMonitorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.ReportMonitorReply) => void): grpcWeb.ClientReadableStream<inner_pb.ReportMonitorReply>;

  reportMonitor(
    request: inner_pb.ReportMonitorRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.ReportMonitorReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/ReportMonitor',
        request,
        metadata || {},
        this.methodDescriptorReportMonitor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/ReportMonitor',
    request,
    metadata || {},
    this.methodDescriptorReportMonitor);
  }

  methodDescriptorSetResourceConfig = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/SetResourceConfig',
    grpcWeb.MethodType.UNARY,
    inner_pb.SetResourceConfigRequest,
    inner_pb.SetResourceConfigReply,
    (request: inner_pb.SetResourceConfigRequest) => {
      return request.serializeBinary();
    },
    inner_pb.SetResourceConfigReply.deserializeBinary
  );

  setResourceConfig(
    request: inner_pb.SetResourceConfigRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.SetResourceConfigReply>;

  setResourceConfig(
    request: inner_pb.SetResourceConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.SetResourceConfigReply) => void): grpcWeb.ClientReadableStream<inner_pb.SetResourceConfigReply>;

  setResourceConfig(
    request: inner_pb.SetResourceConfigRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.SetResourceConfigReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/SetResourceConfig',
        request,
        metadata || {},
        this.methodDescriptorSetResourceConfig,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/SetResourceConfig',
    request,
    metadata || {},
    this.methodDescriptorSetResourceConfig);
  }

  methodDescriptorGetResourceConfig = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/GetResourceConfig',
    grpcWeb.MethodType.UNARY,
    inner_pb.GetResourceConfigRequest,
    inner_pb.GetResourceConfigReply,
    (request: inner_pb.GetResourceConfigRequest) => {
      return request.serializeBinary();
    },
    inner_pb.GetResourceConfigReply.deserializeBinary
  );

  getResourceConfig(
    request: inner_pb.GetResourceConfigRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.GetResourceConfigReply>;

  getResourceConfig(
    request: inner_pb.GetResourceConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.GetResourceConfigReply) => void): grpcWeb.ClientReadableStream<inner_pb.GetResourceConfigReply>;

  getResourceConfig(
    request: inner_pb.GetResourceConfigRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.GetResourceConfigReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/GetResourceConfig',
        request,
        metadata || {},
        this.methodDescriptorGetResourceConfig,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/GetResourceConfig',
    request,
    metadata || {},
    this.methodDescriptorGetResourceConfig);
  }

  methodDescriptorDeleteResourceConfig = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/DeleteResourceConfig',
    grpcWeb.MethodType.UNARY,
    inner_pb.DeleteResourceConfigRequest,
    inner_pb.DeleteResourceConfigReply,
    (request: inner_pb.DeleteResourceConfigRequest) => {
      return request.serializeBinary();
    },
    inner_pb.DeleteResourceConfigReply.deserializeBinary
  );

  deleteResourceConfig(
    request: inner_pb.DeleteResourceConfigRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.DeleteResourceConfigReply>;

  deleteResourceConfig(
    request: inner_pb.DeleteResourceConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.DeleteResourceConfigReply) => void): grpcWeb.ClientReadableStream<inner_pb.DeleteResourceConfigReply>;

  deleteResourceConfig(
    request: inner_pb.DeleteResourceConfigRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.DeleteResourceConfigReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/DeleteResourceConfig',
        request,
        metadata || {},
        this.methodDescriptorDeleteResourceConfig,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/DeleteResourceConfig',
    request,
    metadata || {},
    this.methodDescriptorDeleteResourceConfig);
  }

  methodDescriptorSetIdempotentData = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/SetIdempotentData',
    grpcWeb.MethodType.UNARY,
    inner_pb.SetIdempotentDataRequest,
    inner_pb.SetIdempotentDataReply,
    (request: inner_pb.SetIdempotentDataRequest) => {
      return request.serializeBinary();
    },
    inner_pb.SetIdempotentDataReply.deserializeBinary
  );

  setIdempotentData(
    request: inner_pb.SetIdempotentDataRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.SetIdempotentDataReply>;

  setIdempotentData(
    request: inner_pb.SetIdempotentDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.SetIdempotentDataReply) => void): grpcWeb.ClientReadableStream<inner_pb.SetIdempotentDataReply>;

  setIdempotentData(
    request: inner_pb.SetIdempotentDataRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.SetIdempotentDataReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/SetIdempotentData',
        request,
        metadata || {},
        this.methodDescriptorSetIdempotentData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/SetIdempotentData',
    request,
    metadata || {},
    this.methodDescriptorSetIdempotentData);
  }

  methodDescriptorExistsIdempotentData = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/ExistsIdempotentData',
    grpcWeb.MethodType.UNARY,
    inner_pb.ExistsIdempotentDataRequest,
    inner_pb.ExistsIdempotentDataReply,
    (request: inner_pb.ExistsIdempotentDataRequest) => {
      return request.serializeBinary();
    },
    inner_pb.ExistsIdempotentDataReply.deserializeBinary
  );

  existsIdempotentData(
    request: inner_pb.ExistsIdempotentDataRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.ExistsIdempotentDataReply>;

  existsIdempotentData(
    request: inner_pb.ExistsIdempotentDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.ExistsIdempotentDataReply) => void): grpcWeb.ClientReadableStream<inner_pb.ExistsIdempotentDataReply>;

  existsIdempotentData(
    request: inner_pb.ExistsIdempotentDataRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.ExistsIdempotentDataReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/ExistsIdempotentData',
        request,
        metadata || {},
        this.methodDescriptorExistsIdempotentData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/ExistsIdempotentData',
    request,
    metadata || {},
    this.methodDescriptorExistsIdempotentData);
  }

  methodDescriptorDeleteIdempotentData = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/DeleteIdempotentData',
    grpcWeb.MethodType.UNARY,
    inner_pb.DeleteIdempotentDataRequest,
    inner_pb.DeleteIdempotentDataReply,
    (request: inner_pb.DeleteIdempotentDataRequest) => {
      return request.serializeBinary();
    },
    inner_pb.DeleteIdempotentDataReply.deserializeBinary
  );

  deleteIdempotentData(
    request: inner_pb.DeleteIdempotentDataRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.DeleteIdempotentDataReply>;

  deleteIdempotentData(
    request: inner_pb.DeleteIdempotentDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.DeleteIdempotentDataReply) => void): grpcWeb.ClientReadableStream<inner_pb.DeleteIdempotentDataReply>;

  deleteIdempotentData(
    request: inner_pb.DeleteIdempotentDataRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.DeleteIdempotentDataReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/DeleteIdempotentData',
        request,
        metadata || {},
        this.methodDescriptorDeleteIdempotentData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/DeleteIdempotentData',
    request,
    metadata || {},
    this.methodDescriptorDeleteIdempotentData);
  }

  methodDescriptorSaveOffsetData = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/SaveOffsetData',
    grpcWeb.MethodType.UNARY,
    inner_pb.SaveOffsetDataRequest,
    inner_pb.SaveOffsetDataReply,
    (request: inner_pb.SaveOffsetDataRequest) => {
      return request.serializeBinary();
    },
    inner_pb.SaveOffsetDataReply.deserializeBinary
  );

  saveOffsetData(
    request: inner_pb.SaveOffsetDataRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.SaveOffsetDataReply>;

  saveOffsetData(
    request: inner_pb.SaveOffsetDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.SaveOffsetDataReply) => void): grpcWeb.ClientReadableStream<inner_pb.SaveOffsetDataReply>;

  saveOffsetData(
    request: inner_pb.SaveOffsetDataRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.SaveOffsetDataReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/SaveOffsetData',
        request,
        metadata || {},
        this.methodDescriptorSaveOffsetData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/SaveOffsetData',
    request,
    metadata || {},
    this.methodDescriptorSaveOffsetData);
  }

  methodDescriptorGetOffsetData = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/GetOffsetData',
    grpcWeb.MethodType.UNARY,
    inner_pb.GetOffsetDataRequest,
    inner_pb.GetOffsetDataReply,
    (request: inner_pb.GetOffsetDataRequest) => {
      return request.serializeBinary();
    },
    inner_pb.GetOffsetDataReply.deserializeBinary
  );

  getOffsetData(
    request: inner_pb.GetOffsetDataRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.GetOffsetDataReply>;

  getOffsetData(
    request: inner_pb.GetOffsetDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.GetOffsetDataReply) => void): grpcWeb.ClientReadableStream<inner_pb.GetOffsetDataReply>;

  getOffsetData(
    request: inner_pb.GetOffsetDataRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.GetOffsetDataReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/GetOffsetData',
        request,
        metadata || {},
        this.methodDescriptorGetOffsetData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/GetOffsetData',
    request,
    metadata || {},
    this.methodDescriptorGetOffsetData);
  }

  methodDescriptorListSchema = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/ListSchema',
    grpcWeb.MethodType.UNARY,
    inner_pb.ListSchemaRequest,
    inner_pb.ListSchemaReply,
    (request: inner_pb.ListSchemaRequest) => {
      return request.serializeBinary();
    },
    inner_pb.ListSchemaReply.deserializeBinary
  );

  listSchema(
    request: inner_pb.ListSchemaRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.ListSchemaReply>;

  listSchema(
    request: inner_pb.ListSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.ListSchemaReply) => void): grpcWeb.ClientReadableStream<inner_pb.ListSchemaReply>;

  listSchema(
    request: inner_pb.ListSchemaRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.ListSchemaReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/ListSchema',
        request,
        metadata || {},
        this.methodDescriptorListSchema,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/ListSchema',
    request,
    metadata || {},
    this.methodDescriptorListSchema);
  }

  methodDescriptorCreateSchema = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/CreateSchema',
    grpcWeb.MethodType.UNARY,
    inner_pb.CreateSchemaRequest,
    inner_pb.CreateSchemaReply,
    (request: inner_pb.CreateSchemaRequest) => {
      return request.serializeBinary();
    },
    inner_pb.CreateSchemaReply.deserializeBinary
  );

  createSchema(
    request: inner_pb.CreateSchemaRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.CreateSchemaReply>;

  createSchema(
    request: inner_pb.CreateSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.CreateSchemaReply) => void): grpcWeb.ClientReadableStream<inner_pb.CreateSchemaReply>;

  createSchema(
    request: inner_pb.CreateSchemaRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.CreateSchemaReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/CreateSchema',
        request,
        metadata || {},
        this.methodDescriptorCreateSchema,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/CreateSchema',
    request,
    metadata || {},
    this.methodDescriptorCreateSchema);
  }

  methodDescriptorUpdateSchema = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/UpdateSchema',
    grpcWeb.MethodType.UNARY,
    inner_pb.UpdateSchemaRequest,
    inner_pb.UpdateSchemaReply,
    (request: inner_pb.UpdateSchemaRequest) => {
      return request.serializeBinary();
    },
    inner_pb.UpdateSchemaReply.deserializeBinary
  );

  updateSchema(
    request: inner_pb.UpdateSchemaRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.UpdateSchemaReply>;

  updateSchema(
    request: inner_pb.UpdateSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.UpdateSchemaReply) => void): grpcWeb.ClientReadableStream<inner_pb.UpdateSchemaReply>;

  updateSchema(
    request: inner_pb.UpdateSchemaRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.UpdateSchemaReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/UpdateSchema',
        request,
        metadata || {},
        this.methodDescriptorUpdateSchema,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/UpdateSchema',
    request,
    metadata || {},
    this.methodDescriptorUpdateSchema);
  }

  methodDescriptorDeleteSchema = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/DeleteSchema',
    grpcWeb.MethodType.UNARY,
    inner_pb.DeleteSchemaRequest,
    inner_pb.DeleteSchemaReply,
    (request: inner_pb.DeleteSchemaRequest) => {
      return request.serializeBinary();
    },
    inner_pb.DeleteSchemaReply.deserializeBinary
  );

  deleteSchema(
    request: inner_pb.DeleteSchemaRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.DeleteSchemaReply>;

  deleteSchema(
    request: inner_pb.DeleteSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.DeleteSchemaReply) => void): grpcWeb.ClientReadableStream<inner_pb.DeleteSchemaReply>;

  deleteSchema(
    request: inner_pb.DeleteSchemaRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.DeleteSchemaReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/DeleteSchema',
        request,
        metadata || {},
        this.methodDescriptorDeleteSchema,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/DeleteSchema',
    request,
    metadata || {},
    this.methodDescriptorDeleteSchema);
  }

  methodDescriptorListBindSchema = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/ListBindSchema',
    grpcWeb.MethodType.UNARY,
    inner_pb.ListBindSchemaRequest,
    inner_pb.ListBindSchemaReply,
    (request: inner_pb.ListBindSchemaRequest) => {
      return request.serializeBinary();
    },
    inner_pb.ListBindSchemaReply.deserializeBinary
  );

  listBindSchema(
    request: inner_pb.ListBindSchemaRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.ListBindSchemaReply>;

  listBindSchema(
    request: inner_pb.ListBindSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.ListBindSchemaReply) => void): grpcWeb.ClientReadableStream<inner_pb.ListBindSchemaReply>;

  listBindSchema(
    request: inner_pb.ListBindSchemaRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.ListBindSchemaReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/ListBindSchema',
        request,
        metadata || {},
        this.methodDescriptorListBindSchema,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/ListBindSchema',
    request,
    metadata || {},
    this.methodDescriptorListBindSchema);
  }

  methodDescriptorBindSchema = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/BindSchema',
    grpcWeb.MethodType.UNARY,
    inner_pb.BindSchemaRequest,
    inner_pb.BindSchemaReply,
    (request: inner_pb.BindSchemaRequest) => {
      return request.serializeBinary();
    },
    inner_pb.BindSchemaReply.deserializeBinary
  );

  bindSchema(
    request: inner_pb.BindSchemaRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.BindSchemaReply>;

  bindSchema(
    request: inner_pb.BindSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.BindSchemaReply) => void): grpcWeb.ClientReadableStream<inner_pb.BindSchemaReply>;

  bindSchema(
    request: inner_pb.BindSchemaRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.BindSchemaReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/BindSchema',
        request,
        metadata || {},
        this.methodDescriptorBindSchema,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/BindSchema',
    request,
    metadata || {},
    this.methodDescriptorBindSchema);
  }

  methodDescriptorUnBindSchema = new grpcWeb.MethodDescriptor(
    '/placement.center.inner.PlacementCenterService/UnBindSchema',
    grpcWeb.MethodType.UNARY,
    inner_pb.UnBindSchemaRequest,
    inner_pb.UnBindSchemaReply,
    (request: inner_pb.UnBindSchemaRequest) => {
      return request.serializeBinary();
    },
    inner_pb.UnBindSchemaReply.deserializeBinary
  );

  unBindSchema(
    request: inner_pb.UnBindSchemaRequest,
    metadata?: grpcWeb.Metadata | null): Promise<inner_pb.UnBindSchemaReply>;

  unBindSchema(
    request: inner_pb.UnBindSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: inner_pb.UnBindSchemaReply) => void): grpcWeb.ClientReadableStream<inner_pb.UnBindSchemaReply>;

  unBindSchema(
    request: inner_pb.UnBindSchemaRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: inner_pb.UnBindSchemaReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/placement.center.inner.PlacementCenterService/UnBindSchema',
        request,
        metadata || {},
        this.methodDescriptorUnBindSchema,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/placement.center.inner.PlacementCenterService/UnBindSchema',
    request,
    metadata || {},
    this.methodDescriptorUnBindSchema);
  }

}

