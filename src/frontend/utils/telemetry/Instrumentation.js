// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

// const opentelemetry = require('@opentelemetry/sdk-node');
// const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
// const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-grpc');
// const { OTLPMetricExporter } = require('@opentelemetry/exporter-metrics-otlp-grpc');
// const { PeriodicExportingMetricReader } = require('@opentelemetry/sdk-metrics');
// const { alibabaCloudEcsDetector } = require('@opentelemetry/resource-detector-alibaba-cloud');
// const { awsEc2Detector, awsEksDetector } = require('@opentelemetry/resource-detector-aws');
// const { containerDetector } = require('@opentelemetry/resource-detector-container');
// const { gcpDetector } = require('@opentelemetry/resource-detector-gcp');
// const { envDetector, hostDetector, osDetector, processDetector } = require('@opentelemetry/resources');

// const sdk = new opentelemetry.NodeSDK({
//     traceExporter: new OTLPTraceExporter(),
//     instrumentations: [getNodeAutoInstrumentations()],
//     metricReader: new PeriodicExportingMetricReader({
//         exporter: new OTLPMetricExporter(),
//     }),
//     resourceDetectors: [
//         containerDetector,
//         envDetector,
//         hostDetector,
//         osDetector,
//         processDetector,
//         alibabaCloudEcsDetector,
//         awsEksDetector,
//         awsEc2Detector,
//         gcpDetector,
//     ],
// });

// sdk.start();

const HyperDX = require('@hyperdx/browser');

HyperDX.init({
  apiKey: '79d68bff-9496-4641-ad3c-bce74f47fa2a',
  service: 'frontend',
  tracePropagationTargets: [/api/i], // Set to link traces from frontend to backend requests
});
